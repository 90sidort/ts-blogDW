import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const indexPage = () => {
    return (
            <Layout>
                <Head title ="Główna" />
                <h1>Cześć!</h1>
                <p>Ta strona jest poświęcona serii "Dasz Wiarę", pierwotnie publikowanej na <a class="linkUnderscore" href="https://www.wykop.pl/tag/daszwiare/" target="_blank" rel="noopener noreferrer">Wykopie</a>.</p>
                <p>Co to za seria i o czym jest ten blog? Sprawdź zakładkę <Link class="linkUnderscore" to='/about'>Seria</Link>.</p>
                <p>Wpisy są dostępne w zakładce <Link class="linkUnderscore" to='/blog'>Blog</Link> (chronologicznie) oraz <Link class="linkUnderscore" to='/tags'>Tagi</Link> (tematycznie).</p>
                <p>Znalazłeś błędy lub chcesz się skontaktować? Zobacz zakładkę <Link class="linkUnderscore" to='/contact'>Kontakt</Link>.</p>
            </Layout>
    )
}

export default indexPage