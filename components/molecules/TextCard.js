import Card from "components/atoms/Card";
import Text from "components/atoms/Text";
import Box from "components/atoms/Box";
import Icon from "components/atoms/Icon";
import React from "react";
import styles from "./TextCard.module.css";

const TextCard = ({ text, iconName = "ArrowRightUp" }) => (
  <Card pressable={false}>
    <Card.Content justify="start" direction="column" align="start">
      <Box className={styles.iconWrapper}>
        <Icon name={iconName} className={styles.icon}></Icon>
      </Box>
      <Text preset="subHeading" className={styles.text}>
        {text}
      </Text>
    </Card.Content>
  </Card>
);

export default TextCard;
