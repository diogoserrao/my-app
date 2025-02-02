"use client";
import Botao from "./botao";
import React from "react";
export default function Menu() {
  const [open, setMenu] = React.useState(false);
  return (
    <div className="menu">
      <div className="menucontent">
        <div className="flex justify-between flex-grow">
          <div className="menuesquerda">Casa Da Nati </div>
          <div className="abrirmenu">
            <button
              onClick={() => {
                setMenu(!open);
              }}
            >
              {open && (
                <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
                  <path
                    fill="currentColor"
                    d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
                  ></path>
                </svg>
              )}
              {!open && (
                <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
                  <path
                    fill="currentColor"
                    d="M2 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 12.032a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM3 17.064a1 1 0 100 2h18a1 1 0 000-2H3z"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={`menudireita ${open ? "" : "close"}`}>
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
