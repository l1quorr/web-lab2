import { useState, useEffect } from 'react';
import Reviews from './components/Reviews';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  // ручне перемикання теми
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="relative pl-[100px] py-10 pr-10 max-w-[900px] font-sans">
      
      {/* помаранчева смуга */}
      <div className="fixed top-0 left-0 w-[50px] h-full bg-[#f05a30] z-40"></div>

      {/* кнопка перемикання в "шапці" сайту */}
      <button 
        onClick={toggleTheme}
        className="absolute top-5 right-10 text-3xl hover:scale-110 transition-transform cursor-pointer z-50 bg-transparent border-none"
        title="змінити тему"
      >
        {theme === 'light' ? '☾' : '☼'}
      </button>

      <div>
        <Header />
        <Experience />
        <Education />
        <Reviews />
        <Footer />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;