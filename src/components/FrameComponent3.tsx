import { FunctionComponent } from "react";
import Component1 from "./Component1";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section className={styles.forEmployersInner}>
      <div className={styles.imageProcessorParent}>
        <div className={styles.imageProcessor}>
          <h1 className={styles.customerTestimonials}>
            <span>{`Customer `}</span>
            <span className={styles.testimonials}>Testimonials</span>
          </h1>
          <div className={styles.whatOthersHas}>
            What others has say About Us
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.component16Parent}>
            <Component1
              reworkHasBeenAGreatWayToM="“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “"
              ellipse2="/ellipse-2@2x.png"
              theresaWebb="Theresa Webb"
              hRManagerAmazon="HR Manager, Amazon"
            />
            <div className={styles.component11}>
              <div className={styles.reworkHasBeen}>
                “ Rework has been a great way to make the hiring process easier
                and faster. We've been able to save money and time, ““ Rework
                has been a great way to make the hiring process easier and
                faster. Highly recommend! “
              </div>
              <div className={styles.image}>
                <img
                  className={styles.imageChild}
                  loading="lazy"
                  alt=""
                  src="/ellipse-1@2x.png"
                />
                <div className={styles.container}>
                  <h3 className={styles.ronaldRichards}>Ronald Richards</h3>
                  <div className={styles.hrManagerGoogle}>
                    HR Manager, Google
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.image1}>
            <Component1
              reworkHasBeenAGreatWayToM="“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “"
              ellipse2="/ellipse-1-1@2x.png"
              theresaWebb="Savannah Nguyen"
              hRManagerAmazon="HR Manager, Microsoft"
              theresaWebbMargin="0"
              theresaWebbFontWeight="400"
            />
            <Component1
              reworkHasBeenAGreatWayToM="“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “"
              ellipse2="/ellipse-1-2@2x.png"
              theresaWebb="Ronald Richards"
              hRManagerAmazon="HR Manager, Google"
              theresaWebbMargin="unset"
              theresaWebbFontWeight="unset"
            />
          </div>
          <div className={styles.symbolSet}>
            <Component1
              reworkHasBeenAGreatWayToM="“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “"
              ellipse2="/ellipse-2-1@2x.png"
              theresaWebb="Theresa Webb"
              hRManagerAmazon="HR Manager, Amazon"
              theresaWebbMargin="0"
              theresaWebbFontWeight="400"
            />
            <Component1
              reworkHasBeenAGreatWayToM="“ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “"
              ellipse2="/ellipse-1-3@2x.png"
              theresaWebb="Ronald Richards"
              hRManagerAmazon="HR Manager, Google"
              theresaWebbMargin="unset"
              theresaWebbFontWeight="unset"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
