import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyle from '../styles/header.module.scss'
import iconLogo from '../images/logo.jpg'


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
                    <img src={iconLogo} alt="logo" className="logoAvatar"></img>
                    {dataHeader.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyle.navlist}>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activateNavItem} to="/">Główna</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activateNavItem} to="/about">Seria</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activateNavItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activateNavItem} to="/tags">Tagi</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activateNavItem} to="/contact">Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header