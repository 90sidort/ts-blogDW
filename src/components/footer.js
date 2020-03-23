import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
        <footer>
            <p>Created by {dataFooter.site.siteMetadata.author}, &copy; 2020</p>
        </footer>
    )
}

export default Footer