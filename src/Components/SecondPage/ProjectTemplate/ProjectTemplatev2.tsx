import React from "react";
import "./st.css";
import ProjectTemplatev from "./ProjectTemplate";
interface Props {
  image: string;
  linkGH: string;
  linkLive: string;
}
const ProjectTemplatev2 = ({ image, linkGH, linkLive }: Props) => {
  return (
    <div>
      <ul className="flex-container longhand">
        <li className="flex-item">
            <ProjectTemplatev image={"pokedex.jpg"} linkGH={"https://github.com/pawk3k/pokedex"} linkLive={"https://pokedex-363a7.web.app"}/>
        </li>
        <li className="flex-item">A long long string</li>
      </ul>
    </div>
  );
};
export default ProjectTemplatev2;
