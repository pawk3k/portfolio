import React from "react";
import GlowingIcon from "./GlowingIcon";
import styled from "styled-components";
import linkedin from "../res/linkedin.svg";
import github from "../res/github.svg";
import mail from "../res/email.svg";

import "./styles.css";

const Wrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  // align-items: space-around;
`;
interface IconProps {
  icon: string;
}
const IconLink = styled.a<IconProps>`
  display: block;
  width: 50px;
  height: 50px;
  background: url(${({ icon }) => icon}) no-repeat center;
  background-size: 100%;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 0 15px -10px ${({ theme }) => theme.white};
  &:hover {
    transform: scale(1.1);

    border-radius: 75%;
    /* box-shadow: 0 0 10vh 4vh #0ff; */
    background-color: rgba(0, 255, 255, 0.164);
    box-shadow: 0 0 5vh 1vh #0ff, 0 0 4vh 1vh #f0f;
  }
`;
const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // padding: 30px 0;
`;
const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 60px;
`;
const LinkItem = styled.div`
  margin: 5px 0;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  // margin: 20px 0;
`;

const ContactLinks = () => {
  return (
    <Wrapper>
      <ColWrapper>
        <LinkItem>
          <IconWrapper>
            <IconLink
              href="https://github.com/pawk3k"
              target="_blank"
              rel="noopener noreferrer"
              icon={github}
            />
          </IconWrapper>
          <ColWrapper>
            <div>Github</div>
            <div>Check me code</div>
          </ColWrapper>
        </LinkItem>{" "}
        <LinkItem>
          <IconWrapper>
            <IconLink
              href="https://www.linkedin.com/in/pavlo-bohdan-ravliv-4a6880158/"
              target="_blank"
              rel="noopener noreferrer"
              icon={linkedin}
            />
          </IconWrapper>
          <ColWrapper>
            <div>LinkedIn</div>
            <div>Check me on linkedIn</div>
          </ColWrapper>
        </LinkItem>{" "}
        <LinkItem>
          <IconWrapper>
            <IconLink
              href="mailto:ravliv.pavlobohdan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              icon={mail}
            />
          </IconWrapper>
          <ColWrapper>
            <div>Email</div>
            <div>Write an email</div>
          </ColWrapper>
        </LinkItem>{" "}
      </ColWrapper>
    </Wrapper>
  );
};
export default ContactLinks;
