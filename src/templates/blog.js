import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BackMain from '../components/backMain'
import blogStyles from '../styles/blog.module.scss'
import Head from '../components/head'
import Sources from '../components/sources'

export const query = graphql`
query ( $slug: String!) {
    markdownRemark (fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subtitle
        date
        original
        author
        titleTab
        sources
        notes
      }
      html
    }
  }
`

// const Blog = (props) => {
//   const notesArr = []
//   if (props.data.markdownRemark.frontmatter.notes !== null) {
//     props.data.markdownRemark.frontmatter.notes.split('   ').forEach((singleNote) => {
//       notesArr.push(singleNote)
//     })
//   }

    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.titleTab}/>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <h4>{props.data.markdownRemark.frontmatter.subtitle}</h4>
            <h6>
                Autor: {props.data.markdownRemark.frontmatter.author}, Opublikowany: {props.data.markdownRemark.frontmatter.date}, Zobacz na&nbsp;
                <a className={blogStyles.wykopLink} href={props.data.markdownRemark.frontmatter.original}>
                    Wykopie
                </a>
            </h6>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}} className={blogStyles.mainContent}></div>
            <BackMain />
            {props.data.markdownRemark.frontmatter.sources !== null && 
              <Sources sources={props.data.markdownRemark.frontmatter.sources}/>
            }
            {/* <p className={blogStyles.notesP}>
            {notesArr.map((note, id) => {
              return (
                  <p>
                    <small>{'*'.repeat(id+1)}{note}</small>
                  </p>
              )
            }) 
            }
            </p> */}
        </Layout>
    )
}

export default Blog