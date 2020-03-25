import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const aboutBio = () => {
    return (
        <Layout>
            <h1>Dasz Wiarę?</h1>
            <p class="indented_paragraph">
                Seria powstała jako solowy projekt <a class="linkUnderscore" href='https://www.wykop.pl/ludzie/luvencedus/'>luvencedusa</a>. Zapoczątkował ją pierwszym wpisem
                o kultach cargo rodem z wysp Oceanii. Z czasem dołączył do niego inny pasjonat religioznawstwa i historii-&nbsp; 
                <a class="linkUnderscore" href='https://www.wykop.pl/ludzie/niedoszly_andrzej/'>andrzej</a>, tworząc wpis o masowej konwersji Majów na prawosławie.
            </p>
            <p class="indented_paragraph">
                Seria jest poświęcona szeroko rozumianej religii i historii religii. Piszemy o wszystkim- od starożytnych, wymarłych wiar takich jak manicheizm po stosunkowo niedawno
                powstałe grupy jak na przykład mormoni. Czas i przestrzeń również nie stanowią dla nas problemu- piszemy zarówno o współczesnych kimbangistach z Czarnej Afrykii czy indyjskiej
                nawajanie jak i o średniowiecznych, francuskich waldensach czy wsczesnonowożytnych, andaluzyjskich moryskach. Przyglądamy się zarówno tym, którzy roszczą sobie prawo do totalnej
                ortodoksji (na przykład starowiercy) jak i jawnym synkretystom spod znaku kaodaizmu czy alewizmu. Interesują nas zarówno wierzenia objawione (na przykład sikhizm) jak i naturalne
                (na przykład Kalasze), zorganizowane (na przykład wiara bahai) i nie mające formalnej struktury (działalność Apolloniusza z Tyany).                 
            </p>
            <p class="indented_paragraph">    
                Naszym zadaniem jest zgłębienie i przybliżenie czytelnikowi tego jak różne grupy starały lub starają się odpowiadać na pytania o sens istnienia, które to pytanie zadaje sobie chyba
                każdy człowiek. Chcemy pokazać zróżnicowanie odpowiedzi, poglądów i przekonań na przestrzeni wieków i obecnie. Chcemy także pokazać role jakie systemy wierzeń i przekonania odgrywały
                i odgrywają w społeczeństwie i ludzkiej historii. 
            </p>
            <p class="indented_paragraph">
                Staramy się bazować na jak najlepszych i najbardziej wiarygodnych źródłach. Jesteśmy jednak tylko ludźmi i dlatego prosimy o wyrozumiałość. W przypadku znalezienia jakichkolwiek 
                błędów lub nieścisłości prosimy o&nbsp; 
                <Link class="linkUnderscore" to='/contact'>
                    kontakt
                </Link>. Jeśli okaże się, że nie mieliśmy racji albo zaszła pomyłka- niezwłocznie ją poprawimy i podamy informację w tekście.</p>
        </Layout>
    )
}

export default aboutBio