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
import image4 from "../public/projects/animalsystem/f37.png";
import image5 from "../public/projects/fidex/fdx.jpg";

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
              title="SULTS"
              description="Software #1 para franquias e filiais."
              dates="2023"
              role="UX Lead"
              link="https://sults.com.br"
              image={
                <Image
                  src={image1}
                  alt="Logo da SULTS"
                  layout="responsive"
                  priority
                  placeholder="blur"
                />
              }
            />
            <Flex direction="column" jus gap>
            <FeaturedProjectCard
                title="Agência Six"
                dates="2021-2023"
                role="Coordenador de UX"
                link="https://agenciasix.com.br/"
                image={
                  <Image
                    src="/projects/six/f39.png"
                    alt="Logo da Agência Six"
                    width={67}
                    height={32}
                    layout="intrinsic"
                    priority
                  />
                }
              />
              <FeaturedProjectCard
                title="O Rei do Grão"
                dates="2022"
                role="UX/UI Designer"
                link="/projetos/grao"
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
              title="Fidex"
              description="Projeto de software realizado na disciplina de DAW1 pela IFTM."
              dates="2023"
              link="https://fidex.up.railway.app/"
              imageAlt="Projeto de software realizado na disciplina de DAW1 pela IFTM."
              image={image5}
            />
            <ProjectCard
              title="Faltering Waver"
              description="Um mergulho na geração de arte baseado em inteligência artificial."
              dates="2022"
              link="https://www.instagram.com/falteringwaver/"
              imageAlt="Um mergulho na geração de arte baseado em IA."
              image={image3}
            />
            <ProjectCard
              title="Animal System"
              description="Projeto de software realizado na disciplina de extensão pela IFTM."
              dates="2021-2022"
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
