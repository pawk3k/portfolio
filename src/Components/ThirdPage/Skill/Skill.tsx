import React, { useRef,useEffect } from "react";
import { TweenMax } from "gsap";
import gsap from "gsap";

interface Props {
  imgDesc : string;
  description : string;
  icon : string;
  color : string;
}
const Skill = ({imgDesc,description,icon,color}: Props) =>{
    const skill_ref  = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const header = skill_ref.current;

    gsap.from(skill_ref.current, {
        autoAlpha: 0,
        x: '-=500',
        scrollTrigger: {
          trigger: skill_ref.current,
          start: 'top bottom-=50px',
        },
    })
    },[]);
    return (
        <div ref={skill_ref} className="row border border-dark border-10px" style={{margin:"4vh 4vh 4vh 4vh"}}>
            <div className="col" style={{display:"flex",flexDirection:"column" ,justifyContent:"center",alignItems:"center"}}>
                <div>
                    <i className={icon} style={{color: color ,height:"20px",width:"20px"}}/>
                </div>
                <div style={{color:"white" ,paddingLeft:"5vh"}}   >
                    {imgDesc}
                </div>
            </div>
            <div className="col" style={{color:"white",padding:"2vh 2vh 2vh 2vh"}} >
                {description}
            </div>
        </div>
    )
};
export default Skill;