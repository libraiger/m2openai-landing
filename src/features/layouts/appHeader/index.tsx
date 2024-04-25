import { CustomButton } from "@features/ui/button";
import { AppSidebar } from "../appSidebarNavigation";
import S from "./index.module.scss";
import { FaArrowRight } from "react-icons/fa";

export const AppHeader = () => {
  return (
    <div className={S.body}>
      <div className={S.logoGroup}>
        <div className={S.logo}></div>
        <h1 className={S.logoText}>Sharly</h1>
      </div>
      <AppSidebar />
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
        icon={<FaArrowRight size={22} />}
      />
    </div>
  );
};
