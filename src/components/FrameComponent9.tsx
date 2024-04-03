import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent9.module.css";

export type FrameComponent9Type = {
  eosIconsai?: string;
  prop?: string;
  costReduce?: string;
  zeroOverheadInTheHiringPr?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  eosIconsai,
  prop,
  costReduce,
  zeroOverheadInTheHiringPr,
  propLeft,
  propTop,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={styles.eosIconsaiParent} style={frameDivStyle}>
      <img className={styles.eosIconsai} alt="" src={eosIconsai} />
      <h3 className={styles.costReduce}>
        <p className={styles.p}>{prop}</p>
        <p className={styles.costReduce1}>{costReduce}</p>
      </h3>
      <div className={styles.zeroOverheadIn}>{zeroOverheadInTheHiringPr}</div>
    </div>
  );
};

export default FrameComponent9;
