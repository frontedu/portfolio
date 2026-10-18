import Card from "components/atoms/Card";
import Content from "components/atoms/Content";
import Flex from "components/atoms/Flex";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import Browser from "../../public/images/Browser.svg";
import Box from "components/atoms/Box";
import CopyToClipboardButton from "components/molecules/CopyToClipboardButton";
import useContent from "components/utilities/useContent";
import styles from "./PortfolioPresentationCard.module.css";

const content = {
  "pt-BR": {
    title: "Quer saber mais sobre como abordei esse projeto?",
    description:
      "É só me mandar uma mensagem. Posso te mostrar na prática e com maior nível de detalhes como eu realizei.",
  },
  en: {
    title: "Want to know more about how I approached this project?",
    description:
      "Just send me a message. I can walk you through how I did it, in practice and in more detail.",
  },
};

const PortfolioPresentationCard = () => {
  const t = useContent(content);

  return (
    <Section id="PortfolioPresentation">
      <Content>
        <Card pressable={false}>
          <Card.Content>
            <Flex direction="column" align="start" justify="between">
              <Flex direction="column" className={styles.header}>
                <Text preset="largeHeading" className={styles.title}>
                  {t.title}
                </Text>
                <Text preset="body" className={styles.description}>
                  {t.description}
                </Text>
              </Flex>
              <CopyToClipboardButton value="eduardo@eddu.dev">
                eduardo@eddu.dev
              </CopyToClipboardButton>
            </Flex>
          </Card.Content>
          <Box className={styles.browser}>
            <Browser></Browser>
          </Box>
        </Card>
      </Content>
    </Section>
  );
};

export default PortfolioPresentationCard;
