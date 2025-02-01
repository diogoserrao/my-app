import Botao from "./botao";
export default function Menu() {
  return (
    <div className="menu">
      <div className="menucontent">
        <div className="menuesquerda">Casa Da Nati </div>
        <div className="menudireita">
          <Botao href="/"> Bem-vindo</Botao>
          <Botao href="/bolodocaco"> Bolo do Caco</Botao>
          <Botao pintado href="/reserva">
            Fazer reserva
          </Botao>
        </div>
      </div>
    </div>
  );
}
