import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-orange-500 font-bold text-lg">
        RifaExpress
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes className="text-orange-500 text-2xl" /> : <FaBars className="text-orange-500 text-2xl" />}
      </div>
      <div
        className={`fixed top-0 right-0 h-full bg-gray-900 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-[90%] md:w-auto md:static md:transform-none md:flex md:flex-row md:space-x-4 md:bg-transparent md:h-auto md:p-0`}
      >
        {/* O ícone FaTimes está visível apenas na versão mobile */}
        <div className="flex justify-start p-6 md:hidden">
          <FaTimes className="text-orange-500 text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
        <div className="flex flex-col items-center h-full md:flex-row md:items-center md:justify-end md:space-x-4">
          <a href="#rifa" className="text-gray-400 hover:text-white text-lg mb-4 md:mb-0">Rifa</a>
          <a href="#meus-pedidos" className="text-gray-400 hover:text-white text-lg mb-4 md:mb-0">Meus Pedidos</a>
          <a href="#ultimos-sorteios" className="text-gray-400 hover:text-white text-lg">Últimos sorteios</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
