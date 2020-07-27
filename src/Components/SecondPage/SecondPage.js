import React from "react";
import "./styles.scss"
import ProjectTemplate from "../SecondPage/ProjectTemplate/ProjectTemplate";
const SecondPage = () =>{
  return (
      <div className="sec">
          <div className="projects-text">Projects</div>
          <div className="row_templates">
              <ProjectTemplate image={"pokedex.jpg"} linkGH={"https://github.com/pawk3k/pokedex"} linkLive={"https://portfolio-393d4.web.app"}/>
              <ProjectTemplate image={"nefritis.jpg"} linkGH={"https://github.com/pawk3k/oksana"} linkLive={"https://nefritis2.firebaseapp.com/"}/>
              <ProjectTemplate image={"flask.jpg"} linkGH={"https://github.com/pawk3k/app_flask1"} linkLive={"https://portfolio-393d4.web.app"}/>
          </div>

      </div>
  )
};
export default SecondPage;
