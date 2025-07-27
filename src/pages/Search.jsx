
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Search as SearchIcon, Filter, MapPin, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'Todas as Categorias' },
    { id: 'artesanato', name: 'Artesanato' },
    { id: 'musica', name: 'Música' },
    { id: 'arte-visual', name: 'Arte Visual' },
    { id: 'costura', name: 'Costura' },
    { id: 'trancas', name: 'Tranças' },
    { id: 'culinaria', name: 'Culinária' }
  ];

  const locations = [
    { id: 'all', name: 'Todas as Cidades' },
    { id: 'sao-luis', name: 'São Luís' },
    { id: 'imperatriz', name: 'Imperatriz' },
    { id: 'caxias', name: 'Caxias' },
    { id: 'timon', name: 'Timon' },
    { id: 'codó', name: 'Codó' },
    { id: 'bacabal', name: 'Bacabal' }
  ];

  const professionals = [
    {
      id: 1,
      name: 'Maria Santos',
      category: 'Artesanato',
      location: 'São Luís',
      rating: 4.9,
      reviews: 45,
      price: 'R$ 50-150',
      image: 'Artesã maranhense trabalhando com cerâmica',
      description: 'Especialista em cerâmica tradicional maranhense',
      verified: true
    },
    {
      id: 2,
      name: 'João Silva',
      category: 'Música',
      location: 'Imperatriz',
      rating: 4.8,
      reviews: 32,
      price: 'R$ 200-500',
      image: 'Músico tocando tambor de crioula',
      description: 'Músico tradicional, especialista em bumba-meu-boi',
      verified: true
    },
    {
      id: 3,
      name: 'Ana Costa',
      category: 'Tranças',
      location: 'Caxias',
      rating: 5.0,
      reviews: 28,
      price: 'R$ 30-80',
      image: 'Trançista fazendo penteados afro',
      description: 'Especialista em penteados afro e tranças tradicionais',
      verified: false
    },
    {
      id: 4,
      name: 'Carlos Oliveira',
      category: 'Arte Visual',
      location: 'São Luís',
      rating: 4.7,
      reviews: 38,
      price: 'R$ 100-300',
      image: 'Artista pintando mural colorido',
      description: 'Muralista e artista visual contemporâneo',
      verified: true
    },
    {
      id: 5,
      name: 'Lucia Ferreira',
      category: 'Costura',
      location: 'Timon',
      rating: 4.9,
      reviews: 52,
      price: 'R$ 40-120',
      image: 'Costureira trabalhando com tecidos',
      description: 'Costureira especializada em roupas tradicionais',
      verified: true
    },
    {
      id: 6,
      name: 'Roberto Lima',
      category: 'Culinária',
      location: 'Codó',
      rating: 4.6,
      reviews: 29,
      price: 'R$ 25-60',
      image: 'Chef preparando pratos típicos maranhenses',
      description: 'Chef especializado em culinária maranhense',
      verified: false
    }
  ];

  const handleSearch = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "A busca ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
    });
  };

  const handleFilter = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "Os filtros ainda não foram implementados—mas não se preocupe! Você pode solicitá-los no seu próximo prompt! 🚀",
    });
  };

  const handleProfessionalClick = (professional) => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "O perfil do profissional ainda não foi implementado—mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  const handleLike = (professionalId) => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "O sistema de curtidas ainda não foi implementado—mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Buscar Profissionais - Economia Criativa MA</title>
        <meta name="description" content="Encontre artesãos, músicos, artistas e profissionais criativos do Maranhão. Busque por categoria, localização e avaliações." />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen pt-20">
        {/* Search Header */}
        <section className="py-12 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Encontre Profissionais Criativos
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Descubra talentos incríveis da economia criativa maranhense
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Buscar por nome, serviço ou especialidade..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-white/90 h-12"
                >
                  <SearchIcon className="mr-2" size={20} />
                  Buscar
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex items-center gap-4">
                <Filter className="text-white" size={20} />
                <span className="text-white font-medium">Filtros:</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id} className="bg-gray-800">
                      {category.name}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                >
                  {locations.map(location => (
                    <option key={location.id} value={location.id} className="bg-gray-800">
                      {location.name}
                    </option>
                  ))}
                </select>

                <Button 
                  onClick={handleFilter}
                  variant="outline" 
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Aplicar Filtros
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">
                {professionals.length} profissionais encontrados
              </h2>
              <select className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white">
                <option value="relevance" className="bg-gray-800">Mais Relevantes</option>
                <option value="rating" className="bg-gray-800">Melhor Avaliados</option>
                <option value="price-low" className="bg-gray-800">Menor Preço</option>
                <option value="price-high" className="bg-gray-800">Maior Preço</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionals.map((professional, index) => (
                <motion.div
                  key={professional.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="professional-card border-0 hover-lift card-hover overflow-hidden">
                    <div className="relative">
                      <img  
                        className="w-full h-48 object-cover" 
                        alt={`Foto de ${professional.name}`}
                       src="https://images.unsplash.com/photo-1588966915713-6d43603478e5" />
                      <div className="absolute top-4 left-4">
                        {professional.verified && (
                          <Badge className="bg-green-500 text-white border-0">
                            Verificado
                          </Badge>
                        )}
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/20 text-white border-0">
                          <Star size={12} className="mr-1 fill-current" />
                          {professional.rating}
                        </Badge>
                      </div>
                      <button
                        onClick={() => handleLike(professional.id)}
                        className="absolute bottom-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Heart size={16} className="text-white" />
                      </button>
                    </div>
                    
                    <CardContent className="p-6 text-white">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{professional.name}</h3>
                        <span className="text-sm text-white/70">{professional.price}</span>
                      </div>
                      
                      <Badge className="mb-3 bg-purple-500/20 text-purple-200 border-purple-500/30">
                        {professional.category}
                      </Badge>
                      
                      <p className="text-white/80 text-sm mb-4">
                        {professional.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-white/70">
                          <MapPin size={16} className="mr-1" />
                          {professional.location}
                        </div>
                        <div className="text-white/70 text-sm">
                          {professional.reviews} avaliações
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => handleProfessionalClick(professional)}
                        className="w-full mt-4 bg-white text-purple-600 hover:bg-white/90"
                      >
                        Ver Perfil
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button 
                onClick={() => toast({
                  title: "🚧 Funcionalidade em desenvolvimento",
                  description: "Carregar mais resultados ainda não foi implementado—mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
                })}
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Carregar Mais Profissionais
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Search;
