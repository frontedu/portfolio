import Icon from "components/atoms/Icon";
import Card from "components/atoms/Card";
import Box from "components/atoms/Box";
import Text from "components/atoms/Text";
import Flex from "components/atoms/Flex";
import Button from "components/atoms/Button";
import cx from "components/utilities/cx";
import useContent from "components/utilities/useContent";
import styles from "./ConfidentialBanner.module.css";

const content = {
  "pt-BR": {
    text: "Este projeto possui aspectos confidenciais. Caso deseje saber mais sobre meu processo, podemos trocar uma ideia.",
    cta: "Conversar",
  },
  en: {
    text: "Parts of this project are confidential. If you'd like to know more about my process, let's talk.",
    cta: "Let's talk",
  },
};

const ConfidentialBanner = ({ className }) => {
  const t = useContent(content);

  return (
    <Card pressable={false} className={cx(styles.banner, className)}>
      <Flex align="start" justify="between" gap>
        <Flex align="start" gap>
          <Box className={styles.iconWrapper}>
            <Icon name="EyeSlash" className={styles.icon}></Icon>
          </Box>
          <Box>
            <Text className={styles.text}>{t.text}</Text>
          </Box>
        </Flex>
        <Button
          iconName="ArrowDown"
          href="#PortfolioPresentation"
          className={styles.button}
        >
          {t.cta}
        </Button>
      </Flex>
    </Card>
  );
};

export default ConfidentialBanner;
