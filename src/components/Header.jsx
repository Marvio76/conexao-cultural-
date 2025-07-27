import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layers3 } from 'lucide-react';

const Header = () => {
  const navLinkClass = ({ isActive }) =>
    `pb-1 border-b-2 transition-colors duration-300 ${
      isActive
        ? 'text-white border-white'
        : 'text-orange-200 border-transparent hover:text-white hover:border-white'
    }`;

  return (
    <header style={{ backgroundColor: '#CA2C28' }} className="shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div style={{ backgroundColor: '#FFBB3C' }} className="p-2 rounded-full">
            <Layers3 className="h-6 w-6" style={{ color: '#CA2C28' }} />
          </div>
          <span className="text-xl font-bold text-white tracking-wider hidden sm:block">
            Conexão Cultural
          </span>
        </Link>
        <div className="flex items-center space-x-4 md:space-x-6">
          <NavLink to="/vendas" className={navLinkClass}>Vendas</NavLink>
          <NavLink to="/mapa-eventos" className={navLinkClass}>Eventos</NavLink>
          <NavLink to="/sobre" className={navLinkClass}>Sobre</NavLink>

          <Button asChild variant="secondary" className="bg-white text-[#CA2C28] hover:bg-orange-100">
            <Link to="/cadastro">Cadastre-se</Link>
          </Button>

          <Button asChild className="text-[#CA2C28] hover:bg-[#e5a700]" style={{ backgroundColor: '#FFBB3C' }}>
            <Link to="/perfil/meu-perfil">Perfil</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
