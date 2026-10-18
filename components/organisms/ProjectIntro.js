import Flex from "components/atoms/Flex";
import Content from "components/atoms/Content";
import Text from "components/atoms/Text";
import Landing from "components/molecules/Landing";
import styles from "./ProjectIntro.module.css";

const ProjectIntro = ({ client, role, year, description, title, children }) => (
  <Landing>
    <Content>
      <Flex direction="column" className={styles.header}>
        <Text as="h2" preset="overline" className={styles.meta}>
          {`${client} · ${role} · ${year}`}
        </Text>
        <Text as="h1" preset="xLargeHeading" className={styles.title}>
          {title}
        </Text>
      </Flex>
      {children}
    </Content>
  </Landing>
);

export default ProjectIntro;
