import React from "react";

import {useEffect,useRef} from "react";
import "./styles.scss";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


// import { Element } from 'react-scroll';
// import handleViewport from 'react-in-viewport';

import ProjectTemplate from "./ProjectTemplate/ProjectTemplate";
const SecondPage = () =>{
    gsap.registerPlugin(ScrollTrigger);


    const headerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const header = headerRef.current;
    
        if (header) {
        //   [...header.children].map(child => {
            gsap.from(header, {
              autoAlpha: 0,
              x: '-=30',
              rotation:"360",
              scrollTrigger: {
                trigger: header,
                start: 'top bottom-=50px',
              },
            });
        //   });
        }
      }, []);

  return (
      <div className="sec">
          {/* <Element name = "technologies"/> */}
          <div className="projects-text">Projects</div>
          <div className="row_templates">
              <ProjectTemplate image={"pokedex.jpg"} linkGH={"https://github.com/pawk3k/pokedex"} linkLive={"https://pokedex-363a7.web.app"}/>
              <ProjectTemplate image={"nefritis.jpg"} linkGH={"https://github.com/pawk3k/oksana"} linkLive={"https://nefritis2.web.app/"}/>
              <ProjectTemplate image={"flask.jpg"} linkGH={"https://github.com/pawk3k/app_flask1"} linkLive={undefined}/>
          </div>

      </div>
  )
};

export default SecondPage;
