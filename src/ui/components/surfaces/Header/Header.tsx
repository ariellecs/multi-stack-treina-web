import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.style";
import { Toolbar, Container } from "@mui/material";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderLogo src={"/img/logos/logo.svg"} alt={"e-diariastas"} />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;

//header vai ser o mesmo para todas as páginas, faz mais sentido colocar no arquivo _app.tsx
