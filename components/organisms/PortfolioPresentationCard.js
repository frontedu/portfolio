import Card from "components/atoms/Card";
import Content from "components/atoms/Content";
import Flex from "components/atoms/Flex";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import Browser from "../../public/images/Browser.svg";
import Box from "components/atoms/Box";
import CopyToClipboardButton from "components/molecules/CopyToClipboardButton";

const PortfolioPresentationCard = () => (
  <Section id="PortfolioPresentation">
    <Content>
      <Card pressable={false}>
        <Card.Content>
          <Flex direction="column" align="start" justify="between">
            <Flex direction="column" css={{ marginBottom: "$space400" }}>
              <Text preset="largeHeading" css={{ maxWidth: "25ch" }}>
               Quer saber mais sobre como abordei esse projeto?
              </Text>
              <Text preset="body" css={{ color: "$gray400", maxWidth: "40ch" }}>
                É só me mandar uma mensagem. Posso te mostrar na prática e com maior nível de detalhes como eu realizei.
              </Text>
            </Flex>
            <CopyToClipboardButton value="eduardo@eddu.dev">
              eduardo@eddu.dev
            </CopyToClipboardButton>
          </Flex>
        </Card.Content>
        <Box
          css={{
            width: "50%",
            padding: "$space500 0",
            transform: "translateX(25%)",
            "@lessThanMedium": { display: "none" },
          }}
        >
          <Browser></Browser>
        </Box>
      </Card>
    </Content>
  </Section>
);

export default PortfolioPresentationCard;
