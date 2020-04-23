import React from "react";
import "./styles.scss"
import ProjectTemplate from "../SecondPage/ProjectTemplate/ProjectTemplate";
const SecondPage = () =>{
  return (
      <div className="sec">
          <div className="projects-text">Projects</div>
          <div className="row_templates">
              <ProjectTemplate image={"pokedex.jpg"} link={"https://github.com/pawk3k/pokedex"}/>
              <ProjectTemplate image={"nefritis.jpg"} link={"https://github.com/pawk3k/oksana"}/>
              <ProjectTemplate image={"flask.jpg"} link={"https://github.com/pawk3k/app_flask1"}/>
          </div>

      </div>
  )
};
export default SecondPage;
