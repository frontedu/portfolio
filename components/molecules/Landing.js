import Section from "components/atoms/Section";
import cx from "components/utilities/cx";
import styles from "./Landing.module.css";

const Landing = ({ className, ...props }) => (
  <Section className={cx(styles.landing, className)} {...props} />
);

export default Landing;
