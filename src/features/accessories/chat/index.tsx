import { Card } from "./card";
import S from "./index.module.scss";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import ICON_1 from "@assets/chat/icon_1.png";
import ICON_2 from "@assets/chat/icon_2.png";
import USER from "@assets/chat/user.png";
import USER_2 from "@assets/chat/user_2.png";
import USER_3 from "@assets/chat/user_3.jpg";
import MITTING from "@assets/chat/mitting.jpg";
import clsx from "clsx";

export const Chat = () => {
  return (
    <div className={S.body}>
      <h2>AI Chat for documents and PDFs</h2>
      <div className={S.chatCard}>
        <Card $backgroundColor="#ddf0f9" $borderRadius="24px">
          <h3>More than 50 types of documents</h3>
          <div className={S.list}>
            <div className={S.item}>
              <FaRegCircleCheck size={24} />
              <h4>Cross-document analysis</h4>
            </div>
            <div className={S.item}>
              <FaRegCircleCheck size={24} />
              <h4>Automatic OCR on PDFs</h4>
            </div>
            <div className={S.item}>
              <FaRegCircleCheck size={24} />
              <h4>Integrated with Google Drive</h4>
            </div>
          </div>
          <div className={S.iconPad}>
            <div className={S.iconGroup}>
              <img src={ICON_1} alt="" />
              <img src={ICON_2} alt="" />
            </div>
          </div>
        </Card>
        <Card $backgroundColor="#ecebfe" $borderRadius="24px">
          <h3>Powered by GPT-4 Enhanced AI Chat</h3>
          <div className={S.list}>
            <div className={S.item}>
              <FaRegCircleCheck size={24} />
              <h4>Highest accuracy via model tuning</h4>
            </div>
            <div className={S.item}>
              <FaRegCircleCheck size={24} />
              <h4>Extracts citations from sources</h4>
            </div>
            <div className={S.item}>
              <FaRegCircleCheck size={24} />
              <h4>GPT-4 available on PRO version</h4>
            </div>
          </div>
          <div className={S.iconPad}>
            <div className={S.iconGroup}>
              <div className={S.service}>
                <div className={S.talk}>
                  <span>What's the scope of work?</span>
                </div>
                <img src={USER} alt="" />
              </div>
              <div className={S.client}>
                <img src={USER_2} alt="" />
                <div className={S.talk}>
                  <span>
                    The scope of the content is to provide a comprehensive
                    understanding of project management. It discusses the
                    importance of the role of the project manager and
                    stakeholders, and the concept of "scope creep".
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card $backgroundColor="#fbeded" $borderRadius="24px">
          <h3>Collaborative knowledge base</h3>
          <div className={S.list}>
            <div className={S.item}>
              <FaRegCircleCheck size={24} />
              <h4>Share with your team or clients</h4>
            </div>
            <div className={S.item}>
              <FaRegCircleCheck size={24} />
              <h4>Integrate it in your workflow</h4>
            </div>
            <div className={S.item}>
              <FaRegCircleCheck size={24} />
              <h4>Secure infrastructure</h4>
            </div>
          </div>
          <div className={S.iconPad}>
            <div className={S.iconGroup}>
              <div className={S.mitting}>
                <img src={MITTING} alt="" />
                <div className={clsx(S.user, S.first)}>
                  <img src={USER} alt="" />
                </div>
                <div className={clsx(S.user, S.second)}>
                  <img src={USER_3} alt="" />
                </div>
                <div className={clsx(S.user, S.third)}>
                  <p>+10</p>
                </div>
                <div className={S.lock}>
                  <CiLock size={45} />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
