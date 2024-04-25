import { Outlet } from "react-router-dom";
import { AppHeader } from "../appHeader";
import { AppFooter } from "../appFooter";

export const AppContainer = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
};
