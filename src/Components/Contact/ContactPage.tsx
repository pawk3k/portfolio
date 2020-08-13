import React from "react";
import styled from "styled-components";
import ContactLinks from "./ContactLinks";
import ContactForm from "./ContactForm";
const Wrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
`;

const ContactPage = () => {
  return (
    <div className="main">
      <div className="container">
        <div           style={{
            fontSize: "15vh",
            textDecoration: "underline",
            marginBottom: "5vh",
            color: "wheat",
          }}>Contact</div>
        <Wrapper>
          <ContactLinks />
          {/* <ContactForm /> */}
        </Wrapper>
      </div>
    </div>
  );
};
export default ContactPage;
