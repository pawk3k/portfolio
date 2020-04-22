import React,{useState} from "react";
import "./Styles.css"
const SingleProjectTemplate = () =>{
    const [rounded,set] = useState(false);
    const  mouseE= () =>{
        set(!rounded);
    };
  return(
      <div id="shadow" onMouseEnter={mouseE} onMouseLeave={mouseE} style={{width:"70vw",height:"70vh"}}>
          <div>
              <button className={ rounded ?  "round" : ""} style={{background:"green",border:"none"}}>Click Me!</button>
              <button className={ rounded ?  "round" : ""}>Click Me!</button>
          </div>
          Kek
      </div>
  )
};
export default SingleProjectTemplate;