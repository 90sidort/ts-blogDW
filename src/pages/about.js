import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const aboutBio = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>Hi! This is a famous Dasz Wiarę blog!</p>
            <p>This blog contains all articles posted on Wykop.pl by Andrzej and Luvencedus</p>
            <p>Interested? Check <Link to='/contact'>contact</Link> options.</p>
        </Layout>
    )
}

export default aboutBio