import { useState } from 'react';
import Navbar from './components/Navbar';
import SorteioCard from './components/SorteioCard';

function App() {
  return (
    <>
      <Navbar />
      <div className='h-full bg-[#242424]  flex items-center justify-center'>
        <div className='w-full max-w-6xl md:pt-6 pt-4 px-4 text-start text-white'>
          <h2 className='text-2xl'>
            <b>Rifas</b>
          </h2>
          <p className='text-sm mb-5 w-full max-w-4xl'>
            Experimente a emoção de ganhar prêmios incríveis com a "<b>RifaEspress</b>"! Compre um bilhete e entre para o jogo da sorte; é fácil e cada rifa também apoia boas causas. Transforme sua sorte em grandes conquistas e faça a diferença com a "<b>RifaEspress</b>"!
          </p>
          <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <SorteioCard />
            <SorteioCard />
            <SorteioCard />
            <SorteioCard />
            <SorteioCard />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
