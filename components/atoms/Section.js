import cx from "components/utilities/cx";
import styles from "./Section.module.css";

const Section = ({ className, ...props }) => (
  <section className={cx(styles.section, className)} {...props} />
);

export default Section;
