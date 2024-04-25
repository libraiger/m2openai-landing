import { PriceCardStyleType } from "@utils/typesUtils";
import styled, { css } from "styled-components";

const Container = styled.div<PriceCardStyleType>`
${({$mode}) => $mode ? 
  css`border-radius: 12px;
      background-color: #275DF6;
      height: 544px;
      box-shadow: 0px 0.796px 2.389px -0.625px rgba(0, 0, 0, 0.05), 0px 2.415px 7.244px -1.25px rgba(0, 0, 0, 0.05), 0px 6.383px 19.148px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05);
      h1, p {
        color: white !important;
      }
      span {
        color: #275DF6 !important;
      }
      #buyBtn {
        border: none;
        background-color: #ffffff !important;
        box-shadow: 0px 0.707px 0.707px -0.625px rgba(0, 0, 0, 0.15), 0px 1.807px 1.807px -1.25px rgba(0, 0, 0, 0.14), 0px 3.622px 3.622px -1.875px rgba(0, 0, 0, 0.14), 0px 6.866px 6.866px -2.5px rgba(0, 0, 0, 0.13), 0px 13.647px 13.647px -3.125px rgba(0, 0, 0, 0.11), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05);
      }
      gap: 57px; 
      `
  : css`border-radius: 12px;
        background-color: #ffffff;
        height: 472.3px;
        box-shadow: 0px 0.796px 2.389px -0.625px rgba(0, 0, 0, 0.05), 0px 2.415px 7.244px -1.25px rgba(0, 0, 0, 0.05), 0px 6.383px 19.148px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05);`};
  
  padding: 40px 32px;
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 24px;
  overflow: hidden;


`;

export { Container };
