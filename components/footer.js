import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex justify-center w-full align-center py-20 ">
      <div className="footercontent">
        <div>Casa da Nati @ {new Date().getFullYear()}</div>
        <div className="links">
          <Link href="/">Welcome</Link>
          <Link href="/bolodocaco">Bolo do caco</Link>
          <Link href="/reserva">Make a Reservation</Link>
        </div>
        <div className="links">
          <span>Portugues</span>
          <span>Ingles</span>
        </div>
      </div>
    </div>
  );
}