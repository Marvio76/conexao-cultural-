import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layers3, Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `pb-1 border-b-2 transition-colors duration-300 ${
      isActive
        ? 'text-white border-white'
        : 'text-orange-200 border-transparent hover:text-white hover:border-white'
    }`;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header style={{ backgroundColor: '#CA2C28' }} className="shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div style={{ backgroundColor: '#FFBB3C' }} className="p-2 rounded-full">
            <Layers3 className="h-6 w-6" style={{ color: '#CA2C28' }} />
          </div>
          <span className="text-xl font-bold text-white tracking-wider hidden sm:block">
            Conexão Cultural
          </span>
        </Link>

        {/* Botão do menu hambúrguer para mobile */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu */}
        <div
          className={`flex-col sm:flex-row sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-6 absolute sm:static top-full left-0 w-full sm:w-auto bg-[#CA2C28] sm:bg-transparent px-6 py-4 sm:p-0 transition-all duration-300 ease-in-out ${
            menuOpen ? 'flex' : 'hidden'
          }`}
        >
          <NavLink to="/vendas" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            Vendas
          </NavLink>
          <NavLink to="/mapa-eventos" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            Eventos
          </NavLink>
          <NavLink to="/sobre" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            Sobre
          </NavLink>

          <Button
            asChild
            variant="secondary"
            className="bg-white text-[#CA2C28] hover:bg-orange-100"
            onClick={() => setMenuOpen(false)}
          >
            <Link to="/cadastro">Cadastre-se</Link>
          </Button>

          <Button
            asChild
            className="text-[#CA2C28] hover:bg-[#e5a700]"
            style={{ backgroundColor: '#FFBB3C' }}
            onClick={() => setMenuOpen(false)}
          >
            <Link to="/perfil/meu-perfil">Perfil</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
