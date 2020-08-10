import React from "react";
import "./st.css";

interface Props {
  image: string;
  linkGH: string;
  linkLive: string;
}
const ProjectTemplate = ({ image, linkGH, linkLive }: Props) => {
  return (
    <div>
      <div>
        <div className="template"></div>
        <div className="img_of_project">
          <img
            src={require("./" + image)}
            style={{ objectFit: "contain", width: "90%", height: "90%" }}
          />{" "}
        </div>
        <div className="links">
          <a href={linkGH}>
            <button className="btn-class"> 
            <div className="text-on-botton">code</div> </button>{" "}
          </a>{" "}
          {linkLive != undefined && (
            <a href={linkLive}>
              <button className="btn-class"> <div className="text-on-botton">live</div> </button>{" "}
            </a>
          )}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default ProjectTemplate;
