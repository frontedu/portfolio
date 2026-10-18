import Button from "components/atoms/Button";
import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Text from "components/atoms/Text";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import useContent from "components/utilities/useContent";
import styles from "./CopyToClipboardButton.module.css";

const content = {
  "pt-BR": { copied: "E-mail copiado!" },
  en: { copied: "Email copied!" },
};

const CopyToClipboardButton = (props) => {
  const { value, children } = props;
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const t = useContent(content);

  const copy = () => {
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 3000);
    navigator.clipboard.writeText(value);
  };

  const variants = {
    hidden: { opacity: 0, y: "-40%" },
    visible: { opacity: 1, y: "-100%" },
    exit: { opacity: 0, y: "-100%" },
  };

  return (
    <Box className={styles.wrapper}>
      <AnimatePresence>
        {tooltipVisible && (
          <Flex
            className={styles.tooltip}
            justify="center"
            initial="hidden"
            animate={"visible"}
            exit="exit"
            variants={variants}
          >
            <Box className={styles.bubble}>
              <Text>{t.copied}</Text>
            </Box>
          </Flex>
        )}
      </AnimatePresence>
      <Button onClick={copy} iconName="Copy" {...props}>
        {children}
      </Button>
    </Box>
  );
};

export default CopyToClipboardButton;
