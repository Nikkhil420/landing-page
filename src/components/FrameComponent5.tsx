import { FunctionComponent } from "react";
import FrameComponent6 from "./FrameComponent6";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <section className={styles.dataAggregator}>
      <div className={styles.chooseYourSimpleTransparenWrapper}>
        <h1 className={styles.chooseYourSimpleContainer}>
          <span>{`Choose Your Simple, `}</span>
          <span className={styles.transparentPricing}>Transparent Pricing</span>
        </h1>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.paragpraphParent}>
          <FrameComponent6 prop="1" month="Month" prop1="199.00" />
          <div className={styles.dropdownMenu}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameContainer}>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>3</div>
                    </div>
                    <h3 className={styles.months}>Months</h3>
                  </div>
                  <div className={styles.mostPopularWrapper}>
                    <div className={styles.mostPopular}>Most Popular</div>
                  </div>
                </div>
              </div>
              <div className={styles.parent}>
                <h1 className={styles.h1}>₹</h1>
                <div className={styles.div1}>149.00</div>
                <div className={styles.month}>/month</div>
              </div>
            </div>
            <div className={styles.dropdownMenuInner}>
              <div className={styles.suitableForCompaniesWith5Parent}>
                <div className={styles.suitableForCompanies}>
                  Suitable for companies with 5-10 openings
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.iconsParent}>
                    <img className={styles.icons} alt="" src="/icons.svg" />
                    <div className={styles.interviewReadyCandidates}>
                      10 interview-ready candidates
                    </div>
                  </div>
                  <div className={styles.iconsGroup}>
                    <img className={styles.icons1} alt="" src="/icons.svg" />
                    <div className={styles.unlimitedJobPostings}>
                      Unlimited job postings
                    </div>
                  </div>
                  <div className={styles.iconsContainer}>
                    <img className={styles.icons2} alt="" src="/icons.svg" />
                    <div className={styles.receivePreVettedProfiles}>
                      Receive pre-vetted profiles within 48 hours
                    </div>
                  </div>
                  <div className={styles.iconsParent1}>
                    <img className={styles.icons3} alt="" src="/icons-3.svg" />
                    <div className={styles.dedicatedAccountManager}>
                      Dedicated account manager
                    </div>
                  </div>
                  <div className={styles.iconsParent2}>
                    <img className={styles.icons4} alt="" src="/icons-3.svg" />
                    <div className={styles.assistanceWithInterview}>
                      Assistance with interview scheduling
                    </div>
                  </div>
                  <div className={styles.iconsParent3}>
                    <img className={styles.icons5} alt="" src="/icons-3.svg" />
                    <div className={styles.customReports}>Custom reports</div>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.simpleButton}>
              <div className={styles.getStarted}>Get Started</div>
              <div className={styles.arrow}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </button>
          </div>
          <FrameComponent6
            prop="6"
            month="Months"
            prop1="169.00"
            propPadding="0px var(--padding-17xl) 0px var(--padding-16xl-5)"
            propPadding1="0px var(--padding-38xl) 0px var(--padding-38xl-5)"
            propWidth="15px"
            propMinWidth="15px"
            propMinWidth1="58px"
          />
        </div>
        <div className={styles.shadow}>
          <div className={styles.roundedCorners}>
            <h2 className={styles.step3}>Step-3</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
