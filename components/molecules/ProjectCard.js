import Image from "next/image";
import Card from "components/atoms/Card";
import Icon from "components/atoms/Icon";
import Box from "components/atoms/Box";
import Text from "components/atoms/Text";
import LinkTo from "components/utilities/LinkTo";
import Flex from "components/atoms/Flex";
import cx from "components/utilities/cx";
import styles from "./ProjectCard.module.css";

const ContentIcon = () => (
  <Card.Content className={styles.contentIcon}>
    <Box>
      <Box
        className={styles.iconWrapper}
        variants={{
          default: { opacity: 0, scale: 0.2 },
          hover: { opacity: 1, scale: 1 },
        }}
      >
        <Icon name="ArrowRightUp" className={styles.icon}></Icon>
      </Box>
    </Box>
  </Card.Content>
);

const ProjectCard = ({
  image,
  imageAlt,
  title,
  description,
  dates,
  role,
  link,
  layoutId,
  fullWidthImage = true,
  className,
  openLinkInNewTab = true,
}) => (
  <Card
    direction="column"
    layoutId={layoutId}
    className={cx(styles.card, className)}
    pressable
  >
    <LinkTo href={link} displayContents newTab={openLinkInNewTab}>
      <ContentIcon />
      {fullWidthImage && (
        <Box className={styles.image}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
            placeholder="blur"
          />
        </Box>
      )}
      <Card.Content>
        <Flex direction="column" justify="between">
          {!fullWidthImage && <Box>{image}</Box>}
          <Box className={styles.info}>
            <Box>
              <Text preset="heading">{title}</Text>
            </Box>
            {description && (
              <Text preset="body" className={styles.description}>
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
