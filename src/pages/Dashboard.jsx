import React from 'react';
    import { Helmet } from 'react-helmet';
    import { motion } from 'framer-motion';
    import { useToast } from '@/components/ui/use-toast';
    import { Button } from '@/components/ui/button';
    import { LayoutDashboard, Calendar, MessageSquare, BarChart2 } from 'lucide-react';

    const Dashboard = () => {
        const { toast } = useToast();

        const handleFeatureClick = () => {
            toast({
                title: "🚧 Em construção!",
                description: "Esta funcionalidade do painel está sendo desenvolvida. Volte em breve!",
            });
        };

        return (
            <>
                <Helmet>
                    <title>Painel do Profissional - Conexão Cultural</title>
                    <meta name="description" content="Gerencie sua agenda, contatos, histórico e veja dados de desempenho no seu painel." />
                </Helmet>
                <div className="bg-red-600 text-white" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')"}}>
                    <div className="container mx-auto px-6 py-12">
                        <motion.h1 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-4xl font-bold"
                        >
                            Painel do Profissional
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-orange-100 mt-2"
                        >
                            Aqui você gerencia seu perfil, serviços e interações.
                        </motion.p>
                    </div>
                </div>

                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <DashboardCard icon={<LayoutDashboard size={32} />} title="Meu Perfil" description="Edite suas informações e fotos." onClick={handleFeatureClick} />
                        <DashboardCard icon={<Calendar size={32} />} title="Agenda" description="Gerencie seus compromissos." onClick={handleFeatureClick} />
                        <DashboardCard icon={<MessageSquare size={32} />} title="Mensagens" description="Veja seus contatos e conversas." onClick={handleFeatureClick} />
                        <DashboardCard icon={<BarChart2 size={32} />} title="Dados" description="Acompanhe seu desempenho." onClick={handleFeatureClick} />
                    </div>
                    <div className="mt-12 bg-white p-8 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">Funcionalidade em Breve</h2>
                        <p className="text-stone-600 max-w-2xl mx-auto">
                            Estamos trabalhando para trazer todas as ferramentas que você precisa para crescer. O painel completo incluirá gráficos de desempenho, histórico de serviços, gerenciamento de portfólio e muito mais. Fique de olho nas atualizações!
                        </p>
                    </div>
                </div>
            </>
        );
    };

    const DashboardCard = ({ icon, title, description, onClick }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={onClick}
            className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
        >
            <div className="text-red-600 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">{title}</h3>
            <p className="text-stone-500">{description}</p>
        </motion.div>
    );

    export default Dashboard;