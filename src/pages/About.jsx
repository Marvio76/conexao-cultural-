import React from 'react';
    import { Helmet } from 'react-helmet';
    import { motion } from 'framer-motion';
    import { Users, Target, ShieldCheck } from 'lucide-react';

    const About = () => {
      const backgroundStyle = {
        backgroundImage: "url('https://www.transparenttextures.com/patterns/az-subtle.png')",
        backgroundColor: '#FFF8E1'
      };

      return (
        <>
          <Helmet>
            <title>Sobre Nós - Conexão Cultural</title>
            <meta name="description" content="Conheça a missão da Conexão Cultural em fortalecer a economia criativa, promover inclusão digital e valorizar a cultura maranhense." />
          </Helmet>
          <div className="bg-red-600 text-white" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')"}}>
            <div className="container mx-auto px-6 py-16 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Nossa Missão
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-3xl mx-auto text-orange-100"
              >
                Fortalecer a economia criativa maranhense, promovendo inclusão digital, valorização cultural e geração de renda para profissionais autônomos.
              </motion.p>
            </div>
          </div>
          
          <div className="py-20" style={backgroundStyle}>
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img  alt="Artesãos trabalhando juntos em uma feira" className="rounded-lg shadow-xl w-full h-auto object-cover" src="https://images.unsplash.com/photo-1560846548-e6bc763a4868" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl font-bold text-stone-800 mb-6">O Projeto Conexão Cultural</h2>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    Nascemos do desejo de criar uma ponte digital entre os incríveis talentos da cultura maranhense e o público que anseia por autenticidade e beleza. Acreditamos que a tecnologia pode ser uma poderosa aliada na preservação da nossa identidade cultural e na promoção de um desenvolvimento econômico mais justo e inclusivo.
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    Nossa plataforma é mais do que um marketplace; é um ecossistema que empodera artesãos, músicos, artistas de rua, costureiras, trançistas e tantos outros profissionais, dando-lhes visibilidade e ferramentas para prosperar.
                  </p>
                </motion.div>
              </div>

              <div className="mt-20">
                <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">Nossos Pilares</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white p-8 rounded-lg shadow-lg">
                    <Users className="mx-auto text-red-600 mb-4" size={48} />
                    <h3 className="text-xl font-semibold mb-2">Conexão e Comunidade</h3>
                    <p className="text-stone-600">Facilitamos o encontro entre quem faz e quem valoriza a cultura, construindo uma comunidade forte e colaborativa.</p>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white p-8 rounded-lg shadow-lg">
                    <Target className="mx-auto text-red-600 mb-4" size={48} />
                    <h3 className="text-xl font-semibold mb-2">Impacto Social</h3>
                    <p className="text-stone-600">Geramos dados que servem como base para a criação de políticas públicas, buscando melhores condições de trabalho e infraestrutura.</p>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white p-8 rounded-lg shadow-lg">
                    <ShieldCheck className="mx-auto text-red-600 mb-4" size={48} />
                    <h3 className="text-xl font-semibold mb-2">Valorização e Segurança</h3>
                    <p className="text-stone-600">Promovemos a avaliação de locais de trabalho, ajudando os profissionais a encontrarem espaços seguros e adequados para sua arte.</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };
    
    export default About;