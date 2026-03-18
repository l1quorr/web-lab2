// зберігання даних у браузері (LocalStorage)

// збір інформації про браузер та ОС
const osInfo = navigator.platform;
const browserInfo = navigator.userAgent;
const combinedInfo = `ОС: ${osInfo} | Браузер: ${browserInfo}`;

// збереження у localStorage (дані залишаться навіть після перезавантаження сторінки)
localStorage.setItem('userSystemData', combinedInfo);

// витягуємо дані з localStorage
const savedData = localStorage.getItem('userSystemData');

// знаходимо елемент у футері і записуємо туди текст
const footerElement = document.getElementById('system-info');
if (footerElement) {
    footerElement.textContent = `Ваша система: ${savedData}`;
}

// ЗАВД2 Відображення динамічного вмісту отриманого із серверу 

async function fetchComments() {
    //  формування URL 
    const url = `https://jsonplaceholder.typicode.com/posts/9/comments`;

    try {
        // запит на сервер
        const response = await fetch(url);
        
        // в зручний json 
        const comments = await response.json();
        
        const container = document.getElementById('comments-container');
        
        // парсим коменти і створюємо блок під кожен
        comments.forEach(comment => {
            const commentBlock = document.createElement('div');
            commentBlock.style.borderBottom = "1px dashed #ccc";
            commentBlock.style.padding = "10px 0";
            commentBlock.style.marginBottom = "10px";
            
            // заповнення блоків (ім'я,емейл,текст комента)
            commentBlock.innerHTML = `
                <h3 style="margin-bottom: 5px; font-size: 1rem;"><strong>${comment.name}</strong></h3>
                <a href="mailto:${comment.email}" style="color: #ea580c; font-size: 0.9rem; text-decoration: none;">${comment.email}</a>
                <p style="margin-top: 5px; font-style: italic;">"${comment.body}"</p>
            `;
            
            // додавання готового блоку
            container.appendChild(commentBlock);
        });

    } catch (error) {
        console.error('Помилка при отриманні коментарів:', error);
    }
}

fetchComments();

// ЗАВД3 форма зворотнього зв'язку

const modal = document.getElementById('feedback-modal');
const closeBtn = document.getElementById('close-modal');

// функція, яка показує вікно
function showModal() {
    modal.style.display = 'flex';
}

//  таймер на 1 хвилину (60000 мілісекунд)
setTimeout(showModal, 60000);

// закриваємо вікно при кліку на хрестик
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// ЗАВД 4 нічний/денний режим 

const themeBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

// функція для автоматичного визначення теми за часом
function autoTheme() {
    // Отримуємо поточну годину (від 0 до 23)
    const currentHour = new Date().getHours();
    
    // Денна тема: від 07:00 до 21:00. Нічна тема: у весь інший час
    if (currentHour >= 7 && currentHour < 21) {
        bodyElement.classList.remove('dark-theme');
    } else {
        bodyElement.classList.add('dark-theme');
    }
}

autoTheme();

// ручне перемикання теми по кліку на кнопку
themeBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-theme');
});