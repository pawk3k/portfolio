import React from "react";
import "./st.scss"
const ProjectTemplate = (props) =>{
  return (


      <div className="template">
          <div className="img_of_project" >
              <img src={require("./" + props.image)} style={{objectFit:"contain",width:"90%",height:"90%"}}/>;
          </div>

          <div className="links">
              <a href={props.linkGH}>
                  <button className="btn-class">
                      code
                  </button>
              </a>
              <a href={props.linkLive}>
                  <button className="btn-class">
                      live
                  </button>
              </a>
          </div>
          


          
      </div>)
};
export default ProjectTemplate;