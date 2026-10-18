import { motion } from "framer-motion";
import cx from "components/utilities/cx";
import styles from "./Box.module.css";

const Box = ({ className, ...props }) => (
  <motion.div className={cx(styles.box, className)} {...props} />
);

export default Box;
