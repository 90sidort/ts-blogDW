import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BackMain from '../components/backMain'
import blogStyles from '../styles/blog.module.scss'

export const query = graphql`
query ( $slug: String!) {
    markdownRemark (fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subtitle
        date
        original
        author
      }
      html
    }
  }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <h4>{props.data.markdownRemark.frontmatter.subtitle}</h4>
            <h6>
                Autor: {props.data.markdownRemark.frontmatter.author}, Opublikowany: {props.data.markdownRemark.frontmatter.date}, Zobacz na&nbsp;
                <a className={blogStyles.backMain} href={props.data.markdownRemark.frontmatter.original}>
                    Wykopie
                </a>
            </h6>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
            <BackMain />
        </Layout>
    )
}

export default Blog