import React from "react";

const Skill = (props) =>{
    return (
        <div className="row border border-dark border-10px" style={{marginBottom:"2vh"}}>
            <div className="col" style={{display:"flex",flexDirection:"column" ,justifyContent:"center",alignItems:"center"}}>
                <div>
                    <i className={props.icon} style={{color: props.color ,height:"20px",width:"20px"}}/>
                </div>
                <div style={{color:"white",paddingLeft:"5vh"}} >
                    {props.imgDesc}
                </div>
            </div>
            <div className="col">
                {props.description}
            </div>
        </div>
    )
};
export default Skill;