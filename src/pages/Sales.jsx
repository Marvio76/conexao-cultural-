import React from 'react';
    import { Helmet } from 'react-helmet';
    import { motion } from 'framer-motion';
    import { Search, Filter, ShoppingCart } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { useToast } from '@/components/ui/use-toast';
    import { Link } from 'react-router-dom';

    const products = [
      {
        id: 1,
        name: 'Vaso de Cerâmica Marajoara',
        artisan: 'Paulinha Cruz',
        price: 'R$ 120,00',
        image: 'Vaso de cerâmica marrom com detalhes geométricos',
        category: 'Artesanato Decorativo',
        delay: 0.1,
      },
      {
        id: 2,
        name: 'Bolsa de Buriti',
        artisan: 'Ana Ferreira',
        price: 'R$ 85,00',
        image: 'Bolsa de palha de buriti com alça de couro',
        category: 'Acessórios',
        delay: 0.2,
      },
      {
        id: 3,
        name: 'Colar de Sementes',
        artisan: 'Paulinha Cruz',
        price: 'R$ 45,00',
        image: 'Colar colorido com sementes de açaí e jarina',
        category: 'Biojoias',
        delay: 0.3,
      },
      {
        id: 4,
        name: 'Luminária de Cabaça',
        artisan: 'José Ribeiro',
        price: 'R$ 150,00',
        image: 'Luminária feita de cabaça seca com perfurações',
        category: 'Artesanato Decorativo',
        delay: 0.4,
      },
    ];

    const ProductCard = ({ name, artisan, price, image, category, delay }) => {
      const { toast } = useToast();
      const handleBuy = () => {
        toast({
          title: '🛒 Item adicionado ao carrinho!',
          description: `"${name}" está aguardando no seu carrinho.`,
        });
      };
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay }}
          className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group"
        >
          <div className="overflow-hidden">
            <img-replace alt={image} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <p className="text-sm text-red-600 font-semibold mb-1">{category}</p>
            <h3 className="text-xl font-bold text-stone-800 mb-2">{name}</h3>
            <p className="text-sm text-stone-500 mb-4">
              Por <Link to="/perfil/artesa" className="text-red-600 hover:underline">{artisan}</Link>
            </p>
            <p className="text-2xl font-extrabold text-stone-800 mt-auto mb-4">{price}</p>
            <Button onClick={handleBuy} className="w-full bg-red-600 hover:bg-red-700 text-white mt-auto">
              <ShoppingCart className="mr-2" size={18} /> Comprar
            </Button>
          </div>
        </motion.div>
      );
    };

    const Sales = () => {
      const { toast } = useToast();

      const handleSearch = (e) => {
        e.preventDefault();
        toast({
          title: '🚧 Funcionalidade em desenvolvimento!',
          description: 'A busca por produtos estará disponível em breve.',
        });
      };

      const handleFilter = () => {
        toast({
          title: '🚧 Funcionalidade em desenvolvimento!',
          description: 'Os filtros por categoria estarão disponíveis em breve.',
        });
      }

      return (
        <>
          <Helmet>
            <title>Vendas - Conexão Cultural</title>
            <meta name="description" content="Compre produtos únicos de artesãos e artistas maranhenses. Valorize a cultura local!" />
          </Helmet>
          <div className="bg-red-600 text-white" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')"}}>
            <div className="container mx-auto px-6 py-16 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Vitrine da Cultura Maranhense
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-3xl mx-auto text-orange-100"
              >
                Descubra e compre peças únicas, feitas à mão por talentosos artistas da nossa terra. Cada compra fortalece a economia criativa local.
              </motion.p>
            </div>
          </div>

          <div className="bg-orange-50 py-12">
            <div className="container mx-auto px-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col md:flex-row gap-4 mb-12"
              >
                <form onSubmit={handleSearch} className="flex-grow flex items-center bg-white rounded-full shadow-lg p-2">
                  <Input type="text" placeholder="Buscar por produtos ou artesãos..." className="flex-grow bg-transparent border-none focus:ring-0 text-stone-700" />
                  <Button type="submit" size="icon" className="bg-red-600 hover:bg-red-700 rounded-full">
                    <Search className="h-5 w-5 text-white" />
                  </Button>
                </form>
                <Button onClick={handleFilter} variant="outline" className="bg-white text-stone-700 border-stone-300 hover:bg-stone-100 shadow-lg rounded-full">
                  <Filter className="mr-2" size={16} />
                  Filtrar por Categoria
                </Button>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </>
      );
    };

    export default Sales;