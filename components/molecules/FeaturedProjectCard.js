import Card from "components/atoms/Card";
import Icon from "components/atoms/Icon";
import Box from "components/atoms/Box";
import Text from "components/atoms/Text";
import LinkTo from "components/utilities/LinkTo";
import Flex from "components/atoms/Flex";
import cx from "components/utilities/cx";
import useContent from "components/utilities/useContent";
import styles from "./FeaturedProjectCard.module.css";

const content = {
  "pt-BR": { explore: "Explorar" },
  en: { explore: "Explore" },
};

const ContentIcon = () => {
  const t = useContent(content);

  return (
    <Card.Content className={styles.contentIcon}>
      <Box>
        <Flex
          align="center"
          className={styles.iconWrapper}
          variants={{
            default: { opacity: 0, scale: 0.2 },
            hover: { opacity: 1, scale: 1 },
          }}
        >
          <Icon name="NewspaperClipping" className={styles.icon}></Icon>
          <Text preset="body" className={styles.iconLabel}>
            {t.explore}
          </Text>
        </Flex>
      </Box>
    </Card.Content>
  );
};

const ProjectCard = ({
  image,
  title,
  description,
  dates,
  role,
  link,
  layoutId,
  fullWidthImage = false,
  className,
  openLinkInNewTab = false,
}) => (
  <Card
    direction="column"
    layoutId={layoutId}
    className={cx(styles.card, className)}
    pressable
  >
    <LinkTo href={link} displayContents newTab={openLinkInNewTab}>
      <ContentIcon />
      {fullWidthImage && <Box className={styles.image}>{image}</Box>}
      <Card.Content>
        <Flex direction="column" justify="between">
          {!fullWidthImage && <Box>{image}</Box>}
          <Box className={styles.info}>
            <Box>
              <Text preset="largeHeading">{title}</Text>
            </Box>
            {description && (
              <Text preset="subHeading" className={styles.description}>
                {description}
              </Text>
            )}
            <Box>
              <Text preset="overline" className={styles.meta}>
                {dates} {role && `· ${role}`}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Card.Content>
    </LinkTo>
  </Card>
);

export default ProjectCard;
