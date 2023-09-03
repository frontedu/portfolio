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

import image1 from "../../public/projects/grain/rei-do-grao.png";
import image2 from "../../public/projects/grain/rdg-marca.png";
import image3 from "../../public/projects/grain/gg-marca.png";
import image7 from "../../public/projects/grain/planejamento-grain.jpg";
import image10 from "../../public/projects/grain/planejamento-grain2.jpg";
import image11 from "../../public/projects/grain/game-screen1.png";
import image12 from "../../public/projects/grain/game-screen2.png";
import image13 from "../../public/projects/grain/podium.jpg";

export default function Carefull() {
  return (
    <Page
      title="O Rei do Grão"
      description="A experiência muda o jogo — uma luz para um grande problema em eventos."
    >
      <ProjectIntro
        client="O Rei do Grão"
        role="UX/UI Design"
        year="2022"
        title="A experiência muda o jogo — uma luz para um grande problema em eventos."
      >
        <ConfidentialBanner css={{ marginBottom: "$space400" }} />
        <Card pressable={false} align="center" justify="center">
          <Image
            src={image1}
            alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
            placeholder="blur"
            width={552}
            height={552}
          />
        </Card>
      </ProjectIntro>
      <ProjectHighlight label="Sobre o projeto">
        <List>
          <List.Item
            title="O cliente"
            text={
              <>
                O HACKAGRÃO foi um evento de tecnologia, inovação e agricultura
                realizado pela empresa Grão Direto. Reunindo programadores,
                designers e outros profissionais e estudantes ligados ao
                desenvolvimento de software.
              </>
            }
          />
          <List.Item
            title="O problema"
            text={
              <>
                Entre os temas sugeridos, optamos pela gamificação em eventos
                corporativos, e criamos um jogo didático inspirado na bolsa de
                Chicago. Com ele, queremos chamar a atenção de novos usuários e
                ajudá-los a superar o medo de lidar com as flutuações de preços.
              </>
            }
          />
          <List.Item
            title="As limitações"
            text={
              <>
                Durante o desenvolvimento do MVP, nos deparamos com alguns
                desafios, como o tempo limitado de apenas 2 dias e a restrição
                de só poder contar com 30% da equipe no desenvolvimento devido
                ao sorteio do hackathon.
                <br />
                Além disso, o tema escolhido nos impunha limitações como uma
                área de aplicação restrita, o tempo de atenção do usuário e a
                necessidade de criar algo intuitivo e divertido.
              </>
            }
          />
          <List.Item
            title="Minha função"
            text={
              <>
                Meu papel nesse projeto foi tornar realidade, através de uma interface amigável, tudo o que planejamos com capricho: uma plataforma de negociação de grãos que ensina via informações climáticas e políticas no momento da transação, reduzindo incertezas e chamando atenção para um produto de nosso cliente — o GD VIP, onde esses dados estratégicos são ofertados via um plano mensal.
              </>
            }
          />
        </List>
      </ProjectHighlight>
      <ProjectHighlight
        heading={
          <>
            Realizamos pesquisas para entender as dificuldades e atratividade do
            nosso produto.
          </>
        }
      >
        <Carousel>
          <TextCard
            text="Desvendamos as tendências dos eventos corporativos, compreendendo suas dinâmicas e como destacar-se entre os inúmeros estandes."
            iconName="PieChart"
          />
          <TextCard
            text="Realizamos entrevistas com produtores rurais e mentores para avaliar interações com nosso produto e determinar as próximas melhorias."
            iconName="Smiley"
          />
        </Carousel>
      </ProjectHighlight>
      <ProjectHighlight
        heading={
          <>
            Desenvolvemos uma marca que comunica simplicidade, confiança e
            entusiasmo.
          </>
        }
      >
        <Carousel>
          <AssetCard
            columns={1}
            caption="O produto tem o nome inspirado pela novela O Rei do Gado, exibida entre 1996 e 1997 na Rede Globo."
            image={image2}
            imageAlt="O Rei do Grão"
          />

          <AssetCard
            columns={1}
            caption="Na escolha do nome para nossa equipe, optamos por Grain Games, refletindo a temática e a empresa por trás do evento."
            image={image3}
            imageAlt="Grain Games"
          />
        </Carousel>
      </ProjectHighlight>
      <ProjectHighlight
        heading={<>Onde um wireframe vale mais do que mil linhas de código.</>}
      >
        <Carousel>
          <TextCard
            text="Mapeamos fluxos e construímos wireframes para moldar nosso produto a realidade do jogador."
            iconName="TreeStructure"
          />
          <TextCard
            text="Dados coletados na etapa de pesquisa foram considerados na busca da melhor experiência."
            iconName="ArrowsClockwise"
          />
          <AssetCard
            columns={2}
            caption="Construímos esboços iniciais após termos estabelecido nossa visão de produto, orientando escolhas e prioridades na entrega."
            imageAlt="Quadro contendo visão de produto e esboço inicial"
            image={image7}
          />
          <AssetCard
            columns={2}
            caption="Com o produto esboçado, montamos um wireframe de baixa fidelidade como guia para o desenvolvimento da UI no Figma, tornando o processo mais claro e eficiente."
            image={image10}
          />
        </Carousel>
      </ProjectHighlight>

      <ProjectHighlight
        heading={<>Do rascunho ao pitch, da ideia a conquista.</>}
      >
        <Carousel>
          <AssetCard
            columns={2}
            caption="A negociação fictícia, através de dados estratégicos, ensina o jogador. Desafiando-o a se tornar o rei do grão, escolhendo os melhores momentos na venda de sua saca."
            imageAlt="Tela de negociação"
            image={image11}
          />

          <TextCard
            text="Construímos um MVP sólido, entregando um produto atrativo, mostrando pontos fortes em relação aos demais concorrentes no hackaton pela proposta de valor."
            iconName="TreeStructure"
          />
          <TextCard
            text="Na UI, incluímos referências a plataformas de trading já existentes. Representamos o mercado de grãos como um ativo no mercado financeiro."
            iconName="ArrowsClockwise"
          />
          <AssetCard
            columns={2}
            caption="Ao final, é exibido o ranking em tempo real dos melhores resultados, premiando e incentivando os que mais se destacam."
            imageAlt="Tela de resultado"
            image={image12}
          />
                    <AssetCard
            columns={2}
            caption="A maior parte de nosso time não possuía outras experiências em hackatons, o que resultou em grandes desafios, superados pela colaboração e pró-atividade, sendo o resultado consequência de uma ótima sinergia. 🥈"
            imageAlt="Foto do time, contendo 7 pessoas"
            image={image13}
          />
        </Carousel>
        
      </ProjectHighlight>

      <PortfolioPresentationCard />
    </Page>
  );
}
