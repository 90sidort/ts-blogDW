import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from '../styles/blog.module.scss'
import Head from '../components/head'

const AllTagsPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    frontmatter {
                        title
                        subtitle
                        date
                        titleTab
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
    const tagsAll = []
    let singlePostTags = []

    data.allMarkdownRemark.edges.forEach((edge) => {
        singlePostTags = (edge.node.frontmatter.tag).split(',')
        singlePostTags.forEach((singlePost) => {
            if(!tagsAll.includes(`${singlePost.trim()} `)) {
                tagsAll.push(`${singlePost.trim()} `)
            }
        })
    })
    return (
        <Layout>
            <Head title ="Tagi" />
            <h1>Tagi</h1>
            <p>Wszystkie tagi w serii:</p>
            <div>
                {tagsAll.map((oneTag) => {
                    return (
                        <span className={blogStyles.tagSpan}>
                            <Link to={`/tag/${oneTag}`}  className={blogStyles.tagLink}>#{oneTag}</Link>
                        </span>
                    )
                })}
            </div>
        </Layout>
    )
}

export default AllTagsPage