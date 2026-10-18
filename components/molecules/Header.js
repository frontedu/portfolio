import Box from "components/atoms/Box";
import Content from "components/atoms/Content";
import Flex from "components/atoms/Flex";
import Menu from "components/organisms/Menu";
import styles from "./Header.module.css";

const Header = () => (
  <Box className={styles.header}>
    <Content>
      <Flex justify="center" align="center">
        <Menu key="menu" />
      </Flex>
    </Content>
  </Box>
);

export default Header;
