import S from "./index.module.scss";
import USER from "@assets/chat/user_3.jpg";

export const Review = () => {
  return (
    <div className={S.body}>
      <div className={S.wrapper}>
        <h3>
          "The furure of document interaction is here, and it's conversational.
          It's dynamic. It's engaging."
        </h3>
        <img src={USER} alt="" />
        <span>Sina R.</span>
        <p>Senior UX Designer for Oracle</p>
      </div>
    </div>
  );
};
