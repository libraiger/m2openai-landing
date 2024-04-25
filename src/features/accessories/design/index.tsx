import { Card } from "./card";
import S from "./index.module.scss";

export const Design = () => {
  return (
    <div className={S.body}>
      <div className={S.wrapper}>
        <Card>
          <span>Data encryption</span>
          <p>
            All data and chats at rest are shielded with AES-256 encryption.
            Data in transit is secured using TLS 1.3 with AES-256 encryption.
          </p>
        </Card>
        <Card>
          <span>Data segregration</span>
          <p>
            Data is partitioned by workspace and organization through row-level
            access controls.
          </p>
        </Card>
        <Card>
          <span>Audit logs</span>
          <p>
            Every operation is vigilantly monitored, recorded, and available for
            thorough analysis at any moment.
          </p>
        </Card>
        <Card>
          <span>No training for LLMs</span>
          <p>
            We use architecture and models that don't require user input data
            for retraining - your conversations and documents are safe!
          </p>
        </Card>
      </div>
    </div>
  );
};
