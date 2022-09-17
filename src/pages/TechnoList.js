import React from "react";
import TechnoItem from "../components/TechnoItem";
export default function TechnoList(props) {
  const { technos } = props; // Afin de faire passer technos en props et le remonter jusqu'au parent
  // elle reçois ce qu'elle doit afficher sous forme de props grâce à technos
  // C'est un tableau donc on peut utiliser map sur app.js
  return (
    <div className="techno-list">
      <h1>All Technos</h1>
      <div>
        {technos.map((techno) => (
          <TechnoItem  key={techno.technoid} techno={techno}/> // On ajoute le composant TechnoItem qui aura pour props techno pour clé et techno en valeur = donc les valeurs de chaque formulaire
        
        ))}

        
      </div>
    </div>
  );
}
