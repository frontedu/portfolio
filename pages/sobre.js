import Content from "components/atoms/Content";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import Flex from "components/atoms/Flex";
import Page from "components/templates/Page";
import Image from "next/image";
import Box from "components/atoms/Box";
import LinkTo from "components/utilities/LinkTo";
import { styled } from "stitches.config";
import Landing from "components/molecules/Landing";
import Grid from "components/atoms/Grid";
import AssetCard from "components/molecules/AssetCard";
import CopyToClipboardButton from "components/molecules/CopyToClipboardButton";

import foto1 from "../public/images/06.jpg";
import foto2 from "../public/images/02.jpg";
import foto3 from "../public/images/01.jpg";
import foto4 from "../public/images/03.jpg";

const LinkText = styled("span", {
  color: "$accent",
});

const Link = ({ href, children }) => (
  <LinkTo href={href} displayContents>
    <LinkText>{children}</LinkText>
  </LinkTo>
);

export default function About() {
  return (
    <Page
      title="Sobre mim"
      description="Eduardo Fernandes é constante nas áreas de design de produto e desenvolvimento front-end."
    >
      <Landing>
        <Content>
          <Box css={{ marginBottom: "$space500" }}>
            <Text
              preset="xLargeHeading"
              css={{ maxWidth: "30ch", width: "100%" }}
            >
              Sou Eduardo Fernandes, um designer que faz a ponte do
              gerenciamento até o código do produto. Tendo produzido para{" "}
              <Link href="https://idec.org.br/">IDEC</Link>,{" "}
              <Link href="https://shoppinguberaba.com.br/">
                Shopping Uberaba
              </Link>{" "}
              & <Link href="https://oneblinc.com/ ">OneBlinc</Link>.
              <br />
            </Text>
          </Box>
          <Box>
            <Text preset="subHeading">Um pouco sobre mim</Text>
            <Grid columns={2} gapSize="large">
              <Text css={{ color: "$gray300" }}>
                50% exatas, 50% humanas, 100% thinker. Tenho 21 anos, sou
                estudante de Análise e Desenvolvimento de Sistemas no Instituto
                Federal do Triângulo Mineiro.
                <br />
                <br />
                Sou Coordenador de UX/UI (Atuando na coordenação de projetos, research e desenvolvimento web end-to-end) na Agência Six em Uberaba, Minas Gerais.{" "}
              </Text>
              <Text css={{ color: "$gray300" }}>
                Além de interfaces, também sou fascinado por estratégia, inteligência artificial, blockchain, biologia e música
                underground.
                <br />
                <br />
                Na realidade, tudo que é de mais nonsense e aleatório nesse mundo me apetece.
                <br />
                <br />
                <br />
              </Text>
            </Grid>
          </Box>
          <Section>
            <Text
              preset="overline"
              css={{ color: "$gray300", paddingBottom: "$space400" }}
            >
            Eu sou assim na vida real 👇
            </Text>
            <Flex gap align="start">
              <Flex direction="column" gap>
                <AssetCard caption="Essa foto é do ensino médio, mas eu carrego até hoje devio a escassez de fotos melhores.">
                  <Image
                    src={foto1}
                    alt="Foto do Edu olhando pra camera, cheio de efeitos visuais pra deixar ele mais bonito."
                    width={960}
                    height={1280}
                    placeholder="blur"
                    eager
                  />
                </AssetCard>
              </Flex>
              <Flex direction="column" gap>
                <AssetCard caption="Repare bem no desespero desse patinho.">
                  <Image
                    src={foto3}
                    alt="Nessa foto o Edu tá numa pizzaria sentado, em sua frente tem um drink que é uma banheira alcoolica, com um patinho em cima."
                    width={900}
                    height={1600}
                    placeholder="blur"
                  />
                </AssetCard>

              </Flex>
            </Flex>
          </Section>
          <Section>
            <Box css={{ margin: "0 auto", textAlign: "center" }}>
              <Text preset="largeHeading">Vamos continuar essa conversa?</Text>
              <Box css={{ marginTop: "$space400" }}>
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
