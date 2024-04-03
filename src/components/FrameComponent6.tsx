import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  prop?: string;
  month?: string;
  prop1?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  prop,
  month,
  prop1,
  propPadding,
  propPadding1,
  propWidth,
  propMinWidth,
  propMinWidth1,
}) => {
  const toggleSwitchStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const sliderStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const dividerStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const monthStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.paragpraph}>
      <div className={styles.toggleSwitch} style={toggleSwitchStyle}>
        <div className={styles.progressBar}>
          <div className={styles.slider} style={sliderStyle}>
            <div className={styles.labelParent}>
              <div className={styles.label} style={labelStyle}>
                <div className={styles.divider} style={dividerStyle}>
                  {prop}
                </div>
              </div>
              <h3 className={styles.month} style={monthStyle}>
                {month}
              </h3>
            </div>
          </div>
          <div className={styles.parent}>
            <h1 className={styles.h1}>₹</h1>
            <div className={styles.star}>{prop1}</div>
            <div className={styles.month1}>/month</div>
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.button}>
          <div className={styles.suitableForCompanies}>
            Suitable for companies with 5-10 openings
          </div>
          <div className={styles.projects}>
            <div className={styles.iconsParent}>
              <img
                className={styles.icons}
                loading="lazy"
                alt=""
                src="/icons.svg"
              />
              <div className={styles.interviewReadyCandidates}>
                10 interview-ready candidates
              </div>
            </div>
            <div className={styles.projectCard}>
              <img className={styles.icons1} alt="" src="/icons.svg" />
              <div className={styles.unlimitedJobPostings}>
                Unlimited job postings
              </div>
            </div>
            <div className={styles.iconsGroup}>
              <img className={styles.icons2} alt="" src="/icons.svg" />
              <div className={styles.receivePreVettedProfiles}>
                Receive pre-vetted profiles within 48 hours
              </div>
            </div>
            <div className={styles.iconsContainer}>
              <img className={styles.icons3} alt="" src="/icons-3.svg" />
              <div className={styles.dedicatedAccountManager}>
                Dedicated account manager
              </div>
            </div>
            <div className={styles.headerWrapper}>
              <img className={styles.icons4} alt="" src="/icons-3.svg" />
              <div className={styles.assistanceWithInterview}>
                Assistance with interview scheduling
              </div>
            </div>
            <div className={styles.frameDiv}>
              <img className={styles.icons5} alt="" src="/icons-3.svg" />
              <div className={styles.customReports}>Custom reports</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.simpleButtonWrapper}>
        <button className={styles.simpleButton}>
          <div className={styles.getStarted}>Get Started</div>
          <div className={styles.arrow}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent6;
