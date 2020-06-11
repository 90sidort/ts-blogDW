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
                        tag
                    }
                }
            }
        }
    }
    `)
    const tagsArr = [];
    let tagArr = [];
    data.allMarkdownRemark.edges.map((edge) => {
        if (edge.node.frontmatter.tag) {
            tagArr = (edge.node.frontmatter.tag).split(',')
            tagArr.forEach((singleTag) => {
                if (!tagsArr.includes(`#${singleTag.trim()}  `)){
                    tagsArr.push(`#${singleTag.trim()}  `)
                }
            })
        }
    })
    return (
        <Layout>
            <Head title ="Tagi" />
            <h1>Tagi</h1>
            <p>{tagsArr}</p>
        </Layout>
    )
}

export default TagsPage