import { Illustrator, Pricing, Faqs } from "@features/accessories";
import S from "./index.module.scss";

export const Plans = () => {
  return (
    <div className={S.body}>
      <Illustrator />
      <Pricing />
      <Faqs />
    </div>
  );
};
