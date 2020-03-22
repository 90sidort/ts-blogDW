import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

const indexPage = () => {
    return (
            <Layout>
                <h1>Hello.</h1>
                <h2>Welcome to Dasz Wiarę blog</h2>
                <p>Wanna get in touch? Check <Link to='/contact'>contact</Link> options.</p>
                <p>Ąęśąć</p>
            </Layout>
    )
}

export default indexPage