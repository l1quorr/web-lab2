import { useState, useEffect } from 'react';

export default function Footer() {
    // створюємо змінну стану для збереження інфи 
    const [systemInfo, setSystemInfo] = useState('');

    //  useEffect з порожнім масивом []
    useEffect(() => {
        // збір даних про систему 
        const osInfo = navigator.platform;
        const browserInfo = navigator.userAgent;
        const combinedInfo = `ОС: ${osInfo} | Браузер: ${browserInfo}`;

        // збереження у localStorage 
        localStorage.setItem('reactUserSystemData', combinedInfo);

        // витягуємо з localStorage та оновлюємо стан 
        const savedData = localStorage.getItem('reactUserSystemData');
        setSystemInfo(savedData);
    }, []);

    return (
        <footer className="mt-10 border-t border-dashed border-gray-600 pt-4 pb-8 text-center text-sm text-gray-600">
            <p>&copy; 2026 Андрій Леонов</p>
            
            {/* умовний рендеринг: показуємо цей абзац, лише якщо systemInfo не порожнє */}
            {systemInfo && (
                <p className="mt-2 text-xs text-gray-500">Ваша система: {systemInfo}</p>
            )}
        </footer>
    );
}