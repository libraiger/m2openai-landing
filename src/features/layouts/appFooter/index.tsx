import S from "./index.module.scss";

export const AppFooter = () => {
  return (
    <footer className={S.body}>
      <div className={S.wrapper}>
        <div className={S.contact}>
          <a href="" className={S.logo}>
            <img src="" alt="" />
            <span>Sharly</span>
          </a>
          <span>Copyright © 2024 VOX AI Inc.</span>
          <span>All rights reserved.</span>
        </div>
        <div className={S.links}>
          <div className={S.group}>
            <h3>Features</h3>
            <span>AI Summarizer</span>
            <span>Citations</span>
            <span>Cross-document</span>
          </div>
          <div className={S.group}>
            <h3>Solutions</h3>
            <span>Researchers</span>
            <span>Project Management</span>
            <span>AI for Legal</span>
            <span>AI Customer Support</span>
          </div>
          <div className={S.group}>
            <h3>About Us</h3>
            <span>Linkedin</span>
            <span>Twitter</span>
            <span>Contact us</span>
          </div>
          <div className={S.group}>
            <h3>Info</h3>
            <span>Blog</span>
            <span>Plans</span>
            <span>Affiliates - Earn 20%</span>
          </div>
          <div className={S.group}>
            <h3>Legal</h3>
            <span>Privacy</span>
            <span>Cookie policy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
