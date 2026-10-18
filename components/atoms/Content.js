import Box from "./Box";
import styles from "./Content.module.css";

export const Content = ({ children }) => {
  return <Box className={styles.content}>{children}</Box>;
};

export default Content;
