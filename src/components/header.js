import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyle from './header.module.scss'

const Header = () => {
    const dataHeader = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)
    return (
        <header className={headerStyle.header}>
            <h1>
                <Link className={headerStyle.title} to="/">
                    {dataHeader.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyle.navlist}>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activateNavItem} to="/">Main site</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activateNavItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activateNavItem} to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activateNavItem} to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header