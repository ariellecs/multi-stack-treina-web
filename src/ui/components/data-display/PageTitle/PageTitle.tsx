import React from "react";
import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled,
} from "./PageTitle.style";

interface PageTitleProps {
  //interface apenas no typescript
  title: string;
  subtitle?: string | JSX.Element; //pode ter mais de um tipo. ? serve para indicar que é opcional
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  //componente funcional

  return (
    <PageTitleContainer>
      <PageTitleStyled>{props.title}</PageTitleStyled>
      <PageSubtitleStyled>{props.subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
