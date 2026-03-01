import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    // відступи, шрифт та максимальна ширина
    <div className="relative pl-[100px] py-10 pr-10 max-w-[900px] font-sans text-black">
      
      {/* помаранчева смуга */}
      <div className="fixed top-0 left-0 w-[50px] h-full bg-[#f05a30]"></div>

      <div>
        <Header />
        <Experience />
        <Education />
        <Footer />
      </div>
    </div>
  );
}

export default App;