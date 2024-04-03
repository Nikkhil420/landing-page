import { FunctionComponent } from "react";
import styles from "./FrameComponent11.module.css";

const FrameComponent11: FunctionComponent = () => {
  return (
    <div className={styles.image}>
      <header className={styles.frameParent}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            <div className={styles.logoChild} />
            <div className={styles.logoItem} />
            <div className={styles.rework}>
              <span className={styles.re}>
                <span className={styles.r}>r</span>
                <span className={styles.e}>e</span>
              </span>
              <span className={styles.work}>work</span>
            </div>
            <div className={styles.aiWrapper}>
              <div className={styles.ai}>ai</div>
            </div>
          </div>
        </div>
        <div className={styles.splitter}>
          <div className={styles.errorHandler}>
            <button className={styles.talentFinder}>Talent Finder</button>
            <button className={styles.forRecruiters}>For Recruiters</button>
            <div className={styles.forEmployersParent}>
              <button className={styles.forEmployers}>For Employers</button>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/vector-451.svg"
                />
              </div>
            </div>
            <button className={styles.aboutUs}>About Us</button>
            <button className={styles.company}>Company</button>
          </div>
        </div>
        <div className={styles.simpleButtonParent}>
          <button className={styles.simpleButton}>
            <div className={styles.logIn}>Log In</div>
            <div className={styles.arrow}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
            </div>
          </button>
          <button className={styles.simpleButton1}>
            <div className={styles.getStarted}>Get Started</div>
            <div className={styles.arrow1}>
              <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
              <img className={styles.vectorIcon3} alt="" src="/vector-1.svg" />
            </div>
          </button>
        </div>
      </header>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <div className={styles.maskGroup}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameInner} />
                  <div className={styles.kCandidatesHiredContainer}>
                    <p className={styles.k}>
                      <b>+10K</b>
                    </p>
                    <p className={styles.candidatesHired}>Candidates Hired</p>
                  </div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.rectangleDiv} />
                    <img
                      className={styles.vectorIcon4}
                      alt=""
                      src="/vector-4.svg"
                    />
                  </div>
                </div>
                <img
                  className={styles.maskGroupChild}
                  loading="lazy"
                  alt=""
                  src="/rectangle-39395@2x.png"
                />
              </div>
            </div>
            <div className={styles.powerUpYourContainer}>
              <p className={styles.powerUpYour}>Power Up Your Hiring</p>
              <p className={styles.withRework}>with Rework .</p>
            </div>
          </div>
          <div
            className={styles.empowerYourBusiness}
          >{`Empower your business with cutting-edge A.I. technology, simplified processes, and top-tier talent connections. Rework is your strategic partner in redefining how you hire `}</div>
        </div>
        <div className={styles.subroutine}>
          <button className={styles.ctaButton}>
            <div className={styles.bookADemo}>Book A Demo</div>
          </button>
          <div className={styles.subroutineInner}>
            <div className={styles.paragraphParent}>
              <div className={styles.paragraph}>
                <img className={styles.groupIcon} alt="" src="/group.svg" />
                <div className={styles.noCreditRequired}>
                  No credit Required
                </div>
              </div>
              <div className={styles.inputField}>
                <img className={styles.groupIcon1} alt="" src="/group.svg" />
                <div className={styles.streamlinedRecruitmentProces}>
                  Streamlined Recruitment Process
                </div>
              </div>
              <div className={styles.processingChain}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild1} />
                  <button className={styles.frameButton}>
                    <div className={styles.frameChild2} />
                    <img
                      className={styles.controlChainIcon}
                      alt=""
                      src="/vector-4.svg"
                    />
                  </button>
                  <div className={styles.happyCompaniesWrapper}>
                    <div className={styles.happyCompanies}>
                      <p className={styles.p}>
                        <b>+360</b>
                      </p>
                      <p className={styles.happyCompanies1}>Happy Companies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageChild} />
    </div>
  );
};

export default FrameComponent11;
