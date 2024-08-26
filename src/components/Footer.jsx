import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 font-mono w-full text-white p-4">
      <div className="container mx-auto text-center md:flex md:flex-col md:justify-center md:items-center md:space-x-4">
        <div className="space-y-2 md:space-y-0 md:py-4 md:flex md:gap-4">
          <p>Sorteio realizado pela RifaExpress</p>
          <p>CNPJ: 38.154.733/0001-53</p>
          <p>Rua Vila Rica, Minas Gerais</p>
        </div>
        <div className="mt-4 md:mt-0">
          <p>Todos os direitos reservados © 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
