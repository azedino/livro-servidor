import React from "react";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css'

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-collapse">
        <Link className="navbar-brand" href='/'>Home</Link>
        <Link className="navbar-brand" href='/LivroLista'>Catálogo</Link>
        <Link className="navbar-brand" href='/LivroDados'>Novo</Link>
      </div>

    </nav>
  )
}