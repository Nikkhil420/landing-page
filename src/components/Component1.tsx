import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Component1.module.css";

export type Component1Type = {
  reworkHasBeenAGreatWayToM?: string;
  ellipse2?: string;
  theresaWebb?: string;
  hRManagerAmazon?: string;

  /** Style props */
  theresaWebbMargin?: CSSProperties["margin"];
  theresaWebbFontWeight?: CSSProperties["fontWeight"];
};

const Component1: FunctionComponent<Component1Type> = ({
  reworkHasBeenAGreatWayToM,
  ellipse2,
  theresaWebb,
  hRManagerAmazon,
  theresaWebbMargin,
  theresaWebbFontWeight,
}) => {
  const theresaWebbStyle: CSSProperties = useMemo(() => {
    return {
      margin: theresaWebbMargin,
      fontWeight: theresaWebbFontWeight,
    };
  }, [theresaWebbMargin, theresaWebbFontWeight]);

  return (
    <div className={styles.component16}>
      <div className={styles.reworkHasBeen}>{reworkHasBeenAGreatWayToM}</div>
      <div className={styles.ellipseParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={ellipse2}
        />
        <div className={styles.container}>
          <h3 className={styles.theresaWebb} style={theresaWebbStyle}>
            {theresaWebb}
          </h3>
          <div className={styles.hrManagerAmazon}>{hRManagerAmazon}</div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
