import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SorteioCard from './components/SorteioCard';
import CardVisto from './components/CardVisto';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className='h-full bg-[#242424] flex flex-col items-center justify-center'>
            <div className='w-full max-w-6xl md:pt-24 pt-20 px-4 text-start text-white'>
              <h2 className='text-2xl'>
                <b>Rifas</b>
              </h2>
              <p className='text-sm mb-5 w-full max-w-4xl'>
                Experimente a emoção de ganhar prêmios incríveis com a <b>RifaEspress</b>! Compre um bilhete e entre para o jogo da sorte; é fácil e cada rifa também apoia boas causas. Transforme sua sorte em grandes conquistas e faça a diferença com a <b>RifaEspress</b>!
              </p>
              <section className='grid md:grid-cols-2 mb-10 lg:grid-cols-3 gap-4'>
                <SorteioCard productId={1} />
                <SorteioCard productId={2} />
                <SorteioCard productId={3} />
                <SorteioCard productId={4} />
                <SorteioCard productId={5} />
              </section>
              <h2 className='text-2xl'>
                <b>Últimas ações</b>
              </h2>
            </div>
            <section className='grid md:grid-cols-2 my-6 px-4 lg:grid-cols-3 gap-4'>
              <CardVisto />
              <CardVisto />
              <CardVisto />
            </section>
            <a className='mb-7 text-white font-mono px-4 py-1 bg-orange-600 rounded-lg text-center' href="#">Ver mais...</a>
          </div>
        } />
        <Route path="/produto/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
