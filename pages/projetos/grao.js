import Image from "next/image";
import Carousel from "components/molecules/Carousel";
import Page from "components/templates/Page";
import AssetCard from "components/molecules/AssetCard";
import ProjectHighlight from "components/organisms/ProjectHighlight";
import ProjectIntro from "components/organisms/ProjectIntro";
import Card from "components/atoms/Card";
import ConfidentialBanner from "components/molecules/ConfidentialBanner";
import React from "react";
import TextCard from "components/molecules/TextCard";
import PortfolioPresentationCard from "components/organisms/PortfolioPresentationCard";
import List from "../../components/organisms/List";
import useContent from "components/utilities/useContent";
import styles from "styles/Grao.module.css";

import image1 from "../../public/projects/grain/rei-do-grao.png";
import image2 from "../../public/projects/grain/rdg-marca.png";
import image3 from "../../public/projects/grain/gg-marca.png";
import image7 from "../../public/projects/grain/planejamento-grain.jpg";
import image10 from "../../public/projects/grain/planejamento-grain2.jpg";
import image11 from "../../public/projects/grain/game-screen1.png";
import image12 from "../../public/projects/grain/game-screen2.png";
import image13 from "../../public/projects/grain/podium.jpg";

const content = {
  "pt-BR": {
    description:
      "A experiência muda o jogo — uma luz para um grande problema em eventos.",
    imageAlt: "Logo do Rei do Grão: uma coroa branca sobre um círculo verde.",
    aboutLabel: "Sobre o projeto",
    about: [
      {
        title: "O cliente",
        text: "O HACKAGRÃO foi um evento de tecnologia, inovação e agricultura realizado pela empresa Grão Direto. Reunindo programadores, designers e outros profissionais e estudantes ligados ao desenvolvimento de software.",
      },
      {
        title: "O problema",
        text: "Entre os temas sugeridos, optamos pela gamificação em eventos corporativos, e criamos um jogo didático inspirado na bolsa de Chicago. Com ele, queremos chamar a atenção de novos usuários e ajudá-los a superar o medo de lidar com as flutuações de preços.",
      },
      {
        title: "As limitações",
        text: (
          <>
            Durante o desenvolvimento do MVP, nos deparamos com alguns desafios,
            como o tempo limitado de apenas 2 dias e a restrição de só poder
            contar com 30% da equipe no desenvolvimento devido ao sorteio do
            hackathon.
            <br />
            Além disso, o tema escolhido nos impunha limitações como uma área de
            aplicação restrita, o tempo de atenção do usuário e a necessidade de
            criar algo intuitivo e divertido.
          </>
        ),
      },
      {
        title: "Minha função",
        text: "Meu papel nesse projeto foi tornar realidade, através de uma interface amigável, tudo o que planejamos com capricho: uma plataforma de negociação de grãos que ensina via informações climáticas e políticas no momento da transação, reduzindo incertezas e chamando atenção para um produto de nosso cliente — o GD VIP, onde esses dados estratégicos são ofertados via um plano mensal.",
      },
    ],
    researchHeading:
      "Realizamos pesquisas para entender as dificuldades e atratividade do nosso produto.",
    research: [
      "Desvendamos as tendências dos eventos corporativos, compreendendo suas dinâmicas e como destacar-se entre os inúmeros estandes.",
      "Realizamos entrevistas com produtores rurais e mentores para avaliar interações com nosso produto e determinar as próximas melhorias.",
    ],
    brandHeading:
      "Desenvolvemos uma marca que comunica simplicidade, confiança e entusiasmo.",
    brand: [
      {
        caption:
          "O produto tem o nome inspirado pela novela O Rei do Gado, exibida entre 1996 e 1997 na Rede Globo.",
        imageAlt: "O Rei do Grão",
      },
      {
        caption:
          "Na escolha do nome para nossa equipe, optamos por Grain Games, refletindo a temática e a empresa por trás do evento.",
        imageAlt: "Grain Games",
      },
    ],
    wireframeHeading:
      "Onde um wireframe vale mais do que mil linhas de código.",
    wireframeTexts: [
      "Mapeamos fluxos e construímos wireframes para moldar nosso produto a realidade do jogador.",
      "Dados coletados na etapa de pesquisa foram considerados na busca da melhor experiência.",
    ],
    wireframeAssets: [
      {
        caption:
          "Construímos esboços iniciais após termos estabelecido nossa visão de produto, orientando escolhas e prioridades na entrega.",
        imageAlt: "Quadro contendo visão de produto e esboço inicial",
      },
      {
        caption:
          "Com o produto esboçado, montamos um wireframe de baixa fidelidade como guia para o desenvolvimento da UI no Figma, tornando o processo mais claro e eficiente.",
      },
    ],
    pitchHeading: "Do rascunho ao pitch, da ideia a conquista.",
    pitchTexts: [
      "Construímos um MVP sólido, entregando um produto atrativo, mostrando pontos fortes em relação aos demais concorrentes no hackaton pela proposta de valor.",
      "Na UI, incluímos referências a plataformas de trading já existentes. Representamos o mercado de grãos como um ativo no mercado financeiro.",
    ],
    pitchAssets: [
      {
        caption:
          "A negociação fictícia, através de dados estratégicos, ensina o jogador. Desafiando-o a se tornar o rei do grão, escolhendo os melhores momentos na venda de sua saca.",
        imageAlt: "Tela de negociação",
      },
      {
        caption:
          "Ao final, é exibido o ranking em tempo real dos melhores resultados, premiando e incentivando os que mais se destacam.",
        imageAlt: "Tela de resultado",
      },
      {
        caption:
          "A maior parte de nosso time não possuía outras experiências em hackatons, o que resultou em grandes desafios, superados pela colaboração e pró-atividade, sendo o resultado consequência de uma ótima sinergia. 🥈",
        imageAlt: "Foto do time, contendo 7 pessoas",
      },
    ],
  },
  en: {
    description:
      "Experience changes the game — shedding light on a big problem at events.",
    imageAlt: "Rei do Grão logo: a white crown on a green circle.",
    aboutLabel: "About the project",
    about: [
      {
        title: "The client",
        text: "HACKAGRÃO was a technology, innovation and agriculture event hosted by Grão Direto, bringing together developers, designers and other professionals and students involved in software development.",
      },
      {
        title: "The problem",
        text: "Among the suggested themes, we chose gamification at corporate events and built an educational game inspired by the Chicago Board of Trade. With it, we want to draw in new users and help them overcome the fear of dealing with price swings.",
      },
      {
        title: "The constraints",
        text: (
          <>
            Building the MVP came with a few challenges: a tight two-day window
            and, because of the hackathon draw, only 30% of the team available
            for development.
            <br />
            On top of that, the chosen theme had its own limits: a narrow field
            of application, short user attention spans and the need to build
            something intuitive and fun.
          </>
        ),
      },
      {
        title: "My role",
        text: "My role was to bring everything we carefully planned to life through a friendly interface: a grain trading platform that teaches with weather and political information at the moment of each trade, reducing uncertainty and drawing attention to one of our client's products — GD VIP, which offers this strategic data through a monthly plan.",
      },
    ],
    researchHeading:
      "We ran research to understand our product's pain points and appeal.",
    research: [
      "We uncovered corporate event trends, learning their dynamics and how to stand out among countless booths.",
      "We interviewed farmers and mentors to evaluate how they interacted with our product and define the next improvements.",
    ],
    brandHeading:
      "We built a brand that conveys simplicity, trust and excitement.",
    brand: [
      {
        caption:
          "The name Rei do Grão (King of Grain) is a nod to the Brazilian telenovela O Rei do Gado, aired on Rede Globo from 1996 to 1997.",
        imageAlt: "O Rei do Grão",
      },
      {
        caption:
          "For our team name, we went with Grain Games, reflecting the theme and the company behind the event.",
        imageAlt: "Grain Games",
      },
    ],
    wireframeHeading: "Where a wireframe is worth a thousand lines of code.",
    wireframeTexts: [
      "We mapped flows and built wireframes to shape our product around the player's reality.",
      "Data gathered during research guided our search for the best experience.",
    ],
    wireframeAssets: [
      {
        caption:
          "Once our product vision was set, we drew early sketches to guide decisions and delivery priorities.",
        imageAlt: "Board with the product vision and early sketch",
      },
      {
        caption:
          "With the product sketched out, we built a low-fidelity wireframe to guide the UI work in Figma, making the process clearer and more efficient.",
      },
    ],
    pitchHeading: "From sketch to pitch, from idea to win.",
    pitchTexts: [
      "We built a solid MVP, delivering an appealing product whose value proposition stood out against the other teams at the hackathon.",
      "In the UI, we referenced existing trading platforms, presenting the grain market as an asset in the financial market.",
    ],
    pitchAssets: [
      {
        caption:
          "Simulated trading, driven by strategic data, teaches the player — challenging them to become the king of grain by picking the best moments to sell their crop.",
        imageAlt: "Trading screen",
      },
      {
        caption:
          "At the end, a real-time leaderboard shows the top results, rewarding and motivating the best players.",
        imageAlt: "Results screen",
      },
      {
        caption:
          "Most of our team had never been to a hackathon before, which brought big challenges. We overcame them through collaboration and initiative, and the result came from great team synergy. 🥈",
        imageAlt: "Team photo with 7 people",
      },
    ],
  },
};

export default function Carefull() {
  const t = useContent(content);

  return (
    <Page title="Grain Games" description={t.description}>
      <ProjectIntro
        client="Grain Games"
        role="Product Design"
        year="2022"
        title={t.description}
      >
        <ConfidentialBanner className={styles.banner} />
        <Card pressable={false} align="center" justify="center">
          <Image
            src={image1}
            alt={t.imageAlt}
            placeholder="blur"
            width={552}
            height={552}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Card>
      </ProjectIntro>
      <ProjectHighlight label={t.aboutLabel}>
        <List>
          <List.Item title={t.about[0].title} text={t.about[0].text} />
          <List.Item title={t.about[1].title} text={t.about[1].text} />
          <List.Item title={t.about[2].title} text={t.about[2].text} />
          <List.Item title={t.about[3].title} text={t.about[3].text} />
        </List>
      </ProjectHighlight>
      <ProjectHighlight heading={t.researchHeading}>
        <Carousel>
          <TextCard text={t.research[0]} iconName="PieChart" />
          <TextCard text={t.research[1]} iconName="Smiley" />
        </Carousel>
      </ProjectHighlight>
      <ProjectHighlight heading={t.brandHeading}>
        <Carousel>
          <AssetCard
            columns={1}
            caption={t.brand[0].caption}
            image={image2}
            imageAlt={t.brand[0].imageAlt}
          />

          <AssetCard
            columns={1}
            caption={t.brand[1].caption}
            image={image3}
            imageAlt={t.brand[1].imageAlt}
          />
        </Carousel>
      </ProjectHighlight>
      <ProjectHighlight heading={t.wireframeHeading}>
        <Carousel>
          <TextCard text={t.wireframeTexts[0]} iconName="TreeStructure" />
          <TextCard text={t.wireframeTexts[1]} iconName="ArrowsClockwise" />
          <AssetCard
            columns={2}
            caption={t.wireframeAssets[0].caption}
            imageAlt={t.wireframeAssets[0].imageAlt}
            image={image7}
          />
          <AssetCard
            columns={2}
            caption={t.wireframeAssets[1].caption}
            image={image10}
          />
        </Carousel>
      </ProjectHighlight>

      <ProjectHighlight heading={t.pitchHeading}>
        <Carousel>
          <AssetCard
            columns={2}
            caption={t.pitchAssets[0].caption}
            imageAlt={t.pitchAssets[0].imageAlt}
            image={image11}
          />

          <TextCard text={t.pitchTexts[0]} iconName="TreeStructure" />
          <TextCard text={t.pitchTexts[1]} iconName="ArrowsClockwise" />
          <AssetCard
            columns={2}
            caption={t.pitchAssets[1].caption}
            imageAlt={t.pitchAssets[1].imageAlt}
            image={image12}
          />
          <AssetCard
            columns={2}
            caption={t.pitchAssets[2].caption}
            imageAlt={t.pitchAssets[2].imageAlt}
            image={image13}
          />
        </Carousel>
      </ProjectHighlight>

      <PortfolioPresentationCard />
    </Page>
  );
}
