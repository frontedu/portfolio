import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Text from "components/atoms/Text";
import Content from "components/atoms/Content";
import CopyToClipboardButton from "components/molecules/CopyToClipboardButton";
import Button from "components/atoms/Button";

export const Footer = () => (
  <Box css={{ padding: "$space700 0 $space900" }}>
    <Content>
      <Flex align="stretch" justify="start" gap>
        <Box>
          <CopyToClipboardButton value="eduardo@eddu.dev" variant="ghost">
            eduardo@eddu.dev
          </CopyToClipboardButton>
        </Box>
        
        <Box>
          <Button variant="ghost" href="https://www.linkedin.com/in/frontedu/">
            LinkedIn
          </Button>
        </Box>
        <Box>
          <Button variant="ghost" href="https://dribbble.com/frontedu">
            Dribbble
          </Button>
        </Box>
        <Flex align="center" justify="end">
          <Button
            variant="ghost"
            iconName="Github"
            href="https://github.com/frontedu/portfolio"
          >
            Este site é de código aberto
          </Button>
        </Flex>
      </Flex>
    </Content>
  </Box>
);
