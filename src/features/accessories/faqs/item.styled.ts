import { FaqItemStyleType } from "@utils/typesUtils";
import styled, { css } from "styled-components";

const Container = styled.div<FaqItemStyleType>`
${({$active}) => $active ? 
  css`svg {
      transform: rotate(45deg);
    }` 
    : 
  css`.collapContent {
      display: none !important;
    }`});

    border-top: 1px solid lightgray;      

    &:first-child {
      border: none;
    }
    
    width: 100%;
    .collapHeader {
      display: flex;
      position: relative;
      padding: 20px 0px 20px 40px;
      align-items: center;
      align-self: stretch;
      svg {
        left: 0px;
        width: 16px;
        height: 16px;
        position: absolute;
        bottom: 23px;
      }
      p {
        align-self: stretch;
        color: #333;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 150% */
      }
    }
    .collapContent {
      display: flex;
      padding: 0px 20px 20px 40px;
      flex-direction: column;
      align-items: flex-start;
      align-self: stretch;
      p {
        color: #666;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 150% */
      }
    }
`;

export { Container };
