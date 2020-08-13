import React from "react";
import styled from "styled-components";
import ContactLinks from "./ContactLinks";

const Wrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: space-around;
`;

const ContactPage = () => {
  return (
    <div>
      <div>Contact</div>
      <Wrapper>
        <ContactLinks />
        <ContactLinks />
      </Wrapper>
    </div>
  );
};
export default ContactPage;
