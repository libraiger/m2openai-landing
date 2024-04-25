import { ChatCardStyleType } from "@utils/typesUtils";
import styled from "styled-components";

const Container = styled.div<ChatCardStyleType>`
  border-radius: ${({ $borderRadius }) => $borderRadius};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  padding: 40px 32px;
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 24px;
  height: 400px;
  overflow: hidden;

  @media (max-width: 1440px) {
    height: 480px;
    padding: 32px 20px;
  }

  @media (max-width: 810px) {
    height: 320px;
    padding: 40px 32px;
  }
`;

export { Container };
