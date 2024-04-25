import {
  Chat,
  Connect,
  Design,
  HeroPart,
  Infrastructure,
  More,
  Notice,
  Review,
} from "@features/accessories";
import S from "./index.module.scss";

export const DashBoard = () => {
  return (
    <div className={S.body}>
      <HeroPart />
      <Chat />
      <More />
      <Infrastructure />
      <Design />
      <Notice />
      <Review />
      <Connect />
    </div>
  );
};
