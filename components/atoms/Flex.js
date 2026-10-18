import cx from "components/utilities/cx";
import Box from "./Box";
import styles from "./Flex.module.css";

const alignClasses = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  stretch: styles.alignStretch,
  baseline: styles.alignBaseline,
};

const justifyClasses = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
};

const Flex = ({
  direction = "row",
  align = "stretch",
  justify = "start",
  wrap = "noWrap",
  gap = false,
  className,
  ...props
}) => (
  <Box
    className={cx(
      styles.flex,
      styles[direction],
      alignClasses[align],
      justifyClasses[justify],
      styles[wrap],
      gap && styles.gap,
      className,
    )}
    {...props}
  />
);

export default Flex;
