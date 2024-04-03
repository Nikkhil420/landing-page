import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.forEmployersInner}>
      <div className={styles.frameParent}>
        <div className={styles.howReworkAiHasBeenAGoodWrapper}>
          <h1 className={styles.howReworkAiContainer}>
            <span>{`How Rework AI has been a good `}</span>
            <span className={styles.hiringPlatformFor}>
              Hiring platform for Companies
            </span>
          </h1>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.wrapper}>
                <b className={styles.b}>80%</b>
              </div>
              <div className={styles.reductionInYour}>
                Reduction in your recruitment TAT with the access to a wider
                talent pool on the platform
              </div>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.frameDiv}>
              <div className={styles.container}>
                <b className={styles.b1}>50%</b>
              </div>
              <div className={styles.streamlineYourBudgeting}>
                Streamline your budgeting and save money while finding the top
                candidates
              </div>
            </div>
            <div className={styles.frameItem} />
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent1}>
            <div className={styles.kWrapper}>
              <b className={styles.k}>10k</b>
            </div>
            <div className={styles.certifiedSourcingPartners}>
              Certified sourcing partners’ expertise
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
