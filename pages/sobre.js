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
              Sou Eduardo Fernandes, um designer que faz a ponte entre o gerenciamento e o código do produto. Tendo produzido para{" "}
              <Link href="https://idec.org.br/">IDEC</Link>,{" "}
              <Link href="https://shoppinguberaba.com.br/">Shopping Uberaba</Link> &{" "}
              <Link href="https://oneblinc.com/ ">OneBlinc</Link>.
              <br />
            </Text>
          </Box>
          <Box>
            <Text preset="subHeading">Um pouco sobre mim</Text>
            <Grid columns={2} gapSize="large">
              <Text css={{ color: "$gray300" }}>
              50% exatas, 50% humanas, 100% thinker. Tenho 20 anos, sou estudante de Análise e Desenvolvimento de Sistemas no Instituto Federal do Triângulo Mineiro.
              <br />
              <br />
              Sou Coordenador de UX/UI (Atuando na coordenação de projetos, research e end-to-end em desenvolvimento web) na Agência Six em Uberaba, Minas Gerais.{" "}
              </Text>
              <Text css={{ color: "$gray300" }}>
              Além de interfaces, também sou fascinado por estratégia, estatística, inteligência artificial, blockchain e música underground. Na realidade, tudo que é non-sense ou aleatório me apetece.
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
              Tentei fazer legendas legais pra essas fotos 👇
            </Text>
            <Flex gap align="start">
              <Flex direction="column" gap>
              <AssetCard caption="Foto do ensino médio, mas eu carrego até hoje devio a escassez de fotos melhores.">
                  <Image
                    src="/images/06.jpg"
                    alt="Foto do Edu olhando pra camera, cheio de efeitos visuais pra deixar ele mais bonito."
                    width={960}
                    height={1280}
                  />
                </AssetCard>
                <AssetCard caption="Repare bem no desespero do patinho.">
                  <Image
                    src="/images/01.jpg"
                    alt="Nessa foto o Edu tá numa pizzaria sentado, em sua frente tem um drink que é uma banheira alcoolica, com um patinho em cima."
                    width={900}
                    height={1600}
                  />
                </AssetCard>

              </Flex>
              <Flex direction="column" gap>
                <AssetCard caption="Você também concorda que o milho tinha que ser o troféu de primeiro colocado?">
                  <Image
                    src="/images/02.jpg"
                    alt="Segurando o traféu de segundo colocado no hackaton realizado pela Grão Direto."
                    width={1104}
                    height={1396}
                  />
                </AssetCard>
                <AssetCard caption="Acredite se quiser, mas eu namoro.">
                  <Image
                    src="/images/03.jpg"
                    alt="Foto do Edu com a namorada (eu amo ela!)"
                    width={1158}
                    height={1544}
                  />
                </AssetCard>

              </Flex>
            </Flex>
          </Section>
          <Section>
            <Box css={{ margin: "0 auto", textAlign: "center" }}>
              <Text preset="largeHeading">
                Vamos continuar essa conversa?
              </Text>
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
