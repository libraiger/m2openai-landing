import { FaArrowRight } from "react-icons/fa";
import S from "./index.module.scss";
import { CustomButton } from "@features/ui";

export const Connect = () => {
  return (
    <div className={S.body}>
      <div className={S.wrapper}>
        <h2>Try Sharly AI for free</h2>
        <span>Start for free — upgrade anytime.</span>
        <span>
          Joining as an organization? <a>Contact Sales</a>
        </span>
        <CustomButton
          title="Start for free"
          $border="none"
          $borderRadius="8px"
          $backgroundColor="#275df6"
          $color="white"
          $fontSize="16px"
          $fontWeight="600"
          $fontFamily='"Lato", sans-serif'
          $display="flex"
          $alignItems="center"
          $gap="8px"
          $padding="15px"
          $marginTop="60px"
          icon={<FaArrowRight size={22} />}
        />
      </div>
    </div>
  );
};
