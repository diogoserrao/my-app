export default function Footer() {
  return (
    <div className="flex justify-center w-full align-center py-20 ">
      <div className="footercontent">
        <div>Casa da Nati @ {new Date().getFullYear()}</div>
        <div className="links">
          <a href="/">Welcome</a>
          <a href="/bolodocaco">Bolo do caco</a>
          <a href="/reserva">Make a Reservation</a>
        </div>
        <div className="links">
          <span>Portugues</span>
          <span>Ingles</span>
        </div>
      </div>
    </div>
  );
}
