import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from '../styles/blog.module.scss'
import BackMain from '../components/backMain'

const TagsPage = (props) => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    frontmatter {
                        title
                        subtitle
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
    return (
        <Layout>
            <Head title={`tag #${props.pageContext.slug}`}/>
                <h3>Wpisy z tagiem: #{props.pageContext.slug}</h3>
                <ul className={blogStyles.posts}>
                    {
                        data.allMarkdownRemark.edges.map((edge) => {
                        if ((edge.node.frontmatter.tag).includes(props.pageContext.slug)) {
                            return (
                                <li className={blogStyles.post}>
                                    <Link to={`/blog/${edge.node.fields.slug}`} className={blogStyles.wykopLink}>
                                        <h2>{edge.node.frontmatter.title}</h2>
                                        <h4>{edge.node.frontmatter.subtitle}</h4>
                                    </Link>
                                </li>
                            )
                        }
                    })
                    }
                </ul>
                <BackMain />
        </Layout>
    )
}

export default TagsPage