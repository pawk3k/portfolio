import React from "react";
import TextField from "@material-ui/core/TextField";
import { useEffect, useRef } from "react";
import "./styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import ProjectTemplate from "./ProjectTemplate/ProjectTemplate";
import Descritption from "./ProjectTemplate/Decription";
import { theme } from "../Themes/maiTheme";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fontSize} {
    margin: 10px 0 20px;
  }
`;

const SecondPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="sec">
      <ul className="flex-container longhand">
        <li className="flex-item">
          <ProjectTemplate
            image={"pokedex.jpg"}
            linkGH={"https://github.com/pawk3k/pokedex"}
            linkLive={"https://pokedex-363a7.web.app"}
          />
        </li>
        <li className="flex-item">
          <Descritption
            title="Pokedex"
            description="Simple app with pokemon stats"
            technologies={["react", "redux"]}
          />
        </li>{" "}
        <li className="flex-item">
          <ProjectTemplate
            image={"nefritis.jpg"}
            linkGH={"https://github.com/pawk3k/oksana"}
            linkLive={"https://nefritis2.web.app/"}
          />
        </li>
        <li className="flex-item">
          <Descritption
            title="Vintage clothes shop"
            description="Shop app"
            technologies={["react", "redux"]}
          />
        </li>{" "}
        <li className="flex-item">
          <ProjectTemplate
            image={"td.jpg"}
            linkGH={"https://github.com/pawk3k/TD2"}
            linkLive={undefined}
          />
        </li>
        <li className="flex-item">
          <Descritption
            title="OpenGL game engine"
            description="Game engine"
            technologies={["java", "OpenGL"]}
          />
        </li>{" "}
      </ul>
    </div>
  );
};
export default SecondPage;
