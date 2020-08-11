import React,{useState} from "react";

export interface GlowingIconProps {
  classNames?: string;
}

const GlowingIcon = ({ classNames }: GlowingIconProps) => {



  return (
    <div>
      <i onMouseEnter={()=>{console.log("Kek")}}
        className="flex-item fab fa-github glowing-effect" aria-hidden="true"
        // style={{color:"green"}}
      />
    </div>
  );
};

export default GlowingIcon;
