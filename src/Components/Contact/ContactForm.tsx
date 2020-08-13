import React from "react";
import styled from "styled-components";
const RowWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  //   padding: 10vh 0;
`;
const ContactForm = () => {
  return (
    <div className="border border-dark border-10px" style={{backgroundColor:"#0ff",boxShadow: "0 1vh  1vh cyan",marginLeft:"5vw"}}>
      <form action="/action_page.php">
        <ColWrapper>
          <ColWrapper>
            <div>First name:</div>
            <input
              type="text"
              id="fname"
              name="fname"
              style={{ margin: "2vh" }}
            />
          </ColWrapper>
          <ColWrapper>
            <div>Email adress:</div>
            <input
              type="password"
              id="lname"
              name="lname"
              style={{ margin: "2vh" }}
            />
          </ColWrapper>
          <ColWrapper>
            <div>Text</div>
            <textarea name="Text1" style={{margin:"2vh"}}></textarea>
          </ColWrapper>
          <input type="submit" value="Submit" />
        </ColWrapper>
      </form>
    </div>
  );
};
export default ContactForm;
