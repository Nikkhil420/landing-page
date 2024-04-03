import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className={styles.ctaWrapper}>
      <div className={styles.cta}>
        <div className={styles.merger}>
          <div className={styles.transformer}>
            <h1 className={styles.discoverTheFutureContainer}>
              <span>{`Discover the Future of `}</span>
              <span className={styles.talentAssessment}>
                Talent Assessment!
              </span>
            </h1>
            <div className={styles.facingChallengesInContainer}>
              <p className={styles.facingChallengesIn}>
                Facing challenges in traditional hiring?
              </p>
              <p className={styles.uncoverTheCosts}>
                Uncover the costs, pitfalls, and the game-changing role of
                Generative AI in recruitment.
              </p>
            </div>
            <div className={styles.insideThisWhitepaperContainer}>
              <p className={styles.insideThisWhitepaper}>
                <b>🔍 Inside this Whitepaper:</b>
              </p>
              <ul className={styles.manualVsMachineBasedHirin}>
                <li className={styles.manualVsMachineBasedHirin1}>
                  <span
                    className={styles.manualVsMachineBased}
                  >{`Manual vs. Machine-based hiring: Costs & Challenges.`}</span>
                </li>
                <li className={styles.theTruthAboutInterviewAs}>
                  <span className={styles.theTruthAbout}>
                    The truth about "Interview as a Service."
                  </span>
                </li>
                <li>
                  <span className={styles.generativeAiThe}>
                    Generative AI: The simple explanation. Optimize Your Hiring
                    Process Today!
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <button className={styles.ctaButton}>
            <div className={styles.downloadNowFor}>
              Download Now for Smarter Recruitment
            </div>
          </button>
        </div>
        <div className={styles.wrapperExpander}>
          <img
            className={styles.expanderIcon}
            loading="lazy"
            alt=""
            src="/rectangle-39394@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
