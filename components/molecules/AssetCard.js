import Flex from "components/atoms/Flex";
import Box from "components/atoms/Box";
import Text from "components/atoms/Text";
import Card from "components/atoms/Card";
import Icon from "components/atoms/Icon";
import { useState } from "react";
import { LayoutGroup } from "framer-motion";
import Image from "next/image";
import styles from "./AssetCard.module.css";

const Caption = ({ open, text }) => {
  const parentVariants = {
    closed: {
      borderRadius: 32,
      transition: {
        borderRadius: { delay: 0.2, type: "spring", stiffness: 100 },
      },
    },
    open: {
      borderRadius: 8,
    },
  };

  const textVariants = {
    closed: {
      x: -24,
      opacity: 0,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        type: "spring",
        // stiffness: 300,
        bounce: 0.25,
      },
    },
  };

  const iconVariants = {
    closed: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
    open: {
      scale: 0.1,
      opacity: 0,
    },
  };

  return (
    <LayoutGroup>
      <Box
        layout
        variants={parentVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
        className={styles.caption}
      >
        {!open && (
          <Box
            key="icon"
            layout
            variants={iconVariants}
            initial="open"
            animate="closed"
            exit="open"
          >
            <Icon name="Info" className={styles.icon} />
          </Box>
        )}
        {open && (
          <Box
            key="text"
            layout
            variants={textVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={styles.captionText}
          >
            <Text>{text}</Text>
          </Box>
        )}
      </Box>
    </LayoutGroup>
  );
};

const AssetCard = ({ columns = 2, children, caption, image, imageAlt }) => {
  const [hover, setHover] = useState(false);

  const toggleCaption = () => {
    setHover(!hover);
  };

  return (
    <Flex
      className={styles.wrapper}
      style={{ gridColumn: `span ${columns}` }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onClick={() => toggleCaption()}
    >
      <Card pressable={false}>
        <Flex align="center" justify="center">
          {image && (
            <Image
              src={image}
              alt={imageAlt}
              placeholder="blur"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
          {children}
        </Flex>
      </Card>
      {caption && <Caption text={caption} open={hover} />}
    </Flex>
  );
};

export default AssetCard;
