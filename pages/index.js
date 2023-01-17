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

import image1 from "../public/projects/carefull/f38.png";
import image3 from "../public/projects/2016-portfolio/grid_0.jpg";
import image4 from "../public/projects/2001-space/f37.png";

export default function Home() {
  return (
    <Page description="Eddu desenvolve produtos digitais que potencializam a experência humana. Através de métodos de UX, research, design visual & interação - ele constrói interfaces de software para a interação humana.">
      <Landing>
        <Content>
          <Box>
            <Text preset="xLargeHeading" css={{ maxWidth: "28ch" }}>
              Eddu desenvolve produtos digitais que potencializam a experência humana.
            </Text>
          </Box>
        </Content>
      </Landing>
      <Section css={{ paddingTop: "$space400" }}>
        <Content>
          <Text
            preset="overline"
            css={{ color: "$gray300", marginBottom: "$space300" }}
          >
            Principais projetos
          </Text>
          <Grid columns={2}>
            <FeaturedProjectCard
              title="Agência Six"
              description="Empoderando marcas através do marketing integrado."
              dates="2020-2023"
              role="Coordenador de UX/UI"
              link="https://agenciasix.com.br/"
              image={
                <Image
                  src={image1}
                  alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
                  layout="responsive"
                  priority
                  placeholder="blur"
                />
              }
            />
            <Flex direction="column" jus gap>
              <FeaturedProjectCard
                title="Grain Games"
                dates="2022"
                role="UX/UI Designer"
                link="/"
                image={
                  <Image
                    src="/projects/wayfair/grain.png"
                    alt="Logo for Wayfair"
                    width={48}
                    height={48}
                    layout="intrinsic"
                    priority
                  />
                }
              />
              <FeaturedProjectCard
                title="X Æ A-12"
                dates="2020-2021"
                role="UX Developer"
                link="https://meiajuda.vercel.app/"
                image={
                  <Image
                    src="/projects/youtube/xae.png"
                    alt="Logo for YouTube"
                    width={48}
                    height={48}
                    layout="intrinsic"
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
          <Text
            preset="overline"
            css={{ color: "$gray300", marginBottom: "$space300" }}
          >
            Projetos paralelos
          </Text>
          <Grid columns={2}>
            <ProjectCard
              title="Faltering Waver"
              description="Um mergulho na geração de arte baseado em inteligência artificial."
              dates="2022"
              link="https://falteringwaver.com"
              imageAlt="Man sitting on a stool with the text 'Aaron.' on top of the image"
              image={image3}
            />
            <ProjectCard
              title="Animal System"
              description="Projeto de software realizados na disciplina de extensão pela IFTM."
              dates="2020-2023"
              link="https://animal-system.vercel.app/"
              imageAlt="A virtual reality scene of the inside of a futuristic centrifuge."
              image={image4}
            />

          </Grid>
        </Content>
      </Section>
    </Page>
  );
}
