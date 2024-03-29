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

import foto2 from "../public/images/07.jpg";
import foto3 from "../public/images/09.jpg";

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
              Sou Eduardo Fernandes, um designer que faz a ponte da concepção até o código do produto. Tendo produzido para{" "}
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
                50% exatas, 50% humanas, 100% soft thinker. Tenho 22 anos, graduado em Análise e Desenvolvimento de Sistemas pelo Instituto
                Federal do Triângulo Mineiro.
                <br />
                <br />
                Ocupo a posição de Head de Marketing na SULTS em Uberaba, Minas Gerais.{" "}
              </Text>
              <Text css={{ color: "$gray300" }}>
                Além de experiências encantadoras, também sou fascinado por estratégia, inteligência artificial e música underground.
                <br />
                <br />
                Na realidade, tudo que envolva tecnologia no mundo de negócios me fascina.
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
            Retratos gerados por IA
            </Text>
            <Flex gap align="start">
              <Flex direction="column" gap>
              <AssetCard caption="Capturada durante um encontro da Agência SIX em 2022. A releitura em IA foi inspirada pela arte de Satoshi Kon.">
                  <Image
                    src={foto2}
                    alt="Inspirado por Katsuhiro Otome e Satoshi Kon."
                    width={1024}
                    height={1024}
                    placeholder="blur"
                    eager
                  />
                </AssetCard>
              </Flex>
              <Flex direction="column" gap>
              <AssetCard caption="Infância, 2009. A releitura em IA foi inspirada na arte de Laurie Greasley.">
                  <Image
                    src={foto3}
                    alt="Inspirado por Laurie Greasley e Satoshi Kon."
                    width={1024}
                    height={1024}
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
