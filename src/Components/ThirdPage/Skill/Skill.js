import React, { useRef,useEffect } from "react";
import { TweenMax } from "gsap";
import gsap from "gsap";
// import gsap from "gsap";
const Skill = (props) =>{
    const skill_ref = useRef(null);

    useEffect(() => {
        // if(skill_ref){
    // TweenMax.fromTo(
    //   [skill_ref.current],
    //   0.5,
    //   { x: -180 },
    //   { x: 0 }
    // );

    gsap.from(skill_ref.current, {
        autoAlpha: 0,
        x: '-=500',
        scrollTrigger: {
          trigger: skill_ref.current,
          start: 'top bottom-=50px',
        },
        // } 
    })
    },[]);
        

    return (
        <div ref={skill_ref} className="row border border-dark border-10px" style={{margin:"4vh 4vh 4vh 4vh"}}>
            <div className="col" style={{display:"flex",flexDirection:"column" ,justifyContent:"center",alignItems:"center"}}>
                <div>
                    <i className={props.icon} style={{color: props.color ,height:"20px",width:"20px"}}/>
                </div>
                <div style={{color:"white" ,paddingLeft:"5vh"}}   >
                    {props.imgDesc}
                </div>
            </div>
            <div className="col" style={{color:"white",padding:"2vh 2vh 2vh 2vh"}} >
                {props.description}
            </div>
        </div>
    )
};
export default Skill;