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
    <div className="font_change">
      <h1 className="font_change">{title}</h1>
      {technologies.map((x) => {
        return (
          <div key={x} className="tech">
            <img
              style={{ width: "2vw", height: "2vh" }}
              src={require("../../res/" +  x  + ".svg")}
            />
            {x}
          </div>
        );
      })}
    </div>
  );
};
export default Description;
