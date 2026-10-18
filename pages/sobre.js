import Content from "components/atoms/Content";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import Flex from "components/atoms/Flex";
import Page from "components/templates/Page";
import Image from "next/image";
import Box from "components/atoms/Box";
import LinkTo from "components/utilities/LinkTo";
import useContent from "components/utilities/useContent";
import Landing from "components/molecules/Landing";
import Grid from "components/atoms/Grid";
import AssetCard from "components/molecules/AssetCard";
import CopyToClipboardButton from "components/molecules/CopyToClipboardButton";
import List from "components/organisms/List";

import foto2 from "../public/images/07.jpg";
import foto3 from "../public/images/09.jpg";
import fotoEvento from "../public/images/evento.jpg";
import fotoSults from "../public/images/sults.jpg";
import styles from "styles/Sobre.module.css";

const Link = ({ href, children }) => (
  <LinkTo href={href} displayContents>
    <span className={styles.linkText}>{children}</span>
  </LinkTo>
);

const clients = (
  <>
    <Link href="https://sults.com.br">SULTS</Link>,{" "}
    <Link href="https://idec.org.br/">IDEC</Link> &{" "}
    <Link href="https://oneblinc.com/ ">OneBlinc</Link>
  </>
);

const reiDoGrao = <Link href="/projetos/grao">Rei do Grão</Link>;

const content = {
  "pt-BR": {
    title: "Sobre mim",
    description:
      "Eduardo Fernandes é constante nas áreas de design de produto e desenvolvimento front-end.",
    intro: (
      <>
        Sou Eduardo Fernandes, um construtor de produtos digitais que faz a
        ponte da concepção até o código. Tendo produzido para {clients}.
      </>
    ),
    aboutHeading: "Um pouco sobre mim",
    aboutLeft: (
      <>
        50% exatas, 50% humanas, 100% soft thinker. Tenho 24 anos, graduado em
        Análise e Desenvolvimento de Sistemas pelo Instituto Federal do
        Triângulo Mineiro e com MBA em Marketing pela ESPM.
        <br />
        <br />
        Ocupo a posição de Head de Desenvolvimento na SULTS em Uberaba, Minas
        Gerais.
      </>
    ),
    aboutRight: (
      <>
        Além de experiências encantadoras, também sou fascinado por estratégia,
        inteligência artificial e música underground.
        <br />
        <br />
        Na realidade, tudo que envolva tecnologia no mundo de negócios me
        fascina.
      </>
    ),
    educationHeading: "Formação",
    education: [
      { title: "ESPM", text: "MBA em Marketing · 2024 - 2026" },
      {
        title: "University of Pennsylvania",
        text: "Building High-Performing Teams · 2024",
      },
      {
        title: "Instituto Federal do Triângulo Mineiro",
        text: "Tecnologia em Análise e Desenvolvimento de Sistemas · 2021 - 2024",
      },
      {
        title: "HSE University",
        text: "Especialização em Mobile Interaction Design · 2020 - 2021",
      },
    ],
    awardsHeading: "Prêmios",
    awards: [
      { title: "HACKAGRÃO", text: <>{reiDoGrao} · Grão Direto · 2022</> },
      {
        title: "HackaForLife",
        text: "Saúde e economia na pandemia · IFTM · 2020",
      },
    ],
    volunteeringHeading: "Voluntariado",
    volunteering: [
      { title: "Musixmatch", text: "Curador · 2020 - 2023" },
      { title: "Genius", text: "Transcritor · 2019 - 2021" },
    ],
    portraitsHeading: "Retratos",
    photos: [
      { alt: "Eduardo de blazer azul conversando em um evento." },
      { alt: "Eduardo de moletom da SULTS em um evento." },
    ],
    portraits: [
      {
        caption:
          "Capturada durante um encontro da Agência SIX em 2022. A releitura em IA foi inspirada pela arte de Satoshi Kon.",
        alt: "Inspirado por Katsuhiro Otome e Satoshi Kon.",
      },
      {
        caption:
          "Infância, 2009. A releitura em IA foi inspirada na arte de Laurie Greasley.",
        alt: "Inspirado por Laurie Greasley e Satoshi Kon.",
      },
    ],
    contact: "Vamos continuar essa conversa?",
  },
  en: {
    title: "About me",
    description:
      "Eduardo Fernandes works across product design and front-end development.",
    intro: (
      <>
        I&apos;m Eduardo Fernandes, a digital product builder who bridges the
        gap from concept to code. I&apos;ve built for {clients}.
      </>
    ),
    aboutHeading: "A bit about me",
    aboutLeft: (
      <>
        50% STEM, 50% humanities, 100% soft thinker. I&apos;m 24, with a degree
        in Systems Analysis and Development from the Federal Institute of
        Triângulo Mineiro and an MBA in Marketing from ESPM.
        <br />
        <br />
        I&apos;m currently Head of Development at SULTS in Uberaba, Minas
        Gerais, Brazil.
      </>
    ),
    aboutRight: (
      <>
        Beyond delightful experiences, I&apos;m fascinated by strategy,
        artificial intelligence and underground music.
        <br />
        <br />
        Really, anything where technology meets business fascinates me.
      </>
    ),
    educationHeading: "Education",
    education: [
      { title: "ESPM", text: "MBA in Marketing · 2024 - 2026" },
      {
        title: "University of Pennsylvania",
        text: "Building High-Performing Teams · 2024",
      },
      {
        title: "Instituto Federal do Triângulo Mineiro",
        text: "Bachelor of Technology in Systems Analysis and Development · 2021 - 2024",
      },
      {
        title: "HSE University",
        text: "Specialization in Mobile Interaction Design · 2020 - 2021",
      },
    ],
    awardsHeading: "Awards",
    awards: [
      { title: "HACKAGRÃO", text: <>{reiDoGrao} · Grão Direto · 2022</> },
      {
        title: "HackaForLife",
        text: "Health and economy during the pandemic · IFTM · 2020",
      },
    ],
    volunteeringHeading: "Volunteering",
    volunteering: [
      { title: "Musixmatch", text: "Curator · 2020 - 2023" },
      { title: "Genius", text: "Transcriber · 2019 - 2021" },
    ],
    portraitsHeading: "Portraits",
    photos: [
      { alt: "Eduardo in a navy blazer talking at an event." },
      { alt: "Eduardo wearing a SULTS hoodie at an event." },
    ],
    portraits: [
      {
        caption:
          "Taken at an Agência SIX meetup in 2022. The AI reinterpretation was inspired by Satoshi Kon's art.",
        alt: "Inspired by Katsuhiro Otomo and Satoshi Kon.",
      },
      {
        caption:
          "Childhood, 2009. The AI reinterpretation was inspired by Laurie Greasley's art.",
        alt: "Inspired by Laurie Greasley and Satoshi Kon.",
      },
    ],
    contact: "Shall we keep the conversation going?",
  },
};

export default function About() {
  const t = useContent(content);

  return (
    <Page title={t.title} description={t.description}>
      <Landing>
        <Content>
          <Box className={styles.intro}>
            <Text preset="xLargeHeading" className={styles.title}>
              {t.intro}
              <br />
            </Text>
          </Box>
          <Box>
            <Text preset="subHeading">{t.aboutHeading}</Text>
            <Grid columns={2} gapSize="large">
              <Text className={styles.paragraph}>{t.aboutLeft}</Text>
              <Text className={styles.paragraph}>
                {t.aboutRight}
                <br />
                <br />
                <br />
              </Text>
            </Grid>
          </Box>
          <Section>
            <Text preset="overline" className={styles.overline}>
              {t.educationHeading}
            </Text>
            <Grid columns={2} gapSize="large">
              {t.education.map((item) => (
                <List.Item
                  key={item.title}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </Grid>
            <Box className={styles.subsection}>
              <Text preset="overline" className={styles.overline}>
                {t.awardsHeading}
              </Text>
              <Grid columns={2} gapSize="large">
                {t.awards.map((item) => (
                  <List.Item
                    key={item.title}
                    title={item.title}
                    text={item.text}
                  />
                ))}
              </Grid>
            </Box>
            <Box className={styles.subsection}>
              <Text preset="overline" className={styles.overline}>
                {t.volunteeringHeading}
              </Text>
              <Grid columns={2} gapSize="large">
                {t.volunteering.map((item) => (
                  <List.Item
                    key={item.title}
                    title={item.title}
                    text={item.text}
                  />
                ))}
              </Grid>
            </Box>
          </Section>
          <Section>
            <Text preset="overline" className={styles.overline}>
              {t.portraitsHeading}
            </Text>
            <Flex gap align="start">
              <Flex direction="column" gap>
                <AssetCard>
                  <Image
                    src={fotoEvento}
                    alt={t.photos[0].alt}
                    placeholder="blur"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </AssetCard>
                <AssetCard caption={t.portraits[0].caption}>
                  <Image
                    src={foto2}
                    alt={t.portraits[0].alt}
                    width={1024}
                    height={1024}
                    placeholder="blur"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </AssetCard>
              </Flex>
              <Flex direction="column" gap>
                <AssetCard caption={t.portraits[1].caption}>
                  <Image
                    src={foto3}
                    alt={t.portraits[1].alt}
                    width={1024}
                    height={1024}
                    placeholder="blur"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </AssetCard>
                <AssetCard>
                  <Image
                    src={fotoSults}
                    alt={t.photos[1].alt}
                    placeholder="blur"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </AssetCard>
              </Flex>
            </Flex>
          </Section>
          <Section>
            <Box className={styles.contact}>
              <Text preset="largeHeading">{t.contact}</Text>
              <Box className={styles.contactButton}>
                <CopyToClipboardButton value="eduardo@eddu.dev">
                  eduardo@eddu.dev
                </CopyToClipboardButton>
              </Box>
            </Box>
          </Section>
        </Content>
      </Landing>
    </Page>
  );
}
