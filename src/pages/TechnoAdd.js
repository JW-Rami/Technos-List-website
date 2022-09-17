import React, { useState } from "react";

export default function TechnoAdd(props) {
  const [techno, setTechno] = useState({
    technoname: "",
    technocategory: "",
    technodescription: "",
  });

  const { handleAddTechno } = props;

  function handleChange(e) {
    const { name, value } = e.target;
    setTechno({ ...techno, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddTechno(techno);
    setTechno({
      technoname: "",
      technocategory: "",
      technodescription: "",
    });
  }

  return (
    <div className="techno-add">
      <h1>Add a techno</h1>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="technoname">Name:</label>
          <br />
          <input
            type="text"
            name="technoname"
                      id="technoname"
            value={techno.technoname}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <label htmlFor="technocategory">Category:</label>
          <br />
          <select
            name="technocategory"
                      id="technocategory"
            value={techno.technocategory}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Select a category</option>
            <option value="front">Front</option>
            <option value="back">Back</option>
            <option value="fullstack">Full Stack</option>
            <option value="other">Other</option>
          </select>
          <br />
          <label htmlFor="technodescription">Description</label>
          <br />
          <textarea
            name="technodescription"
            id="technodescription"
            cols="30"
                      rows="10"
            value={techno.technodescription}
            onChange={(e) => handleChange(e)}
          ></textarea>
          <br />
          <input type="submit" value="Add Techno" className="btn" />
        </form>
      </div>
      <br />
    </div>
  );
}
