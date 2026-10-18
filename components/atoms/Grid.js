import Box from "components/atoms/Box";
import cx from "components/utilities/cx";
import styles from "./Grid.module.css";

const gapClasses = {
  default: styles.gapDefault,
  large: styles.gapLarge,
};

const Grid = ({ columns = 1, gapSize = "default", className, ...props }) => (
  <Box
    className={cx(
      styles.grid,
      styles[`columns${columns}`],
      gapClasses[gapSize],
      className,
    )}
    {...props}
  />
);

export default Grid;
