import Botao from "../components/botao";
import imagem1 from "../public/imagem1.webp";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div>
        <Image src={imagem1} alt="imagem1" className="bigimage" />
      </div>
      <div className="flex justify-center w-full align-center">
        <div className="corpocontent">
          <h1 className="titulo">
            "Vamos à casa da Nati provar o que está a cozinhar"
          </h1>
          <div className="container">
            <div className="Ccontent1">
              <div className="t1">
                <div className="texto1">
                  <p>
                    <strong>Bem-vindos à nossa casa</strong>{" "}
                  </p>
                  <div>
                    Somos uma família típica da Ponta do Sol, onde tentamos
                    manter a tradição viva. Na nossa casa, cozinhamos o
                    conhecido Bolo do Caco da Ilha da Madeira e partilhamos
                    alegria, comida e histórias com todos os que nos visitam.{" "}
                  </div>
                </div>
                <div className="texto1">
                  <p>
                    <strong> Nati e familia</strong>{" "}
                  </p>
                  <div>
                    A nossa mãe, Nati, faz pão há mais de 30 anos e tem uma
                    paixão por partilhar os seus conhecimentos, ensinando todos
                    os que desejam aprender. Como família, recebemos todos de
                    braços abertos, oferecendo pratos e bebidas tradicionais,
                    juntamente com os seus segredos e histórias, criando uma
                    experiência única de partilha e acolhimento.
                  </div>
                </div>
              </div>
              <div className="image2"> </div>
            </div>
          </div>
          <div className="botoes">
            <Botao href="/bolodocaco"> Bolo do Caco</Botao>
            <Botao pintado href="/reserva">
              Fazer reserva
            </Botao>
          </div>
          <div className="Ccontent1">
            <div className="image2"> </div>
            <div className="t1">
              <p>
                <strong>A nossa casa nas colinas</strong>
              </p>
              <div>
                Situada na tranquila aldeia dos Canhas, no alto da Ponta do Sol,
                a nossa casa está rodeada pela beleza da natureza. Aqui,
                cultivamos os nossos próprios legumes e cuidamos de árvores de
                fruto, incluindo laranjeiras, ameixeiras, araçás e anonas —
                algumas das melhores frutas da Ilha da Madeira.
              </div>
              <div>
                Os hóspedes são bem-vindos a colher e saborear estas frutas
                frescas diretamente das árvores, desfrutando dos seus sabores
                naturais e vibrantes.
              </div>
            </div>
          </div>
          <Botao href="/bolodocaco"> Bolo do Caco</Botao>
        </div>
      </div>
    </div>
  );
}
