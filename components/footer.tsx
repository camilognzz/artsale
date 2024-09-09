import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#121212] w-full flex md:flex-row flex-col justify-around items-start p-20 dark:bg-[#121212]">
        <div className="p-5">
          <ul>
            <p className="text-slate-100 font-bold text-3xl pb-6">ArtSale</p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-slate-100 text-2xl cursor-pointer hover:text-gray-500" />
              <FaTwitter className="text-slate-100 text-2xl cursor-pointer hover:text-gray-500" />
              <FaLinkedin className="text-slate-100 text-2xl cursor-pointer hover:text-gray-500" />
              <FaYoutube className="text-slate-100 text-2xl cursor-pointer hover:text-gray-500" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <p className="text-slate-100 font-bold text-2xl pb-4">Explorar</p>
          <ul>
            <li className="text-slate-100 text-md pb-2 font-semibold hover:text-gray-500 cursor-pointer">
              Galería
            </li>
            <li className="text-slate-100 text-md pb-2 font-semibold hover:text-gray-500 cursor-pointer">
              Eventos
            </li>
            <li className="text-slate-100 text-md pb-2 font-semibold hover:text-gray-500 cursor-pointer">
              Artistas
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-slate-100 font-bold text-2xl pb-4">
              Sobre Artsale
            </p>
            <li className="text-slate-100 text-md pb-2 font-semibold hover:text-gray-500 cursor-pointer">
              Nuestra Historia
            </li>
            <li className="text-slate-100 text-md pb-2 font-semibold hover:text-gray-500 cursor-pointer">
              Equipo
            </li>
            <li className="text-slate-100 text-md pb-2 font-semibold hover:text-gray-500 cursor-pointer">
              Prensa y medios
            </li>
          </ul>
        </div>
        <div className="p-5">
          <p className="text-slate-100 font-bold text-2xl pb-4">
            Ayuda y Contacto
          </p>
          <ul className="text-slate-100 text-md pb-2 font-semibold hover:text-gray-500 cursor-pointer">
            Preguntas Frecuentes (FAQ)
          </ul>
          <ul className="text-slate-100 text-md pb-2 font-semibold hover:text-gray-500 cursor-pointer">
            Soporte Técnico
          </ul>
          <ul className="text-slate-100 text-md pb-2 font-semibold hover:text-gray-500 cursor-pointer">
            Contacto
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
