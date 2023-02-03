import Icon from "components/atoms/Icon";
import Card from "components/atoms/Card";
import Box from "components/atoms/Box";
import Text from "components/atoms/Text";
import Flex from "components/atoms/Flex";
import Button from "components/atoms/Button";

const ConfidentialBanner = ({ css }) => (
  <Card pressable={false} css={{ padding: "$space400", ...css }}>
    <Flex
      align={{ "@initial": "start", "@medium": "center" }}
      align="start"
      justify="between"
      gap
    >
      <Flex align="start" gap>
        <Box
          css={{
            padding: "$space200",
            backgroundColor: "$gray800",
            borderRadius: "100%",
            color: "$gray000",
            display: "inline-flex",
          }}
        >
          <Icon name="EyeSlash" css={{ width: "24px", height: "24px" }}></Icon>
        </Box>
        <Box>
          <Text css={{ color: "$gray300", maxWidth: "55ch", padding: 0 }}>
            Este projeto possui aspectos confidenciais. Caso deseje saber mais sobre meu processo, podemos trocar uma ideia.
          </Text>
        </Box>
      </Flex>
      <Button
        iconName="ArrowDown"
        href="#PortfolioPresentation"
        css={{ "@lessThanMedium": { display: "none" } }}
      >
        Conversar
      </Button>
    </Flex>
  </Card>
);

export default ConfidentialBanner;
