import Flex from "components/atoms/Flex";
import Content from "components/atoms/Content";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import useContent from "components/utilities/useContent";
import styles from "./ProjectHighlight.module.css";

const content = {
  "pt-BR": { label: "Fragmento" },
  en: { label: "Highlight" },
};

const ProjectHighlight = ({ children, heading, label }) => {
  const t = useContent(content);

  return (
    <Section>
      <Content>
        <Flex direction="column" className={styles.header}>
          <Text preset="overline" className={styles.label}>
            {label ?? t.label}
          </Text>
          {heading && (
            <Text preset="largeHeading" className={styles.heading}>
              {heading}
            </Text>
          )}
        </Flex>
      </Content>
      {children}
    </Section>
  );
};

export default ProjectHighlight;
