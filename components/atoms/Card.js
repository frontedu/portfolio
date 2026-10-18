import Flex from "components/atoms/Flex";
import cx from "components/utilities/cx";
import styles from "./Card.module.css";

const Card = ({ pressable = false, className, ...props }) => (
  <Flex
    variants={{
      default: { transform: "translateY(0px) scale(1)" },
      hover: { transform: "translateY(0px) scale(1.03)" },
      tap: { transform: "translateY(0px) scale(0.97)" },
    }}
    initial="default"
    whileHover={pressable && "hover"}
    whileTap={pressable && "tap"}
    className={cx(styles.card, pressable && styles.pressable, className)}
    {...props}
  />
);

const CardContent = ({ direction = "column", className, ...props }) => (
  <Flex
    direction={direction}
    className={cx(styles.content, className)}
    {...props}
  />
);

Card.Content = CardContent;

export default Card;
