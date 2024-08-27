import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const ProductPage = () => {
  return (
    <div className="bg-[#1b1b1b] text-white min-h-screen flex justify-center items-center">
      <div className="max-w-4xl w-full px-6 pt-24 md:my-28 bg-gray-800 border-gray-500 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            className="w-full max-w-lg rounded-lg"
          >
            <SwiperSlide>
              <img
                className="w-full rounded-lg"
                src="https://www.motorrad-bilder.at/thumbs/995x640/slideshows/291/011877/rizoma-yamaha-mt-07-01.jpg"
                alt="Produto 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full rounded-lg"
                src="https://www.motorrad-bilder.at/thumbs/995x640/slideshows/291/011877/rizoma-yamaha-mt-07-02.jpg"
                alt="Produto 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full rounded-lg"
                src="https://www.motorrad-bilder.at/thumbs/995x640/slideshows/291/011877/rizoma-yamaha-mt-07-02.jpg"
                alt="Produto 2"
              />
            </SwiperSlide>
            {/* Adicione mais slides conforme necessário */}
          </Swiper>
        </div>
        <h1 className="text-2xl text-center font-bold mb-2">SORTEIO DE ANIVERSÁRIO DA TOLEDO NEW CAR 1 ANO</h1>
        <p className="text-center text-sm mb-4">
          Lorem ipsum dolor sit amet onsect adipiscing elit, sed do eiusmo mpor incididunt ut labore et dolore dwad magnaadtempor incididunt ut.
        </p>
        <p className="text-center text-sm mb-4">
          Lorem ipsum dolor sit amet onsect adipiscing elit, sed do eiusmo mpor incididunt ut labore et dolore dwad magnaadtempor incididunt ut.
        </p>
        <div className="space-y-2 mb-6">
          <div className="bg-[#442a14] text-center p-2 rounded-lg border border-orange-600">1º PRÊMIO: YAMAHA MASTER OF TORCH 09 - 2024</div>
          <div className="bg-[#442a14] text-center p-2 rounded-lg border border-orange-600">2º PRÊMIO: YAMAHA MASTER OF TORCH 07 - 2022</div>
          <div className="bg-[#442a14] text-center p-2 rounded-lg border border-orange-600">3º PRÊMIO: HONDA TITAN 169 - 2018</div>
        </div>
        <div className="flex justify-center gap-2 mb-4">
          <div className="bg-gray-800 text-center px-4 py-1 rounded-lg border border-orange-600">
            <p className="font-semibold">MAIOR <br /> COMPRADOR:</p>
            <p>R$2000,00</p>
          </div>
          <div className="bg-gray-800 text-center px-4 py-1 rounded-lg border border-orange-600">
            <p className="font-semibold">NÚMERO DA <br /> SORTE: <span>15</span></p>
            <p>R$600,00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
