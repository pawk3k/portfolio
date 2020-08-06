import React,{useState} from "react";
import "./Styles.css";
import Typist from "react-typist";
import TextField from '@material-ui/core/TextField';

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
            {/* <TextField> */}
               <Typist cursor={cursor1}>Portfolio</Typist>
            {/* </TextField> */}
          </div>
      </div>
      
    </div>
  )
};
export default SingleProjectTemplate;