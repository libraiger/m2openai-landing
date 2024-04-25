import { NAVBAR_LIST } from "@utils/navbarUtils";
import S from "./index.module.scss";
import { NavItem } from "./item";

export const AppSidebar = () => {
  return (
    <div className={S.body}>
      {NAVBAR_LIST.map((list, index) => (
        <NavItem key={index} data={list} />
      ))}
    </div>
  );
};
