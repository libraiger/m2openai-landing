import { ReactNode } from "react";
import S from "./card.module.scss";

export const Card = ({ children }: { children: ReactNode }) => {
  return <div className={S.body}>{children}</div>;
};
