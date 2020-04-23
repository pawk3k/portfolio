import React, {useState} from "react";


const Contact = () =>{
   const [gmail,setGM] = useState(false);
    const [github,setGH] = useState(false);
    return (
        <div>
            <div style={{fontSize:"4vh",color:"white"}}>
                Contact

            </div>
            <div className="row">
                <div className="col">
                    <button  className="btn-class" onMouseDown={()=>
                    {
                        setGM(!gmail);
                        setGH(github === true ? false : false);
                    }}>

                        Gmail</button>

                </div>
                <div className="col">
                    <button className="btn-class" onMouseDown={() =>{
                        setGH(!github);
                        setGM(gmail === true ? false : false)
                    }}>Github</button>

                </div>
            </div>
            <div className="row" style={{paddingTop:"5vh",display:"flex",alignItems:"center",justifyContent:"center" ,fontSize:"5vh",color:"cyan"}}>
                {gmail && <div>ravliv.pavlobohdan@gmail.com</div>}
                {github && <div>https://github.com/pawk3k</div>}

            </div>
        </div>
    )
};
export default Contact;