import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Steps.module.css";

export type StepsType = {
  uploadDocuments?: string;
  shortlistTheMostQualified?: string;
  frame48095633?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propMinHeight?: CSSProperties["minHeight"];
};

const Steps: FunctionComponent<StepsType> = ({
  uploadDocuments,
  shortlistTheMostQualified,
  frame48095633,
  propPadding,
  propPadding1,
  propMinHeight,
}) => {
  const stepsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
      minHeight: propMinHeight,
    };
  }, [propPadding1, propMinHeight]);

  return (
    <div className={styles.steps} style={stepsStyle}>
      <div className={styles.uploadDocuments}>{uploadDocuments}</div>
      <div className={styles.stepsInner} style={frameDiv1Style}>
        <div className={styles.shortlistTheMostQualifiedCWrapper}>
          <div className={styles.shortlistTheMost}>
            {shortlistTheMostQualified}
          </div>
        </div>
      </div>
      <div className={styles.wrapperFrame48095633}>
        <img
          className={styles.wrapperFrame48095633Child}
          loading="lazy"
          alt=""
          src={frame48095633}
        />
      </div>
    </div>
  );
};

export default Steps;
