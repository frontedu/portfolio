import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Content from "components/atoms/Content";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import Image from "next/image";
import FeaturedProjectCard from "components/molecules/FeaturedProjectCard";
import ProjectCard from "components/molecules/ProjectCard";
import Page from "components/templates/Page";
import Grid from "components/atoms/Grid";
import Landing from "components/molecules/Landing";
import image1 from "../public/projects/sults/sults.png";
import image3 from "../public/projects/falteringwaver/fw.jpg";
import image5 from "../public/projects/liquidcomposer/lc.png";
import useContent from "components/utilities/useContent";
import styles from "styles/Home.module.css";

const content = {
  "pt-BR": {
    description:
      "Eddu desenvolve produtos digitais que potencializam a experiência humana. Através de métodos de UX, research, design visual & interação - ele constrói interfaces de software para a interação humana.",
    title:
      "Eddu desenvolve produtos digitais que potencializam a experiência humana.",
    featured: "Principais projetos",
    side: "Projetos paralelos",
    sults: {
      description:
        "Plataforma N° 1 para gestão de redes de franquias e negócios.",
      dates: "2023 - atual",
      role: "Head de Desenvolvimento",
      alt: "Logo da SULTS",
    },
    six: { role: "Coordenador de UX", alt: "Logo da Agência Six" },
    grain: { role: "DESIGNER DE PRODUTO", alt: "Logo da Grain Games" },
    liquidComposer: {
      description:
        "Uma recriação web do Icon Composer da Apple para criar ícones em Liquid Glass.",
      alt: "Ícone do Liquid Composer em Liquid Glass.",
    },
    falteringWaver: {
      description:
        "Um estudo de geração de arte baseado em inteligência artificial.",
      alt: "Um estudo na geração de arte baseado em inteligência artificial.",
    },
  },
  en: {
    description:
      "Eddu builds digital products that elevate the human experience. Through UX methods, research, visual & interaction design, he crafts software interfaces for people.",
    title: "Eddu builds digital products that elevate the human experience.",
    featured: "Featured work",
    side: "Side projects",
    sults: {
      description:
        "The #1 platform for managing franchise networks and businesses.",
      dates: "2023 - present",
      role: "Head of Development",
      alt: "SULTS logo",
    },
    six: { role: "UX Coordinator", alt: "Agência Six logo" },
    grain: { role: "Product Designer", alt: "Grain Games logo" },
    liquidComposer: {
      description:
        "A web recreation of Apple's Icon Composer for designing Liquid Glass icons.",
      alt: "Liquid Composer icon in Liquid Glass.",
    },
    falteringWaver: {
      description: "A study in AI-driven art generation.",
      alt: "A study in AI-driven art generation.",
    },
  },
};

export default function Home() {
  const t = useContent(content);

  return (
    <Page description={t.description}>
      <Landing>
        <Content>
          <Box>
            <Text preset="xLargeHeading" className={styles.title}>
              {t.title}
            </Text>
          </Box>
        </Content>
      </Landing>
      <Section className={styles.projects}>
        <Content>
          <Text preset="overline" className={styles.overline}>
            {t.featured}
          </Text>
          <Grid columns={2}>
            <FeaturedProjectCard
              title="SULTS"
              description={t.sults.description}
              dates={t.sults.dates}
              role={t.sults.role}
              link="https://sults.com.br"
              openLinkInNewTab
              image={
                <Image
                  src={image1}
                  alt={t.sults.alt}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  priority
                  placeholder="blur"
                />
              }
            />
            <Flex direction="column" gap>
              <FeaturedProjectCard
                title="Agência SIX"
                dates="2021 - 2023"
                role={t.six.role}
                link="https://agenciasix.com.br/"
                openLinkInNewTab
                image={
                  <Image
                    src="/projects/six/f39.png"
                    alt={t.six.alt}
                    width={67}
                    height={32}
                    style={{ maxWidth: "100%", height: "auto" }}
                    priority
                  />
                }
              />
              <FeaturedProjectCard
                title="Grain Games"
                dates="2022"
                role={t.grain.role}
                link="/projetos/grao"
                image={
                  <Image
                    src="/projects/grain/grain.png"
                    alt={t.grain.alt}
                    width={48}
                    height={48}
                    style={{ maxWidth: "100%", height: "auto" }}
                    priority
                  />
                }
              />
            </Flex>
          </Grid>
        </Content>
      </Section>
      <Section>
        <Content>
          <Text preset="overline" className={styles.overline}>
            {t.side}
          </Text>
          <Grid columns={2}>
            <ProjectCard
              title="Liquid Composer"
              description={t.liquidComposer.description}
              dates="2026"
              link="https://liquid-composer.vercel.app"
              imageAlt={t.liquidComposer.alt}
              image={image5}
            />
            <ProjectCard
              title="Faltering Waver"
              description={t.falteringWaver.description}
              dates="2022"
              link="https://www.instagram.com/falteringwaver/"
              imageAlt={t.falteringWaver.alt}
              image={image3}
            />
          </Grid>
        </Content>
      </Section>
    </Page>
  );
}
