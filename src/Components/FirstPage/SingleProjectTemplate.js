import React,{useState} from "react";
import "./Styles.css"
const SingleProjectTemplate = () =>{
    const [rounded,set] = useState(false);
    const  mouseE= () =>{
        set(!rounded);
    };
  return(


      <div id="shadow" onMouseEnter={mouseE} onMouseLeave={mouseE} style={{display:"flex",alignItems:"center" ,justifyContent :"center", width:"100vw",height:"100vh"}}>
          <div className="neon-text">
              Portfolio
          </div>
      </div>
  )
};
export default SingleProjectTemplate;