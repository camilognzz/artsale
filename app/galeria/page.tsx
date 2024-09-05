import CardList from "@/components/cardlist/CardList";
import { Paint } from "@/app/domain/entities/Paint";
import React from "react";

const Galeria = () => {
  const dataSource: Paint[] = [
    {
      thumbnail: "/images/page-principal.png",
      title: "Cuadro comtemporaneo",
      description: "Cuadroo",
      price: 300000,
    },
    {
      thumbnail: "/images/page-principal.png",
      title: "Cuadro Dos",
      description: "Descripcion cuadro dos",
      price: 233000,
    },
    {
      thumbnail: "/images/page-principal.png",
      title: "Cuadro Tres",
      description: "Descripcion Cuadro Tres",
      price: 178304,
    },
  ];
  return (
    <div className="py-20">
      <div className="titulo">
        <h4 className="uppercase font-semibold text-center mb-1 text-blue-600 text-xl">
          {"Conoce nuestra galeria"}
        </h4>
        <h2 className="text-center font-semibold text-5xl mt-5">
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
