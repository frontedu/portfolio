import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Text from "components/atoms/Text";
import LinkTo from "components/utilities/LinkTo";
import { useRouter } from "next/router";
import cx from "components/utilities/cx";
import styles from "./Menu.module.css";
import { LayoutGroup } from "framer-motion";
import React from "react";
import useContent from "components/utilities/useContent";

const content = {
  "pt-BR": { work: "Projetos", about: "Sobre mim" },
  en: { work: "Work", about: "About" },
};

const MenuItem = ({ href = "", path, label, children, icon, layoutId }) => {
  const active = path === href;

  return (
    <LinkTo href={href}>
      <Box
        className={cx(styles.item, active ? styles.active : styles.inactive)}
        key={label}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Text preset="body" className={styles.label} key="text">
          {label}
        </Text>
        {active && (
          <Box
            className={styles.highlight}
            layout
            layoutId="highlight"
            key="highlight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </Box>
    </LinkTo>
  );
};

const Menu = () => {
  const router = useRouter();
  const t = useContent(content);
  const path = router.pathname;

  const isProject = path.includes("project");

  return (
    <Flex layout className={styles.menu}>
      <LayoutGroup>
        <MenuItem
          href="/"
          path={path}
          label={t.work}
          layoutId="work"
          icon={isProject}
        />
        <MenuItem href="/sobre" path={path} label={t.about} layoutId="about" />
      </LayoutGroup>
    </Flex>
  );
};

export default Menu;
