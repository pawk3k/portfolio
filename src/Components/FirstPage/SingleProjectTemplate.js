import React,{useState} from "react";
import "./Styles.css"
import Typist from "react-typist"
const SingleProjectTemplate = () =>{
    const [rounded,set] = useState(false);
    const  mouseE= () =>{
        set(!rounded);
    };
    const cursor1 = {
        show: false,
        blink: true,
        element: '|',
        hideWhenDone: false,
        hideWhenDoneDelay: 1000,
      };
  return(

    <div>

      <div id="shadow" onMouseEnter={mouseE} onMouseLeave={mouseE} style={{display:"flex",alignItems:"center" ,justifyContent :"center", width:"100vw",height:"100vh"}}>
          <div className="neon-text">
              <Typist cursor={cursor1}>Portfolios</Typist>
         </div>
      </div>
      
    </div>
  )
};
export default SingleProjectTemplate;