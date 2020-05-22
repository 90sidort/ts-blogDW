import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from '../styles/blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
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
                    }
                    fields {
                        slug
                    }
      
                }
            }
        }
    }
    `)
    return (
        <Layout>
            <Head title ="Blog" />
            <h1>Blog</h1>
            <p>Wszystkie wpisy z serii:</p>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post} key={edge.node.frontmatter.titleTab}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <h4>{edge.node.frontmatter.subtitle}</h4>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage