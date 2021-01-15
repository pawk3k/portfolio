import React from "react";
import { ThemeProvider, CSSReset, theme, Box, Button } from "@chakra-ui/react";
import "./st.css";
interface ButtonPannelProps {
  linkGH: string;
  linkLive: string;
}
const ButtonPannel = ({ linkGH, linkLive }: ButtonPannelProps) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box
      display="flex"
      // borderRadius={[30, 30, 0, 0]}
      border={4}
      justifyContent="space-around"
      alignItems="space-around"
      backgroundColor="#8e42ff;"
      // mt="2vh"
      mb="2vh"
      pt="2vh"
      pb="2vh"
      style={{ borderRadius: "0 0 30px  30px" }}
    >
      <a href={linkLive}>
        <Button className="btn-class" style={{ color: "black" }}>
          live
        </Button>
      </a>

      <a href={linkGH}>
        <Button className="btn-class" style={{ color: "black" }}>
          github
        </Button>
      </a>
    </Box>
  </ThemeProvider>
);

export default ButtonPannel;
