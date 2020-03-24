import React from 'react'
import { Link } from 'gatsby'
import blogStyles from '../styles/blog.module.scss'

const BackMain = () => {
    return (
            <Link className={blogStyles.backMain} to='/blog'>
                <span>&uarr; Wróć do spisu odcinków</span>
            </Link>
    )
}

export default BackMain