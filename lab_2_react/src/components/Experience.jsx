function Experience() {
    return (
        <section>
            {/* заголовок секції "Навички" */}
            <h2 className="uppercase text-xl border-y border-dashed border-gray-600 py-2 mt-8 mb-4 font-bold">
                Технічні навички та експертиза
            </h2>
            
            <ul className="columns-1 md:columns-2 gap-10 list-disc pl-5 mb-8">
                <li className="mb-2"><strong>Мережеві технології:</strong> Налаштування маршрутизаторів та комутаторів, конфігурація VLAN та VPN (досвід у Cisco Packet Tracer).</li>
                <li className="mb-2"><strong>Кібербезпека:</strong> OSINT, технічний захист інформації (ТЗІ), знання нормативно-правового забезпечення.</li>
                <li className="mb-2"><strong>Програмування та БД:</strong> C, C#, Python, PHP, MySQL.</li>
                <li className="mb-2"><strong>Інженерна база:</strong> Цифрова схемотехніка, архітектура операційних систем.</li>
                <li className="mb-2"><strong>Мови:</strong> Англійська (B1-B2).</li>
            </ul>
            
            {/* заголовок секції "Проєктний досвід" */}
            <h2 className="uppercase text-xl border-y border-dashed border-gray-600 py-2 mt-8 mb-4 font-bold">
                Проєктний досвід
            </h2>
            
            <h3 className="text-lg font-bold mb-1">Python Network Port Scanner</h3>
            <p className="mb-3">CLI-утиліта для сканування портів та аудиту безпеки локальної мережі. Використовує сокети для визначення активних сервісів.</p>
            <ul className="list-disc pl-5 mb-6">
                <li className="mb-1">Реалізовано багатопотокове сканування TCP/UDP портів.</li>
                <li className="mb-1">Додано функцію визначення версії сервісів (Banner Grabbing).</li>
                <li className="mb-1">Автоматичне збереження звітів у .txt форматі.</li>
            </ul>
        </section>
    );
}

export default Experience;