import React from 'react'
import Layout from '../components/layout'
import andrewLogo from '../images/andrew.jpg'
import luvenLogo from '../images/luvencedus.jpg'
import Head from '../components/head'

const contactDetails = () => {
    return (
        <Layout>
            <Head title ="Kontakt" />
            <h1>Kontakt</h1>
            <p>Jeżeli z jakiegokolwiek powodu chciałbyś się z kontaktować z autorami, napisz do nich na Wykopie:</p>
            <ul class="authorList">
                <li>
                    <a href="https://www.wykop.pl/ludzie/niedoszly_andrzej/" target="_blank" rel="noopener noreferrer" class="linkUnderscore"><img src={andrewLogo} alt="andrzej" class="authorAvatar"></img>Andrzej</a>
                </li>
                <li>
                    <a href="https://www.wykop.pl/ludzie/luvencedus/" target="_blank" rel="noopener noreferrer" class="linkUnderscore"><img src={luvenLogo} alt="luvencedus" class="authorAvatar"></img>Luvencedus</a>
                </li>
            </ul>
            <p>lub napisz bezpośrednio na tagu <a href="https://www.wykop.pl/tag/daszwiare/" target="_blank" rel="noopener noreferrer" class="linkUnderscore">"Dasz Wiarę?"</a>.</p>
        </Layout>
    )
}

export default contactDetails