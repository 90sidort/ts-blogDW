import React from 'react'
import { Link } from 'gatsby'
import headerStyle from './header.module.scss'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link className={headerStyle.link} to="/">Main site</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header