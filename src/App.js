import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./css/application.css";
import Home from "./pages/Home.js";
import Menu from "./components/Menu.js";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";
// Pas besoin d'import avec {} car on export par défaut

function App() {
  const [technos, setTechnos] = useState([]); // useState c'est une fonction qui commence avec un état initial entre () ici le tableau
                                              // Chaque nouvelle techno ajoutée sera un nouvel objet dans le tableau
  function handleAddTechno(techno) {
    console.log('handleAddTechno',techno);
  }
  
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* On indique ici que Home est à la racine pour qu'il pointe vers le composant Home */}
        <Route path="/home" element={<Home />} />{" "}
        {/* Non il n'y a pas doublon. Pour éviter que le / soit considérer comme "active" et le garder constamment en true il faut lui ajouter le second affichage */}
        <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno}/>} /> {/* Faire passer la fonction handleAddTechno pour un attribut HTML. Puis lui associer clé: handleAddTechno et valeur: handleAddTechno */}
        <Route path="/list" element={<TechnoList />} />
      </Routes>
      {/* 
    <Home />
    <TechnoAdd/>
    <TechnoList/> */}




    </>
  );
}

export default App;
