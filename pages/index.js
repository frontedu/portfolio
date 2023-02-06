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

import image1 from "../public/projects/six/f38.png";
import image3 from "../public/projects/falteringwaver/grid_0.jpg";
import image4 from "../public/projects/animalsystem/f37.png";

export default function Home() {
  return (
    <Page description="Eddu desenvolve produtos digitais que potencializam a experiência humana. Através de métodos de UX, research, design visual & interação - ele constrói interfaces de software para a interação humana.">
      <Landing>
        <Content>
          <Box>
            <Text preset="xLargeHeading" css={{ maxWidth: "28ch" }}>
              Eddu desenvolve produtos digitais que potencializam a experiência
              humana.
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
              description="Conceituando marcas através do marketing integrado."
              dates="2021-2023"
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
                title="O Rei do Grão"
                dates="2022"
                role="UX/UI Designer"
                link="/projetos/grain"
                image={
                  <Image
                    src="/projects/grain/grain.png"
                    alt="Logo da Grain Games"
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
                    src="/projects/xae/xae.png"
                    alt="Logo da X AE A-12"
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
              link="https://www.instagram.com/falteringwaver/"
              imageAlt="Um mergulho na geração de arte baseado em inteligência artificial."
              image={image3}
            />
            <ProjectCard
              title="Animal System"
              description="Projeto de software sendo realizado na disciplina de extensão pela IFTM."
              dates="2020-2023"
              link="https://animal-system.vercel.app/"
              imageAlt="Projeto de software realizado na disciplina de extensão pela IFTM."
              image={image4}
            />
          </Grid>
        </Content>
      </Section>
    </Page>
  );
}
