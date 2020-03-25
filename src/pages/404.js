import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'

const notFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <h1>Strona nie istnieje</h1>
            <p>Wróć do&nbsp;<Link to="/" class="linkUnderscore">Strony Głównej</Link></p>
        </Layout>
    )
}

export default notFound