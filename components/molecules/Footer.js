import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Content from "components/atoms/Content";
import CopyToClipboardButton from "components/molecules/CopyToClipboardButton";
import Button from "components/atoms/Button";
import useContent from "components/utilities/useContent";
import { useRouter } from "next/router";
import styles from "./Footer.module.css";

const content = {
  "pt-BR": {
    openSource: "Este site é de código aberto",
    language: "Idioma",
  },
  en: {
    openSource: "This site is open source",
    language: "Language",
  },
};

const locales = [
  { code: "pt-BR", label: "PT" },
  { code: "en", label: "EN" },
];

const rememberLocale = (code) => {
  document.cookie = `NEXT_LOCALE=${code}; max-age=31536000; path=/; samesite=lax`;
};

export const Footer = () => {
  const { asPath, locale } = useRouter();
  const t = useContent(content);

  return (
    <Box className={styles.footer}>
      <Content>
        <Flex align="stretch" justify="start" gap>
          <Box>
            <CopyToClipboardButton value="eduardo@eddu.dev" variant="ghost">
              eduardo@eddu.dev
            </CopyToClipboardButton>
          </Box>

          <Box>
            <Button
              variant="ghost"
              href="https://www.linkedin.com/in/frontedu/"
            >
              LinkedIn
            </Button>
          </Box>
          <Box>
            <Button variant="ghost" href="https://github.com/frontedu">
              Github
            </Button>
          </Box>
          <Flex align="center" justify="end" gap>
            <Button
              variant="ghost"
              iconName="Github"
              href="https://github.com/frontedu/portfolio"
            >
              {t.openSource}
            </Button>
            <nav className={styles.locales} aria-label={t.language}>
              {locales.map(({ code, label }) => (
                <Button
                  key={code}
                  variant={code === locale ? undefined : "ghost"}
                  href={asPath}
                  locale={code}
                  lang={code}
                  aria-current={code === locale ? "true" : undefined}
                  onClick={() => rememberLocale(code)}
                >
                  {label}
                </Button>
              ))}
            </nav>
          </Flex>
        </Flex>
      </Content>
    </Box>
  );
};
