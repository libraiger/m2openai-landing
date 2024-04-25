import S from "./index.module.scss";
import {
  PiHourglassHighLight,
  PiBrain,
  PiClockCounterClockwiseLight,
} from "react-icons/pi";

export const Notice = () => {
  return (
    <div className={S.body}>
      <div className={S.wrapper}>
        <div className={S.card}>
          <PiHourglassHighLight className={S.logo} />
          <p>2 trillion hours</p>
          <span>spent reading PDF per year</span>
        </div>
        <div className={S.card}>
          <PiClockCounterClockwiseLight className={S.logo} />
          <p>10x</p>
          <span>time saved with Sharly AI chat</span>
        </div>
        <div className={S.card}>
          <PiBrain className={S.logo} />
          <p>GPT-4</p>
          <span>highest ChatGPT accuracy</span>
        </div>
      </div>
    </div>
  );
};
