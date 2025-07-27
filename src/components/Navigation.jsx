
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Search, MapPin, User, Home, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Início', icon: Home },
    { path: '/busca', label: 'Buscar', icon: Search },
    { path: '/mapa-eventos', label: 'Mapa', icon: MapPin },
    { path: '/sobre', label: 'Sobre', icon: Info },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 maranhao-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EC</span>
            </div>
            <span className="text-white font-bold text-lg hidden sm:block">
              Economia Criativa MA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-white/20 text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <div className="flex items-center space-x-2">
              <Link to="/cadastro">
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Cadastrar
                </Button>
              </Link>
              <Link to="/painel">
                <Button className="bg-white text-purple-600 hover:bg-white/90">
                  <User size={18} className="mr-2" />
                  Entrar
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-white/20"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-white/20 text-white'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <Link to="/cadastro" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Cadastrar
                  </Button>
                </Link>
                <Link to="/painel" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-white text-purple-600 hover:bg-white/90">
                    <User size={18} className="mr-2" />
                    Entrar
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
