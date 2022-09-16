import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4} from 'uuid';           // Permet d'attribuer un id pour chaque formulaire envoyé pour qu'ils aient une key unique
import logo from "./logo.svg";
import "./css/application.css";
import Home from "./pages/Home.js";
import Menu from "./components/Menu.js";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";
// Pas besoin d'import avec {} car on export par défaut
                                              
function App() {                              // useState retourne 2 éléments: le morceau d'etat: "technos"
  const [technos, setTechnos] = useState([]); // useState c'est une fonction qui commence avec un état initial entre () ici le tableau
                                              // Chaque nouvelle techno ajoutée sera un nouvel objet dans le tableau
  function handleAddTechno(techno) {
    console.log('handleAddTechno',techno);
    setTechnos([...technos, {techno,technoid: uuidv4()}])          
                                              // on clone le contenu initial du tableau et on ajoute notre objet techno
  }                                           // à chaque envoie de formulaire on ajoute en objet les valeurs du formulaire au tableau de l'état d'App.js
                                              // uuidv4 on l'appelle comme une fonction afin de lui attribuer une clé unique avec le formulaire
  
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* On indique ici que Home est à la racine pour qu'il pointe vers le composant Home */}
        <Route path="/home" element={<Home />} />{" "}
        {/* Non il n'y a pas doublon. Pour éviter que le / soit considérer comme "active" et le garder constamment en true il faut lui ajouter le second affichage */}
        <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno} />} /> {/* Faire passer la fonction handleAddTechno pour un attribut HTML. Puis lui associer clé: handleAddTechno et valeur: handleAddTechno
                                                                                           On la fait passer en props */}
        <Route path="/list" element={<TechnoList technos={technos}/>} />
        {/* Dans TechnoLit nous allons placer en props "technos" afin d'en faire un affichage dans All Technos il nous affichera donc toutes les valeurs fournit par useState */}
      </Routes>
      {/* 
    <Home />
    <TechnoAdd/>
    
    <TechnoList/> */}




    </>
  );
}

export default App;
