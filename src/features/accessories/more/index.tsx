import S from "./index.module.scss";

export const More = () => {
  return (
    <div className={S.body}>
      <div className={S.container}>
        <div className={S.title}>
          <h2>Summarize. Chat. And More.</h2>
        </div>
        <div className={S.cardGroup}>
          <div className={S.card}>
            <h3>AI Summaries and citations</h3>
            <p>
              Improve your research and reading experience with just a few
              clicks. Sharly AI summarizer transforms lengthy documents and
              articles into concise ai summaries and accurately extract key
              citations. Saves time and enhances your understanding by
              pinpointing crucial information
            </p>
          </div>
          <div className={S.card}>
            <h3>Chat with PDFs and documents</h3>
            <p>
              Chat with any file type. Simply upload any document or PDF and
              start chatting. Sharly advanced AI chat analyzes the content,
              allowing you to ask questions, get accurate summaries, and
              retrieve specific information instantly. It's like having a
              conversation with your documents, making information retrieval
              fast and easy.
            </p>
          </div>
          <div className={S.card}>
            <h3>Custom AI Behaviour </h3>
            <p>
              Craft unique AI personalities that resonate with your goal giving
              Sharly custom instructions. Create custom responses, set the tone
              of voice, and interact with your documents and PDFs in a way that
              feels natural and specific to your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
