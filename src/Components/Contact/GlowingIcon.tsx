import React from "react";

export interface GlowingIconProps {
  img: string;
}

const GlowingIcon = ({ img }: GlowingIconProps) => {
  return (
    <div>
      <img
        src={require("../res/" + img + ".svg")}
        className={"grow"}
        aria-hidden="true"
      />
    </div>
  );
};

export default GlowingIcon;
