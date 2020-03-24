import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

const indexPage = () => {
    return (
            <Layout>
                <h1>Cześć!</h1>
                <p>Ta strona jest poświęcona serii "Dasz Wiarę", pierwotnie publikowanej na <Link class="linkUnderscore" to='/contact'>Wykopie</Link>.</p>
                <p>Co to za seria i o czym jest ten blog? Sprawdź zakładkę <Link class="linkUnderscore" to='/blog'>O serii</Link>.</p>
                <p>Wpisy są dostępne w zakładce <Link class="linkUnderscore" to='/blog'>Blog</Link>.</p>
                <p>Znalazłeś błędy lub chcesz się skontaktować? Zobacz zakładkę <Link class="linkUnderscore" to='/contact'>Kontakt</Link>.</p>
            </Layout>
    )
}

export default indexPage