import React from 'react';

const CardVisto = () => {
  return (
    <div className="max-w-md mx-auto bg-[#1b1b1b] border-2 border-orange-500 rounded-lg overflow-hidden shadow-lg">
      <div className="flex h-full">
        <div className="w-1/3">
          <img
            src="https://ultimatemotorcycling.com/wp-content/uploads/2018/01/2017-bmw-usa-motorcycle-sales-696x522.jpg"
            alt="Imagem de exemplo"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-2/3 p-2 flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-2 text-white">Título do Card</h2>
          <p className="text-gray-400">Esta é a descrição do card. Ela pode conter várias informações sobre o conteúdo que está sendo exibido.</p>
        </div>
      </div>
    </div>
  );
};

export default CardVisto;
