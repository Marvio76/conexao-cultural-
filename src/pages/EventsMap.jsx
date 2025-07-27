import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const EventCard = ({ title, period, local, details, image, delay }) => {
  const { toast } = useToast();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
    >
      <img alt={title} className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-stone-800 mb-2">{title}</h3>
        <p className="text-sm text-stone-600 mb-1 flex items-center"><Calendar size={14} className="mr-2 text-[#CA2C28]" /> {period}</p>
        <p className="text-sm text-stone-600 mb-4 flex items-center"><MapPin size={14} className="mr-2 text-[#CA2C28]" /> {local}</p>
        <p className="text-stone-700 flex-grow">{details}</p>
        <Button 
          onClick={() => toast({ title: "🚧 Em breve!", description: "Mais detalhes sobre os eventos estarão disponíveis em breve."})}
          className="mt-4 w-full bg-[#CA2C28] hover:bg-red-700 text-white"
        >
          Saiba Mais
        </Button>
      </div>
    </motion.div>
  );
};

const EventsMap = () => {
  const { toast } = useToast();

  const handleSearch = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Funcionalidade em desenvolvimento!",
      description: "A busca por eventos estará disponível em breve.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Mapa de Eventos - Conexão Cultural</title>
        <meta name="description" content="Encontre eventos culturais, feiras e locais estratégicos para atuar como profissional da economia criativa no Maranhão." />
      </Helmet>

      <div className="bg-[#CA2C28] text-white" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')"}}>
        <div className="container mx-auto px-6 py-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Eventos e Locais
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mx-auto text-[#fff]"
          >
            A seção de eventos e locais conecta profissionais criativos a eventos onde podem divulgar, demonstrar e vender seus serviços. Também permite que os usuários encontrem e entrem em contato com os profissionais presentes nesses eventos.
          </motion.p>
        </div>
      </div>

      <div className="bg-orange-50 py-12">
        <div className="container mx-auto px-6">
          <motion.form 
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-xl mx-auto flex items-center bg-white rounded-full shadow-lg p-2 mb-12"
          >
            <Input type="text" placeholder="Buscar Eventos..." className="flex-grow bg-transparent border-none focus:ring-0 text-stone-700" />
            <Button type="submit" size="icon" className="bg-[#CA2C28] hover:bg-red-700 rounded-full">
              <Search className="h-5 w-5 text-white" />
            </Button>
          </motion.form>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard 
              title="Caminhos da Cultura 2025"
              period="A partir de 01 de Jan de 2025"
              local="Centro Histórico de São Luís, com polos pela cultura na Praia Grande"
              details="Destaques: apresentações de bumba-meu-boi da..."
              image="Grupo de bumba-meu-boi se apresentando em rua histórica"
              delay={0.1}
            />
            <EventCard 
              title="Semana Nacional de Museus 2025"
              period="13 a 19 de Maio de 2025"
              local="Centro de Cultura Vale Maranhão e museus parceiros"
              details="Destaques: oficinas artísticas, palestras históricas, foco em..."
              image="Fachada de um museu com banner do evento"
              delay={0.2}
            />
            <EventCard 
              title="22ª Semana Nacional de C&T"
              period="21 a 25 de Outubro de 2025"
              local="Centro de Convenções (UEMA) e Planetário"
              details="A Semana Nacional de Ciência e Tecnologia (SNCT) é o principal evento de divulgação científica d..."
              image="Logo da Semana Nacional de Ciência e Tecnologia"
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsMap;
