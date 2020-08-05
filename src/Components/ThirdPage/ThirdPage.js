import React from "react";
import "./style.css"
import Skill from "./Skill/Skill";
import Contact from "./Contact/Contact";
const ThirdPage =() =>{
    
    return(
        <div className="main">
            <div className="container">
                <div style={{fontSize:"15vh",textDecoration:"underline",marginBottom:"5vh",color:"wheat"}}>Skills</div>
                <Skill imgDesc={"React"} description={"I have build few projects with react ,react-redux and react router im able to solve different problems using this framework"} icon={"fab fa-react fa-5x"} color={"cyan"}/>
                <Skill imgDesc={"HTML5"} description={"I use it to build websites"} icon={"fab fa-html5 fa-5x"} color={"red"}/>
                <Skill imgDesc={"CSS3"} description={"I know how css works and able to make website more alive"} icon={"fab fa-css3-alt fa-5x"} color={"darkblue"}/>
                <Skill description={"I know how to use sass to shortify css "} icon={"fab fa-sass fa-5x"} color={"deeppink"}/>
                <Skill imgDesc={"Git"} description={"I use git in almost all of my projects i know about commits branches and all other basic staff"} icon={"fab fa-git-alt fa-5x"} color={"gold"}/>
                <Skill imgDesc={"Bootstrap"} description={"I use bootstrap to make websites look good all devices"} icon={"fab fa-bootstrap fa-5x"} color={"mediumorchid"}/>
                <Skill imgDesc={"JavaScript"} description={"Like any other programming language i use this language to solve problems. I know OOP ES6 and how to use this language"} icon={"fab fa-js-square fa-5x"} color={"orange"}/>
                {/* <Contact/> */}

            </div>

        </div>
    )
};

export default ThirdPage;