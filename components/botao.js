export default function Botao({ children, pintado, href }) {
  return (
    <a className={"botao" + (pintado ? " botaopintado" : " botaosimples")} href={href}>
       {children}
    </a>
  );
}
