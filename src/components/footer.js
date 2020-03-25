import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

const Footer = () => {
    const dataFooter = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
    `)
    return (
        <footer className={footerStyles.footer}>
            <p className={footerStyles.paragraphSize}>Created by {dataFooter.site.siteMetadata.author}, powered by GatsbyJS, &copy; 2020</p>
        </footer>
    )
}

export default Footer