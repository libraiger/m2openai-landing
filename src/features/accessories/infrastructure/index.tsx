import S from "./index.module.scss";
import { PiFolderLockThin, PiEyeLight } from "react-icons/pi";
import { RiSettings4Line } from "react-icons/ri";
import { TiPencil } from "react-icons/ti";
import { FiUser } from "react-icons/fi";

export const Infrastructure = () => {
  return (
    <div className={S.body}>
      <div className={S.wrapper}>
        <div className={S.note}>
          <PiFolderLockThin className={S.icon} size={42} />
          <span>Reliable, Secure Infrastructure</span>
          <p>
            Our solution is housed in trusted online environments. In addition
            to this robust foundation, we employ measures like permission based
            access and data encryption, ensuring your data remains protected and
            secure.
          </p>
        </div>
        <div className={S.view}>
          <div className={S.data}>
            <div className={S.header}>
              <span>Data access</span>
              <PiEyeLight size={24} color="rgb(26, 33, 43)" />
            </div>
            <p>
              Access to your data is heavily restricted and monitored. Only
              those with the correct permissions can access the information,
              just like a lock and key system. This means that your data stays
              confidential and private, accessible only by authorized personnel.
            </p>
          </div>
          <div className={S.border} />
          <div className={S.control}>
            <div className={S.header}>
              <span>Data control</span>
              <RiSettings4Line size={24} color="rgb(26, 33, 43)" />
            </div>
          </div>
          <div className={S.border} />
          <div className={S.request}>
            <div className={S.header}>
              <span>Request access to your data</span>
              <TiPencil size={24} color="rgb(26, 33, 43)" />
            </div>
          </div>
          <div className={S.border} />
          <div className={S.security}>
            <div className={S.header}>
              <span>Data security</span>
              <FiUser size={24} color="rgb(26, 33, 43)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
