function Header() {
    return (
        <header className="mb-8">
            {/* text-5xl робить текст гігантським, tracking-widest додає простір між літерами */}
            <h1 className="text-5xl uppercase tracking-widest font-bold mb-2">Андрій Леонов</h1>
            <p className="mb-4 text-gray-800">Студент спеціальності "Кібербезпека" (Львівська Політехніка)</p>
            
            <nav>
                {/* flex та gap-4 вибудовують контакти в рядок з відступами */}
                <ul className="flex flex-wrap gap-4 list-none p-0">
                    <li>Email: <a href="mailto:leonov.andriy2005@gmail.com" className="font-bold text-black no-underline hover:text-[#f05a30] transition-colors">leonov.andriy2005@gmail.com</a></li>
                    <li>Uni Email: <a href="mailto:andrii.leonov.kb.2023@lpnu.ua" className="font-bold text-black no-underline hover:text-[#f05a30] transition-colors">andrii.leonov.kb.2023@lpnu.ua</a></li>
                    <li>GitHub: <a href="https://github.com/l1quorr" target="_blank" className="font-bold text-black no-underline hover:text-[#f05a30] transition-colors">github.com/l1quorr</a></li>
                </ul>
            </nav>

            <section className="mt-10">
                {/* border-y та border-dashed створюють пунктирні лінії зверху і знизу */}
                <h2 className="uppercase text-xl border-y border-dashed border-gray-600 py-2 mb-4 font-bold">Профіль</h2>
                <p>Студент кафедри захисту інформації (вступ 2023 року). Цікавлюся мережевою безпекою, OSINT та низькорівневим програмуванням. Маю навички адміністрування Windows/Linux та розробки захищеного ПЗ.</p>
            </section>
        </header>
    );
}

export default Header;