import React from 'react';
import { Link } from 'react-router-dom';
import { Layers3, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#CA2C28' }} className="text-white pt-10 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div style={{ backgroundColor: '#FFBB3C' }} className="p-2 rounded-full">
                <Layers3 className="h-6 w-6" style={{ color: '#CA2C28' }} />
              </div>
              <span className="text-xl font-bold">Conexão Cultural</span>
            </Link>
            <p className="text-sm text-orange-100">Fortalecendo a economia criativa maranhense.</p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-4" style={{ color: '#FFBB3C' }}>Navegação</p>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#FFBB3C] transition-colors">Home</Link></li>
              <li><Link to="/vendas" className="hover:text-[#FFBB3C] transition-colors">Vendas</Link></li>
              <li><Link to="/mapa-eventos" className="hover:text-[#FFBB3C] transition-colors">Mapa de Eventos</Link></li>
              <li><Link to="/sobre" className="hover:text-[#FFBB3C] transition-colors">Sobre Nós</Link></li>
              <li><Link to="/painel" className="hover:text-[#FFBB3C] transition-colors">Painel</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-lg mb-4" style={{ color: '#FFBB3C' }}>Legal</p>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-[#FFBB3C] transition-colors">Termos de Serviço</Link></li>
              <li><Link to="#" className="hover:text-[#FFBB3C] transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-lg mb-4" style={{ color: '#FFBB3C' }}>Siga-nos</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FFBB3C] transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-[#FFBB3C] transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-[#FFBB3C] transition-colors"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-orange-200/50 pt-6 text-center text-sm text-orange-100">
          <p>&copy; {new Date().getFullYear()} Conexão Cultural. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
