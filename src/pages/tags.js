import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const TagsPage = () => {
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
                }
            }
        }
    }
    `)
    return (
        <Layout>
            <Head title ="Tagi" />
            <h1>Tagi</h1>
            <p>Wszystkie tagi w serii:</p>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    console.log(edge)
                    if (edge.node.frontmatter.tag) {
                        return (
                            <h4>#{edge.node.frontmatter.tag}</h4>
                        )
                    }
                })}
            </ol>
        </Layout>
    )
}

export default TagsPage