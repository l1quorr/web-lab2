import { useState, useEffect } from 'react';

export default function Reviews() {
    //  стан для збереження масиву відгуків
    const [comments, setComments] = useState([]);

    // використовую useEffect для завантаження даних при відкритті сторінки
    useEffect(() => {
        // роблю асинхронний запит на сервер
        const fetchReviews = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/9/comments');
                const data = await response.json();
                
                // зберігаю отримані коментарі у стан
                setComments(data);
            } catch (error) {
                console.error('помилка при завантаженні відгуків:', error);
            }
        };

        fetchReviews();
    }, []); // порожній масив, щоб запит пішов лише один раз

    return (
        <section className="mt-10">
            <h2 className="uppercase text-xl border-y border-dashed border-gray-600 py-2 mb-4 font-bold">
                Відгуки роботодавців
            </h2>
            
            <div className="flex flex-col gap-4">
                {/* перебираю масив коментарів і малюю картку для кожного */}
                {comments.map((comment) => (
                    <div key={comment.id} className="border-b border-dashed border-gray-300 pb-4">
                        <h3 className="font-bold text-lg mb-1">{comment.name}</h3>
                        <a 
                            href={`mailto:${comment.email}`} 
                            className="text-orange-600 text-sm hover:underline"
                        >
                            {comment.email}
                        </a>
                        <p className="mt-2 italic text-gray-700">"{comment.body}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
}