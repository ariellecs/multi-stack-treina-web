import { styled } from "@mui/material/styles";
import { ThemeContext } from "@mui/styled-engine";

export const PageTitleContainer = styled("div")`
  //margin: 40px 0;  --- é o mesmo que o comando abaixo, que usa a lib material
  margin: ${({ theme }) => theme.spacing(5)} 0; //usando o espaçamento do tema material (base 8; 1=8, 2=16...)
  text-align: center;
`;

export const PageTitleStyled = styled("h2")`
  margin: 0;
  color: ${({ theme }) =>
    theme.palette.primary.main}; //chamando a cor da lib material
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("md")} {
    //aplicar essa configuração quando a tela for abaixo de um tamanho médio ('md')
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;

export const PageSubtitleStyled = styled("h3")`
  margin: ${({ theme }) => theme.spacing(1.5)} 0;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: normal;

  ${({ theme }) => theme.breakpoints.down("md")} {
    //aplicar essa configuração quando a tela for abaixo de um tamanho médio ('md')
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;
