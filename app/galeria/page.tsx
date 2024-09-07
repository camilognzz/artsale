import CardList from "@/components/cardlist/CardList";
import { Paint } from "@/app/domain/entities/Paint";
import React from "react";

const Galeria = () => {
  const dataSource: Paint[] = [
    {
      thumbnail: "/images/cuadro-1.jpg",
      title: "Chapeau à pois",
      description: "Martine Fauve Dechavanne",
      price: 2.191,
    },
    {
      thumbnail: "/images/cuadro-2.jpg",
      title: "Courant contraire",
      description: "Ralph Resch",
      price: 1.487,
    },
    {
      thumbnail: "/images/cuadro-3.jpg",
      title: "The Tree of Life",
      description: "Kateryna Ocheredko",
      price: 1.821,
    },
    {
      thumbnail: "/images/cuadro-4.jpg",
      title: "Soul Flower 4 (Tamashii no hana 4)",
      description: "Saki Otsuka",
      price: 1.153,
    },
    {
      thumbnail: "/images/cuadro-5.jpg",
      title: "A Jean Paul Gaulthier",
      description: "David Jamin",
      price: 1.932,
    },
    {
      thumbnail: "/images/cuadro-6.jpg",
      title: "Love you anyway",
      description: "Poonam Choudhary",
      price: 1.501,
    },
  ];
  return (
    <div className="py-12">
      <div className="titulo">
        <h4 className="font-bold text-center mb-1 text-5xl">
          {"Conoce nuestra galería"}
        </h4>
        <h2 className="contorno text-center font-bold text-5xl mt-5">
          ¡Elige tu preferida!
        </h2>
      </div>
      <div className="mt-5">
        <CardList dataSource={dataSource} />
      </div>
    </div>
  );
};

export default Galeria;
