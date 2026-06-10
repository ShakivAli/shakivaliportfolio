import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
