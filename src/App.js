import {Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './css/application.css';
import Home from './pages/Home.js'
import Menu from './components/Menu.js'
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
// Pas besoin d'import avec {} car on export par défaut

function App() {
  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home /> } />         {/* On indique ici que Home est à la racine pour qu'il pointe vers le composant Home */}
      <Route path="/add" element={<TechnoAdd />} />
      <Route path="/list" element={<TechnoList/>} />
    </Routes>
    {/* 
    <Home />
    <TechnoAdd/>
    <TechnoList/> */}
    </>
    
  );
}

export default App;
