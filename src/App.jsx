import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import { Toaster } from '@/components/ui/toaster';
    import Header from '@/components/Header';
    import Footer from '@/components/Footer';
    import Home from '@/pages/Home';
    import EventsMap from '@/pages/EventsMap';
    import Register from '@/pages/Register';
    import About from '@/pages/About';
    import Dashboard from '@/pages/Dashboard';
    import Profile from '@/pages/Profile';
    import Sales from '@/pages/Sales';
    import { motion, AnimatePresence } from 'framer-motion';

    function App() {
      return (
        <Router>
          <div className="flex flex-col min-h-screen bg-orange-50 text-stone-800">
            <Header />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
                  <Route path="/mapa-eventos" element={<AnimatedPage><EventsMap /></AnimatedPage>} />
                  <Route path="/vendas" element={<AnimatedPage><Sales /></AnimatedPage>} />
                  <Route path="/cadastro" element={<AnimatedPage><Register /></AnimatedPage>} />
                  <Route path="/sobre" element={<AnimatedPage><About /></AnimatedPage>} />
                  <Route path="/painel" element={<AnimatedPage><Dashboard /></AnimatedPage>} />
                  <Route path="/perfil/:id" element={<AnimatedPage><Profile /></AnimatedPage>} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
            <Toaster />
          </div>
        </Router>
      );
    }

    const AnimatedPage = ({ children }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );

    export default App;