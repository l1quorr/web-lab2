import { useState, useEffect } from 'react';

export default function ContactForm() {
    //  стан для відкриття/закриття модалки (спочатку закрито)
    const [isOpen, setIsOpen] = useState(false);

    // запускаєм таймер при завантаженні сторінки
    useEffect(() => {
        // таймер на 60000 мс (1 хвилина).
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []);

    // якщо isOpen === false, компонент взагалі нічого не показує на екрані
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
            {/*   форма  */}
            <div className="bg-white p-8 rounded-lg shadow-xl w-[90%] max-w-md relative">
                
                {/* кнопка закриття  */}
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-4 text-3xl font-bold text-gray-500 hover:text-gray-800"
                >
                    &times;
                </button>
                
                <h2 className="text-xl font-bold mb-4 uppercase text-black">залиште відгук</h2>
                
                {/* форма formspree */}
                <form action="https://formspree.io/f/xaqpaqzr" method="POST" className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-gray-700">Ім'я:</label>
                    <input type="text" name="name" required className="border border-gray-300 p-2 rounded text-black" />
                    
                    <label className="text-sm font-bold text-gray-700">email:</label>
                    <input type="email" name="email" required className="border border-gray-300 p-2 rounded text-black" />
                    
                    <label className="text-sm font-bold text-gray-700">Телефон:</label>
                    <input type="tel" name="phone" className="border border-gray-300 p-2 rounded text-black" />
                    
                    <label className="text-sm font-bold text-gray-700">Повідомлення:</label>
                    <textarea name="message" rows="4" required className="border border-gray-300 p-2 rounded text-black"></textarea>
                    
                    <button type="submit" className="bg-orange-600 text-white font-bold py-2 rounded mt-2 hover:bg-orange-700 transition-colors">
                        Відправити
                    </button>
                </form>
            </div>
        </div>
    );
}