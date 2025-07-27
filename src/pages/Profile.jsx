import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Plus, Edit } from 'lucide-react';

const Profile = () => {
    const { id } = useParams();
    const { toast } = useToast();
    const isOwnProfile = id === 'meu-perfil';

    const showToast = () => {
        toast({
            title: "🚧 Funcionalidade em desenvolvimento!",
            description: "Esta ação estará disponível em breve.",
        });
    };

    const backgroundStyle = {
        backgroundImage: "url('https://www.transparenttextures.com/patterns/az-subtle.png')",
        backgroundColor: '#FFF8E1'
    };

    return (
        <>
            <Helmet>
                <title>Perfil do Profissional - Conexão Cultural</title>
                <meta name="description" content="Veja o perfil, serviços e avaliações dos profissionais da Conexão Cultural." />
            </Helmet>
            <div className="bg-orange-50" style={backgroundStyle}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative h-48 md:h-64" style={{ backgroundColor: '#CA2C28' }}>
                        <img alt="Imagem de capa do perfil" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1665441644250-88e29a418e40" />
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                    <div className="container mx-auto px-6 -mt-16 md:-mt-24">
                        <div className="flex items-end space-x-4">
                            <div className="relative">
                                <img alt="Foto de perfil" className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-lg" src="https://images.unsplash.com/photo-1690005906982-7837aae8b850" />
                            </div>
                            <div className="pb-4 flex-grow">
                                <h1 className="text-2xl md:text-4xl font-bold text-stone-800">Erika Andrade</h1>
                                <p className="text-stone-600">Trançadeira Profissional</p>
                            </div>
                            {!isOwnProfile && (
                                <Button onClick={showToast} className="mb-4" style={{ backgroundColor: '#CA2C28', color: 'white' }}>Apoiar</Button>
                            )}
                        </div>
                    </div>
                </motion.div>

                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:col-span-2 space-y-8"
                        >
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold text-stone-800 mb-4">
                                    Descrição Profissional {isOwnProfile && <EditButton />}
                                </h2>
                                <p className="text-stone-600 leading-relaxed">
                                    Especialista em tranças nagô, box braids e penteados afros. Com mais de 5 anos de experiência, transformo cabelos com arte, técnica e muito carinho, valorizando a beleza e a identidade de cada cliente.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold text-stone-800">Serviços</h2>
                                    {isOwnProfile && (
                                        <Button onClick={showToast} size="sm" style={{ backgroundColor: '#FFBB3C', color: '#CA2C28' }}>
                                            <Plus className="mr-2 h-4 w-4" /> Adicionar
                                        </Button>
                                    )}
                                </div>
                                <div className="space-y-6">
                                    <ServiceCard isOwnProfile={isOwnProfile} />
                                    <ServiceCard isOwnProfile={isOwnProfile} />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold text-stone-800 mb-4">Contato {isOwnProfile && <EditButton />}</h2>
                                <div className="space-y-3">
                                    <p className="flex items-center text-stone-600">
                                        <Mail className="mr-3" style={{ color: '#CA2C28' }} size={20} /> erika.andrade@email.com
                                    </p>
                                    <p className="flex items-center text-stone-600">
                                        <Phone className="mr-3" style={{ color: '#CA2C28' }} size={20} /> (98) 98888-7777
                                    </p>
                                    <p className="flex items-center text-stone-600">
                                        <MapPin className="mr-3" style={{ color: '#CA2C28' }} size={20} /> Atendimento em domicílio - São Luís, MA
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold text-stone-800 mb-4">Redes Sociais {isOwnProfile && <EditButton />}</h2>
                                <div className="space-y-3">
                                    <a href="#" className="flex items-center hover:underline" style={{ color: '#CA2C28' }}>
                                        Instagram: @erika_trancas
                                    </a>
                                    <a href="#" className="flex items-center hover:underline" style={{ color: '#CA2C28' }}>
                                        Facebook: /erikatrancista
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

const EditButton = () => {
    const { toast } = useToast();
    return (
        <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 ml-2"
            onClick={() => toast({ title: '🚧 Em breve!', description: 'A edição do perfil estará disponível em breve.' })}
        >
            <Edit className="h-4 w-4 text-stone-500" />
        </Button>
    );
};

const ServiceCard = ({ isOwnProfile }) => {
    const { toast } = useToast();
    return (
        <div className="border-t pt-6">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold text-stone-700">Box Braids (Jumbo)</h3>
                    <p className="text-sm text-stone-500">Material incluso, duração de 8h</p>
                </div>
                {isOwnProfile && <EditButton />}
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
                <img alt="Exemplo de Box Braids 1" className="w-full h-24 object-cover rounded-md" src="https://images.unsplash.com/photo-1701796068999-c27721e036a2" />
                <img alt="Exemplo de Box Braids 2" className="w-full h-24 object-cover rounded-md" src="https://images.unsplash.com/photo-1701796068999-c27721e036a2" />
                <img alt="Exemplo de Box Braids 3" className="w-full h-24 object-cover rounded-md" src="https://images.unsplash.com/photo-1690005906982-7837aae8b850" />
            </div>
        </div>
    );
};

export default Profile;
