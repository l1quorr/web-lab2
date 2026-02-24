function Header() {
    return (
        <header>
            <h1>Андрій Леонов</h1>
            <p>Студент спеціальності "Кібербезпека" (Львівська Політехніка)</p>
            <nav>
                <ul>
                    <li>Email: <a href="mailto:leonov.andriy2005@gmail.com">leonov.andriy2005@gmail.com</a></li>
                    <li>Uni Email: <a href="mailto:andrii.leonov.kb.2023@lpnu.ua">andrii.leonov.kb.2023@lpnu.ua</a></li>
                    <li>GitHub: <a href="https://github.com/l1quorr" target="_blank">github.com/l1quorr</a></li>
                </ul>
            </nav>
            <hr />
            <section>
                <h2>Профіль</h2>
                <p>Студент кафедри захисту інформації (вступ 2023 року). Цікавлюся мережевою безпекою, OSINT та низькорівневим програмуванням. Маю навички адміністрування Windows/Linux та розробки захищеного ПЗ.</p>
            </section>
        </header>
    );
}

export default Header;