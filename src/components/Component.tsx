import { FunctionComponent } from "react";
import styles from "./Component.module.css";

export type ComponentType = {
  unsplashMpdLxiIg0P0?: string;
};

const Component: FunctionComponent<ComponentType> = ({
  unsplashMpdLxiIg0P0,
}) => {
  return (
    <div className={styles.component11}>
      <img
        className={styles.unsplashmpdlxiig0p0Icon}
        loading="lazy"
        alt=""
        src={unsplashMpdLxiIg0P0}
      />
      <div className={styles.subtitle}>
        <h3 className={styles.reworkHasBeen}>
          Rework has been a great way to make the hiring process easier and
          faster.
        </h3>
        <div className={styles.weveBeenAble}>
          “We've been able to save money and time, and the recruiters have been
          able to find the best employers leads. Highly recommend! “
        </div>
      </div>
    </div>
  );
};

export default Component;
