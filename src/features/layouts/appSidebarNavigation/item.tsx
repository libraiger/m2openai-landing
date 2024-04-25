import { NAV_TYPE } from "@utils/typesUtils";
import S from "./item.module.scss";
import { useNavigate } from "react-router-dom";

export const NavItem = ({ data }: { data: NAV_TYPE }) => {
  const navigate = useNavigate();

  return (
    <div className={S.body} onClick={() => navigate(data.path)}>
      <h2>{data.title}</h2>
    </div>
  );
};
