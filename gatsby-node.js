const path = require('path')

module.exports.onCreateNode = ({ node, actions}) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const tagTemplate = path.resolve('./src/templates/tags-page.js')
    const response = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            tag
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    
    const tagsFetched = []
    let postTags = []

    response.data.allMarkdownRemark.edges.forEach((edge) => {
        postTags = (edge.node.frontmatter.tag).split(',')
        postTags.forEach((singlePost) => {
            if(!tagsFetched.includes(singlePost.trim())) {
                tagsFetched.push(singlePost.trim())
            }
        })

        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
    // response.data.allMarkdownRemark.edges.forEach((singleEdge) => {
    //     postTags = (singleEdge.node.frontmatter.tag).split(',')
    //     postTags.forEach((singlePost) => {
    //         if(!tagsFetched.includes(singlePost.trim())) {
    //             tagsFetched.push(singlePost.trim())
    //         }
    //     })
    // })

    tagsFetched.forEach((tagFetched) => {
        createPage({
            component: tagTemplate,
            path: `/tag/${tagFetched}`,
            context: {
                slug: tagFetched
            }
        })
    })

}