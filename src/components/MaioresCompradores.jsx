import React from 'react';

const buyers = [
  { rank: 1, tickets: 399, name: 'Augusto Neves' },
  { rank: 2, tickets: 399, name: 'Augusto Neves' },
  { rank: 3, tickets: 399, name: 'Augusto Neves' },
  { rank: 4, tickets: 399, name: 'Augusto Neves' },
  { rank: 5, tickets: 399, name: 'Augusto Neves' },
  { rank: 6, tickets: 399, name: 'Augusto Neves' },
  { rank: 7, tickets: 399, name: 'Augusto Neves' },
  { rank: 8, tickets: 399, name: 'Augusto Neves' },
];

const MaioresCompradores = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-800 text-white p-3 md:p-6 rounded-md border border-orange-500">
      <h2 className="text-center text-xl font-bold mb-2">Maiores Compradores</h2>
      <p className="text-center text-sm mb-4">usuários com maior número de rifas compradas</p>
      {buyers.map((buyer) => (
        <div
          key={buyer.rank}
          className="flex justify-between items-center p-3 mb-2 border border-orange-500 rounded-md"
        >
          <span>{buyer.rank} - {buyer.tickets} bilhete(s):</span>
          <span>{buyer.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MaioresCompradores;