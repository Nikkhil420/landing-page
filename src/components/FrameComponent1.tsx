import { FunctionComponent } from "react";
import Component from "./Component";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.forEmployersInner}>
      <div className={styles.dataFlowControlParent}>
        <div className={styles.dataFlowControl}>
          <div className={styles.successStoriesWrapper}>
            <h1 className={styles.successStories}>
              <span>{`Success `}</span>
              <span className={styles.stories}>Stories</span>
            </h1>
          </div>
          <div className={styles.star}>
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0@2x.png" />
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0-1@2x.png" />
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0-2@2x.png" />
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
