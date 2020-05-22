import React from 'react'
import { Link } from 'gatsby'
import blogStyles from '../styles/blog.module.scss'

const BackMain = () => {
    return (
        <div className={blogStyles.backMainDiv}>
            <Link className={blogStyles.backMain} to='/blog'>
                <span>&uarr; Wróć do spisu odcinków</span>
            </Link>
        </div>
    )
}

export default BackMain