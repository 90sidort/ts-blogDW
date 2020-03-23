import React from 'react'
import { Link } from 'gatsby'
import headerStyle from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <h1>
                <Link className={headerStyle.title} to="/">
                    Dasz wiarę blog
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