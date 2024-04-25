import { CustomButton } from "@features/ui/button";
import { AppSidebar } from "../appSidebarNavigation";
import S from "./index.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const VITE_MAURISOURCE_URL=import.meta.env.VITE_MAURISOURCE_URL;

export const AppHeader = () => {

  return (
    <div className={S.body}>
      <Link className={S.logoGroup} to="/dashboard">
        <div className={S.logo}></div>
        <h1 className={S.logoText}>Sharly</h1>
      </Link>
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
        $cursor="pointer"
        icon={<FaArrowRight size={22} />}
        onClick={() => {
          window.location.href = VITE_MAURISOURCE_URL;
        }}
      />
    </div>
  );
};
