import { CustomButtonStypeType } from "@utils/typesUtils";
import styled from "styled-components";

const Container = styled.button<CustomButtonStypeType>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  border: ${({ $border }) => $border};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  font-family: ${({ $fontFamily }) => $fontFamily};
  line-height: ${({ $lineHeight }) => $lineHeight};
  display: ${({ $display }) => $display};
  align-items: ${({ $alignItems }) => $alignItems};
  gap: ${({ $gap }) => $gap};
  cursor: ${({ $cursor }) => $cursor};
  padding: ${({ $padding }) => $padding};
  margin-top: ${({ $marginTop }) => $marginTop};
`;

export { Container };
