import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Star, Send, Palette, Music, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const CategoryCard = ({ icon, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
  >
    <div style={{ backgroundColor: '#FFBB3C', color: '#CA2C28' }} className="p-4 rounded-full mb-4">{icon}</div>
    <p className="font-semibold text-stone-700">{title}</p>
  </motion.div>
);

const ProfessionalCard = ({ name, specialty, rating, image, delay }) => {
  const { toast } = useToast();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-lg p-4 text-center flex flex-col items-center hover:shadow-xl transition-shadow"
      onClick={() => toast({ title: "🚧 Em breve!", description: "Perfis detalhados dos profissionais estarão disponíveis em breve." })}
    >
      <img
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4 border-4"
        style={{ borderColor: '#FFBB3C' }}
        src="https://images.unsplash.com/photo-1595872018818-97555653a011"
      />
      <p className="font-bold text-stone-800">{name}</p>
      <p className="text-sm text-stone-500 mb-2">{specialty}</p>
      <div className="flex items-center text-yellow-500">
        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        <span className="ml-2 text-sm text-stone-600">({rating})</span>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const { toast } = useToast();

  const handleSearch = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Funcionalidade em desenvolvimento!",
      description: "A busca por prestadores estará disponível em breve. Continue explorando!",
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "✨ Mensagem enviada com sucesso!",
      description: "Obrigado por seu interesse. Em breve esta funcionalidade será implementada.",
    });
    e.target.reset();
  };

  const backgroundStyle = {
    backgroundImage: "url('https://www.transparenttextures.com/patterns/az-subtle.png')",
    backgroundColor: '#FFF8E1'
  };

  return (
    <>
      <Helmet>
        <title>Conexão Cultural - Fortalecendo a Economia Criativa Maranhense</title>
        <meta name="description" content="Plataforma para conectar artistas, artesãos e profissionais da cultura no Maranhão ao público e a oportunidades." />
      </Helmet>

      <div
        className="text-white relative overflow-hidden"
        style={{
          backgroundColor: '#CA2C28',
          backgroundImage: "url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')"
        }}
      >
        <div className="container mx-auto px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Conectando talentos locais que valorizam a cultura
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-orange-100"
          >
            ...e o cuidado com a beleza.
          </motion.p>
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-xl mx-auto flex items-center bg-white rounded-full shadow-lg p-2"
          >
            <Input type="text" placeholder="Buscar Prestadores..." className="flex-grow bg-transparent border-none focus:ring-0 text-stone-700" />
            <Button type="submit" size="icon" style={{ backgroundColor: '#CA2C28' }} className="hover:brightness-90 rounded-full">
              <Search className="h-5 w-5 text-white" />
            </Button>
          </motion.form>
        </div>
      </div>

      <section className="py-16" style={backgroundStyle}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-stone-800">Categorias</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CategoryCard icon={<Palette size={32} />} title="Tranças e Penteados" delay={0.1} />
            <CategoryCard icon={<Music size={32} />} title="Artesanato Decorativo" delay={0.2} />
            <CategoryCard icon={<Sparkles size={32} />} title="Maquiagem e Estética" delay={0.3} />
            <CategoryCard icon={<Sparkles size={32} />} title="Promoções" delay={0.4} />
          </div>
        </div>
      </section>

      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-stone-800">Prestadores Destaques</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProfessionalCard name="Erika Andrade" specialty="Trançadeira" rating="4.9" image="Mulher negra sorrindo com tranças" delay={0.1} />
            <ProfessionalCard name="Jéssica Lima" specialty="Cabelereira/Maquiadora" rating="4.8" image="Mulher sorrindo em salão de beleza" delay={0.2} />
            <ProfessionalCard name="Paulinha Cruz" specialty="Artesã" rating="4.7" image="Artesã mostrando seus produtos" delay={0.3} />
          </div>
        </div>
      </section>

      <section
        className="text-white"
        style={{
          backgroundColor: '#CA2C28',
          backgroundImage: "url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')"
        }}
      >
        <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFBB3C' }}>Sobre a plataforma</h2>
            <p className="text-orange-100 leading-relaxed">
              Nessa plataforma conectamos trançadeiras, cabeleireiras, artesãs e outros profissionais culturais locais a clientes que valorizam o talento da sua comunidade. Aqui, você encontra serviços personalizados, contata direto com os prestadores e agendamento fácil e rápido.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Contratar um prestador</h3>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <Input type="text" placeholder="Seu nome" className="bg-white/20 border-none placeholder-orange-100 text-white" required />
              <Input as="textarea" placeholder="Sua mensagem" className="bg-white/20 border-none placeholder-orange-100 text-white h-24" required />
              <Button
                type="submit"
                className="w-full font-bold hover:brightness-105"
                style={{ backgroundColor: '#FFBB3C', color: '#CA2C28' }}
              >
                Enviar <Send className="ml-2" size={16} />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
