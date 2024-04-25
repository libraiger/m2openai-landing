import { CustomButton } from "@features/ui/button";
import S from "./index.module.scss";
import { BiLinkAlt } from "react-icons/bi";

export const HeroPart = () => {
  return (
    <div className={S.body}>
      <h1>Chat with documents</h1>
      <h2>Summarize long documents and simplify complex PDFs with AI Chat.</h2>
      <div className={S.card}>
        <div className={S.inner}>
          <CustomButton
            title="+"
            $width="40px"
            $height="40px"
            $backgroundColor="#275DF6"
            $borderRadius="100%"
            $border="none"
            $color="white"
            $fontSize="40px"
            $lineHeight="40px"
            $fontWeight="300"
          />
          <h3>Drop file here</h3>
        </div>
        <div className={S.link}>
          <h3>Is your PDF online?</h3>
          <div className={S.url}>
            <BiLinkAlt size={20} color="#7848ff" />
            <a href="#">upload URL</a>
          </div>
        </div>
      </div>
      <h3 className={S.notice}>Used by professionals & teams in</h3>
    </div>
  );
};
