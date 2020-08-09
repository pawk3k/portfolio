import React from "react";
import TextField from "@material-ui/core/TextField";
import { useEffect, useRef } from "react";
import "./styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import ProjectTemplate from "./ProjectTemplate/ProjectTemplate";

import { theme } from "../Themes/maiTheme";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fontSize} {
    margin: 10px 0 20px;
  }
`;

// import { Element } from 'react-scroll';
// import handleViewport from 'react-in-viewport';

const SecondPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(theme.fontSize.m);
    const header = headerRef.current;

    if (header) {
      //   [...header.children].map(child => {
      gsap.from(header, {
        autoAlpha: 0,
        x: "+=30",
        rotation: "360",
        scrollTrigger: {
          trigger: header,
          start: "top bottom-=50px",
        },
      });
      //   });
    }
  }, []);

  return (
    <div>
      <ul className="flex-container longhand">
        <li className="flex-item">
          <ProjectTemplate
            image={"pokedex.jpg"}
            linkGH={"https://github.com/pawk3k/pokedex"}
            linkLive={"https://pokedex-363a7.web.app"}
          />
        </li>
        <li className="flex-item">A long long string</li>{" "}
        <li className="flex-item">
          <ProjectTemplate
            image={"nefritis.jpg"}
            linkGH={"https://github.com/pawk3k/oksana"}
            linkLive={"https://nefritis2.web.app/"}
          />
        </li>
        <li className="flex-item">A long long string</li>{" "}
        <li className="flex-item">
          <ProjectTemplate
            image={"flask.jpg"}
            linkGH={"https://github.com/pawk3k/app_flask1"}
            linkLive={undefined}
          />
        </li>
        <li className="flex-item">A long long string</li>{" "}
      </ul>
    </div>
  );
};
export default SecondPage;
