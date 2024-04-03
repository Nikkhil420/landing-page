import { FunctionComponent } from "react";
import FrameComponent9 from "./FrameComponent9";
import styles from "./FrameComponent8.module.css";

const FrameComponent8: FunctionComponent = () => {
  return (
    <section className={styles.variableSet}>
      <div className={styles.merger}>
        <div className={styles.ourAmazingBenefitsHelpfulFWrapper}>
          <h1 className={styles.ourAmazingBenefitsContainer}>
            <span>{`Our Amazing Benefits `}</span>
            <span className={styles.helpfulForYour}>
              Helpful For Your Hiring
            </span>
          </h1>
        </div>
        <div className={styles.mergerChild} />
        <div className={styles.frameParent}>
          <FrameComponent9
            eosIconsai="/eosiconsai.svg"
            prop="60%"
            costReduce="Cost Reduce"
            zeroOverheadInTheHiringPr="Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"
          />
          <FrameComponent9
            eosIconsai="/eosiconsai-1.svg"
            prop="50% Faster"
            costReduce="Recruitment by TAT"
            zeroOverheadInTheHiringPr="Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"
            propLeft="428.2px"
            propTop="0px"
          />
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon} alt="" src="/vector-7.svg" />
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-8.svg"
                />
              </div>
            </div>
            <div className={styles.highlyContextualizedIntervieParent}>
              <h3 className={styles.highlyContextualizedIntervieContainer}>
                <p
                  className={styles.highlyContextualized}
                >{`Highly Contextualized `}</p>
                <p className={styles.interview}>Interview</p>
              </h3>
              <div className={styles.alModelsGenerate}>
                Al models generate highly contextualized interviews for the
                candidates based on your Company profile, Job description and
                Candidate's CV.
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.vectorGroup}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector-9.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="/vector-10.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="/vector-11.svg"
                />
                <img
                  className={styles.vectorIcon5}
                  alt=""
                  src="/vector-12.svg"
                />
              </div>
            </div>
            <div className={styles.automatedSchedulingParent}>
              <h3 className={styles.automatedScheduling}>
                <p className={styles.automated}>{`Automated `}</p>
                <p className={styles.scheduling}>Scheduling</p>
              </h3>
              <div
                className={styles.emailWhatsapp}
              >{`Email & WhatsApp based communication for interview scheduling with automated reminders.`}</div>
            </div>
          </div>
          <FrameComponent9
            eosIconsai="/eosiconsai-2.svg"
            prop="AI generated Interviews"
            costReduce="On what matters"
            zeroOverheadInTheHiringPr="0 manual interventions, completely seamless experience for the candidates."
            propLeft="428.2px"
            propTop="308px"
          />
          <FrameComponent9
            eosIconsai="/fluenttasksapp20regular.svg"
            prop="in-built"
            costReduce="ATS"
            zeroOverheadInTheHiringPr={`To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.`}
            propLeft="856.3px"
            propTop="308px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
