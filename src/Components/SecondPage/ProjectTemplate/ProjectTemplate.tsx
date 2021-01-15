import React from "react";
import "./st.css";
import ButtonPannel from "./ButtonPannel";    
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
        <ButtonPannel />
      </div>
    </div>
  );
};
export default ProjectTemplate;
