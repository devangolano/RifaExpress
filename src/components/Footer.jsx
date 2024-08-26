import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 font-mono w-full text-white p-4">
      <div className="container mx-auto text-center space-y-2 md:text-left md:flex md:justify-between">
        <div>
          <p >Sorteio realizado pela RifaExpress</p>
          <p>Inscrito sob CNPJ: 38.154.733/0001-53</p>
          <p>Endereço em: Rua Vila Rica, Minas Gerais</p>
        </div>
        <div className=" md:mt-0 ">
          <p>Todos os direitos reservados © 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
