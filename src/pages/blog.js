import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        subtitle
                        date
                    }
                }
            }
        }
    }
    `)
    return (
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here in the future.</p>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <h4>{edge.node.frontmatter.subtitle}</h4>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage