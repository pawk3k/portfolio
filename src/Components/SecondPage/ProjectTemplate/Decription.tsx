// import React from "../../../res/git.svg";
import "./st.css";
import React from "react";
// import from git.svg from "../"
interface Props {
  title: string;
  description: string;
  technologies?: string[];
}

const Description = ({ title, description, technologies }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      {technologies.map((x) => {
        return (
          <div className="tech">
            <img
              style={{ width: "2vw", height: "2vh" }}
              src={require("./res/" +  x  + ".svg")}
            />
            {x}
          </div>
        );
      })}
    </div>
  );
};
export default Description;
