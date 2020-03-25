import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const notFound = () => {
    return (
        <Layout>
            <h1>Strona nie istnieje</h1>
            <p>Wróć do&nbsp;<Link to="/" class="linkUnderscore">Strony Głównej</Link></p>
        </Layout>
    )
}

export default notFound