import { FunctionComponent } from "react";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./ForEmployers.module.css";

const ForEmployers: FunctionComponent = () => {
  return (
    <div className={styles.forEmployers}>
      <section className={styles.imageParent}>
        <FrameComponent11 />
        <FrameComponent10 />
      </section>
      <FrameComponent8 />
      <FrameComponent7 />
      <FrameComponent5 />
      <div className={styles.dataAggregator}>
        <button className={styles.simpleButton}>
          <div className={styles.bookADemo}>Book a Demo</div>
          <div className={styles.arrow}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
          </div>
        </button>
      </div>
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <section className={styles.hyperbolicHarmony}>
        <div className={styles.trigonometricTriad}>
          <div className={styles.optimizeYourHiringStrategyParent}>
            <h1 className={styles.optimizeYourHiring}>
              Optimize Your Hiring Strategy with Rework's Exclusive Hiring Audit
            </h1>
            <div className={styles.discoverTheStrengths}>
              Discover the strengths and opportunities in your current hiring
              process. Our comprehensive Hiring Audit evaluates your strategy,
              identifies areas for improvement, and tailors a roadmap for
              success. Elevate your recruitment game with data-driven insights –
              because the right talent deserves the right approach.
            </div>
          </div>
          <button className={styles.ctaButton}>
            <div className={styles.requestYourFree}>
              Request Your Free Hiring Audit
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ForEmployers;
