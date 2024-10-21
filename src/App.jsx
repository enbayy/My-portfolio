import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';

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

      <section id="contact">
        <ContactPage />
      </section>

      <section id="services">
        <ServicesPage />
      </section>

      <section id="projects">
        <ProjectsPage />
      </section>
      <Footer />
    </div>
  );
}

export default App;