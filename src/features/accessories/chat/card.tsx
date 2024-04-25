import { ReactNode } from "react";
import * as S from "./card.styled";

interface PropsType {
  $backgroundColor?: string;
  $borderRadius?: string;
  children: ReactNode;
}

export const Card = ({
  children,
  $backgroundColor,
  $borderRadius,
}: PropsType) => {
  return (
    <S.Container
      $borderRadius={$borderRadius}
      $backgroundColor={$backgroundColor}
    >
      {children}
    </S.Container>
  );
};
