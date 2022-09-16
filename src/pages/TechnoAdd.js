import { useState } from "react";

export default function TechnoAdd(props) {
  const [ techno, setTechno ] = useState({
    technoname: 'lmkmlklk',
    technocategory: '',
    technodescription: ''
  }); // ajouter ici les autres éléments qu'on veut afficher pour l'evenement submit.

const { handleAddTechno } = props;

  function handleSubmit(e) {
    e.preventDefault();
    handleAddTechno(techno);
  }
  return (
    <div className="techno-add">
      <h1>Add a techno</h1>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          {" "}
          {/* Pour que l'evenemnt soit passé dans la fonction */}
          <label htmlFor="technoname">Name :</label>
          <br />
          <input type="text" name="technoname" id="technoname" value={techno.technoname} />
          <br />
          <label htmlFor="techno-category">Category :</label>{" "}
          {/*"techno-category pour qu'il soit relié à la catégorie de techno*/}
          <br />
          <select name="techno-category" id="techno-category">
            <option value="">Select a category</option>
            <option value="front">Front</option>
            <option value="back">Back</option>
            <option value="fullstack">Full Stack</option>
            <option value="other">Other</option>
          </select>{" "}
          <br />
          <label htmlFor="techno-description">Description :</label>
          <br />
          <textarea
            name="techno-description"
            id="techno-description"
            cols="30"
            rows="10"
          ></textarea>{" "}
          <br />
          <input type="submit" value="Add Techno" className="btn" />
        </form>
      </div>
    </div>
  );
}
