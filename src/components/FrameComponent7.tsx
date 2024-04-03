import { FunctionComponent } from "react";
import Steps from "./Steps";
import styles from "./FrameComponent7.module.css";

const FrameComponent7: FunctionComponent = () => {
  return (
    <section className={styles.optimizationAlgorithms}>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector-13.svg" />
        <div className={styles.steps}>
          <div className={styles.toggleSwitch}>
            <h1 className={styles.howOurSystemContainer}>
              <span>{`How Our System `}</span>
              <span className={styles.operates}>Operates</span>
            </h1>
          </div>
          <div className={styles.stepperNav}>
            <div className={styles.skeleton}>
              <Steps
                uploadDocuments="Upload Documents"
                shortlistTheMostQualified="Shortlist the most qualified candidate and upload their details for the top companies"
                frame48095633="/frame-48095633.svg"
              />
              <div className={styles.steps1}>
                <div className={styles.signUp}>Sign Up</div>
                <div className={styles.followTheLink}>
                  Follow the link below to sign up and get access of the current
                  job postings
                </div>
                <div className={styles.wrapperMingcuteuserAddLine}>
                  <img
                    className={styles.mingcuteuserAddLineIcon}
                    loading="lazy"
                    alt=""
                    src="/mingcuteuseraddline.svg"
                  />
                </div>
              </div>
              <Steps
                uploadDocuments="Get Rewards"
                shortlistTheMostQualified="As soon as the candidate gets selected you get your benefits"
                frame48095633="/frame-48095633-1.svg"
                propPadding="0px 0px var(--padding-41xl) var(--padding-11xl)"
                propPadding1="0px var(--padding-mini)"
                propMinHeight="100px"
              />
            </div>
            <div className={styles.simpleButtonWrapper}>
              <button className={styles.simpleButton}>
                <div className={styles.getStarted}>Get Started</div>
                <div className={styles.arrow}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
