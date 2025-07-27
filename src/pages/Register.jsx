import React from 'react';
    import { Helmet } from 'react-helmet';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { useToast } from '@/components/ui/use-toast';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { UserPlus } from 'lucide-react';

    const Register = () => {
        const { toast } = useToast();

        const handleSubmit = (e) => {
            e.preventDefault();
            toast({
                title: "🎉 Cadastro realizado com sucesso!",
                description: "Em breve, você poderá fazer login. Por enquanto, explore a plataforma!",
            });
        };

        return (
            <>
                <Helmet>
                    <title>Cadastro - Conexão Cultural</title>
                    <meta name="description" content="Cadastre-se como profissional ou usuário na plataforma Conexão Cultural." />
                </Helmet>
                <div className="min-h-[80vh] flex items-center justify-center bg-orange-50 p-6" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/az-subtle.png')"}}>
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl"
                    >
                        <div className="text-center">
                            <div className="inline-block bg-red-600 p-4 rounded-full mb-4">
                               <UserPlus className="h-8 w-8 text-white" />
                            </div>
                            <h1 className="text-3xl font-bold text-stone-800">Crie sua Conta</h1>
                            <p className="text-stone-500 mt-2">Junte-se à nossa comunidade criativa!</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Label htmlFor="name">Nome Completo</Label>
                                <Input id="name" type="text" placeholder="Seu nome" required className="mt-1" />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="seu@email.com" required className="mt-1" />
                            </div>
                            <div>
                                <Label htmlFor="password">Senha</Label>
                                <Input id="password" type="password" placeholder="********" required className="mt-1" />
                            </div>
                             <div>
                                <Label htmlFor="type">Tipo de Conta</Label>
                                <select id="type" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm">
                                    <option>Quero contratar</option>
                                    <option>Sou um profissional</option>
                                </select>
                            </div>
                            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-3">
                                Cadastrar
                            </Button>
                        </form>
                        <p className="text-center text-sm text-stone-600">
                            Já tem uma conta?{' '}
                            <Link to="#" onClick={() => toast({ title: '🚧 Em breve!', description: 'A página de login estará disponível em breve.'})} className="font-medium text-red-600 hover:underline">
                                Faça login
                            </Link>
                        </p>
                    </motion.div>
                </div>
            </>
        );
    };

    export default Register;