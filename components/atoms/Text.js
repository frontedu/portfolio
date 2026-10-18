import cx from "components/utilities/cx";
import styles from "./Text.module.css";

const Text = ({ as: Tag = "span", preset = "body", className, ...props }) => (
  <Tag className={cx(styles.text, styles[preset], className)} {...props} />
);

export default Text;
