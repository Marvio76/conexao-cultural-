
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Star, MapPin, Phone, Mail, Heart, Share2, MessageCircle, Calendar, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const ProfessionalProfile = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);

  // Mock data - in real app, this would come from API
  const professional = {
    id: 1,
    name: 'Maria Santos',
    category: 'Artesanato',
    location: 'São Luís, MA',
    rating: 4.9,
    reviews: 45,
    price: 'R$ 50-150',
    phone: '(98) 99999-9999',
    email: 'maria.santos@email.com',
    verified: true,
    description: 'Artesã especializada em cerâmica tradicional maranhense com mais de 15 anos de experiência. Trabalho com técnicas ancestrais passadas de geração em geração, criando peças únicas que contam a história da nossa cultura.',
    specialties: ['Cerâmica', 'Olaria', 'Decoração', 'Arte Tradicional'],
    experience: '15 anos',
    completedJobs: 120,
    responseTime: '2 horas',
    images: [
      'Artesã maranhense trabalhando com cerâmica tradicional',
      'Peças de cerâmica coloridas feitas à mão',
      'Oficina de cerâmica com ferramentas tradicionais',
      'Vasos decorativos de cerâmica maranhense'
    ]
  };

  const reviews = [
    {
      id: 1,
      name: 'Ana Silva',
      rating: 5,
      date: '2024-01-15',
      comment: 'Trabalho excepcional! Maria é uma verdadeira artista. As peças ficaram lindas e foram entregues no prazo.',
      avatar: 'Cliente satisfeita sorrindo'
    },
    {
      id: 2,
      name: 'João Costa',
      rating: 5,
      date: '2024-01-10',
      comment: 'Recomendo muito! Profissional dedicada e com muito conhecimento da cultura maranhense.',
      avatar: 'Cliente masculino satisfeito'
    },
    {
      id: 3,
      name: 'Carla Oliveira',
      rating: 4,
      date: '2024-01-05',
      comment: 'Ótima experiência! As peças são de qualidade e o atendimento foi excelente.',
      avatar: 'Cliente feminina feliz'
    }
  ];

  const handleAction = (action) => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removido dos favoritos" : "Adicionado aos favoritos",
      description: isLiked ? "Profissional removido da sua lista de favoritos" : "Profissional adicionado à sua lista de favoritos",
    });
  };

  return (
    <>
      <Helmet>
        <title>{professional.name} - {professional.category} - Economia Criativa MA</title>
        <meta name="description" content={`Conheça ${professional.name}, ${professional.category.toLowerCase()} em ${professional.location}. ${professional.description.substring(0, 150)}...`} />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Profile Info */}
              <div className="lg:col-span-2">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src="" alt={professional.name} />
                      <AvatarFallback className="text-2xl bg-purple-500 text-white">
                        {professional.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-bold text-white">{professional.name}</h1>
                      {professional.verified && (
                        <Badge className="bg-green-500 text-white border-0">
                          <Award size={12} className="mr-1" />
                          Verificado
                        </Badge>
                      )}
                    </div>
                    
                    <Badge className="mb-4 bg-purple-500/20 text-purple-200 border-purple-500/30">
                      {professional.category}
                    </Badge>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center">
                        <Star className="text-yellow-400 fill-current mr-1" size={20} />
                        <span className="text-white font-semibold">{professional.rating}</span>
                        <span className="text-white/70 ml-1">({professional.reviews} avaliações)</span>
                      </div>
                      <div className="flex items-center text-white/70">
                        <MapPin size={16} className="mr-1" />
                        {professional.location}
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-6">{professional.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {professional.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="border-white/20 text-white">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Card */}
              <div>
                <Card className="glass-effect border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-center">
                      <span className="text-2xl font-bold">{professional.price}</span>
                      <span className="text-sm text-white/70 block">por projeto</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      onClick={() => handleAction('contact')}
                      className="w-full bg-white text-purple-600 hover:bg-white/90"
                    >
                      <MessageCircle className="mr-2" size={18} />
                      Entrar em Contato
                    </Button>
                    
                    <Button 
                      onClick={() => handleAction('schedule')}
                      variant="outline" 
                      className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Calendar className="mr-2" size={18} />
                      Agendar Consulta
                    </Button>
                    
                    <div className="flex gap-2">
                      <Button 
                        onClick={handleLike}
                        variant="outline" 
                        size="icon"
                        className={`bg-white/10 border-white/20 hover:bg-white/20 ${isLiked ? 'text-red-400' : 'text-white'}`}
                      >
                        <Heart size={18} className={isLiked ? 'fill-current' : ''} />
                      </Button>
                      <Button 
                        onClick={() => handleAction('share')}
                        variant="outline" 
                        size="icon"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        <Share2 size={18} />
                      </Button>
                    </div>
                    
                    <div className="pt-4 border-t border-white/20 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/70">Tempo de resposta:</span>
                        <span className="text-white">{professional.responseTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Projetos concluídos:</span>
                        <span className="text-white">{professional.completedJobs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Experiência:</span>
                        <span className="text-white">{professional.experience}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="portfolio" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/10 border-white/20">
                <TabsTrigger value="portfolio" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">
                  Portfólio
                </TabsTrigger>
                <TabsTrigger value="reviews" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">
                  Avaliações
                </TabsTrigger>
                <TabsTrigger value="contact" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">
                  Contato
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="portfolio" className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Trabalhos Realizados</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {professional.images.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="cursor-pointer"
                        onClick={() => handleAction('viewImage')}
                      >
                        <img  
                          className="w-full h-64 object-cover rounded-lg hover-lift shadow-lg"
                          alt={`Trabalho ${index + 1} de ${professional.name}`}
                         src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">Avaliações dos Clientes</h3>
                    <Button 
                      onClick={() => handleAction('writeReview')}
                      className="bg-white text-purple-600 hover:bg-white/90"
                    >
                      Escrever Avaliação
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <motion.div
                        key={review.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="glass-effect border-white/20 text-white">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <Avatar>
                                <AvatarImage src="" alt={review.name} />
                                <AvatarFallback className="bg-purple-500 text-white">
                                  {review.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold">{review.name}</h4>
                                  <span className="text-sm text-white/70">{review.date}</span>
                                </div>
                                <div className="flex items-center mb-3">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      size={16}
                                      className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-white/30'}
                                    />
                                  ))}
                                </div>
                                <p className="text-white/80">{review.comment}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="contact" className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="glass-effect border-white/20 text-white">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold mb-4">Contato Direto</h4>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Phone className="text-purple-300" size={20} />
                            <span>{professional.phone}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="text-purple-300" size={20} />
                            <span>{professional.email}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <MapPin className="text-purple-300" size={20} />
                            <span>{professional.location}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-effect border-white/20 text-white">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold mb-4">Estatísticas</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Users className="text-purple-300" size={20} />
                              <span>Clientes atendidos</span>
                            </div>
                            <span className="font-semibold">{professional.completedJobs}+</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Star className="text-purple-300" size={20} />
                              <span>Avaliação média</span>
                            </div>
                            <span className="font-semibold">{professional.rating}/5.0</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Award className="text-purple-300" size={20} />
                              <span>Anos de experiência</span>
                            </div>
                            <span className="font-semibold">{professional.experience}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ProfessionalProfile;
