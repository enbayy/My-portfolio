import './App.css';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home">
        <HomePage />
      </section>

      <section id="about">
        <AboutPage />
      </section>

    </div>
  );
}

export default App;