import Grid from "components/atoms/Grid.js";
import React from "react";
import Text from "components/atoms/Text";
import Content from "components/atoms/Content";
import Flex from "components/atoms/Flex";
import styles from "./List.module.css";

const List = ({ children }) => (
  <Content>
    <Grid columns={2} gapSize="large">
      {children}
    </Grid>
  </Content>
);

const ListItem = ({ title, text }) => (
  <Flex direction="column">
    <Text preset="heading">{title}</Text>
    <Text className={styles.text}>{text}</Text>
  </Flex>
);

List.Item = ListItem;

export default List;
