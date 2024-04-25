import { ReactNode } from "react";
import * as S from "./card.styled";

interface PropsType {
  $mode?: Boolean;
  children: ReactNode;
}

export const Card = ({
  children,
  $mode,
}: PropsType) => {
  return (
    <S.Container
      $mode={$mode} 
    >
      {children}
    </S.Container>
  );
};
