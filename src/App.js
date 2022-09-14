// import {Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './css/application.css';
import Home from './pages/Home.js'
import Menu from './components/Menu.js'
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
// Pas besoin d'import avec les accolade car on export par défaut

function App() {
  return (
    <>
    {/* <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/add" element={<TechnoAdd/>}/>
    
    </Routes> */}
    <Menu />
    <Home />
    <TechnoAdd/>
    <TechnoList/>
    </>
    
  );
}

export default App;
