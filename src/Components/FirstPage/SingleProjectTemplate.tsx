import React, { useState, useRef, useEffect } from "react";
import "./Styles.css";
import Typist from "react-typist";
import gsap from "gsap";
import styled from "styled-components";

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  //   padding: 10vh 0;
`;
const SingleProjectTemplate = (): React.ReactElement => {
  const [rounded, set] = useState(false);
  const mouseE = () => {
    set(!rounded);
  };
  const cursor1 = {
    show: false,
    blink: true,
    element: "|",
    hideWhenDone: false,
    hideWhenDoneDelay: 1000,
  };

  const iconRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(iconRef.current, {
      y: "+=50",
      repeat: -1,
      repeatDelay: 1,
    });
  }, []);
  return (
    <div>
      <div
        id="shadow"
        onMouseEnter={mouseE}
        onMouseLeave={mouseE}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <ColWrapper>
          <div className="neon-text">
            <Typist cursor={cursor1}>Portfolio</Typist>
          </div>
          <i ref={iconRef} className="fas fa-angle-down"></i>
        </ColWrapper>
      </div>
    </div>
  );
};
export default SingleProjectTemplate;
