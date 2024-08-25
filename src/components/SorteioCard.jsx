import React from 'react';

function SorteioCard() {
  return (
    <div className="max-w-sm rounded-t-2xl bg-white overflow-hidden shadow-lg">
      <img className="w-full" src="https://www.motorrad-bilder.at/thumbs/995x640/slideshows/291/011877/rizoma-yamaha-mt-07-01.jpg" alt="Yamaha MT-07" />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-700 text-center text-2xl mb-2">Sorteio Aniversário Toledo New Car 1 Ano</div>
        <p className="text-gray-700 text-base">
          Essa é sua chance! Essa é sua chance! Essa é sua chance!
          {/* ... repetir a frase ... */}
        </p>
      </div>
      <div className="px-6 pb-2 items-center flex justify-center">
        <p className="inline-block bg-gray-600 rounded-2xl px-3 py-2 text-sm text-center font-semibold ">
          Bilhetes por apenas <br /> <span className='font-bold text-xl'>R$4,99</span>
        </p>
      </div>
    </div>
  );
}

export default SorteioCard;