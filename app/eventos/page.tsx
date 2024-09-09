import { Event } from "../domain/entities/Event";
import ListEvent from "@/components/eventlist/ListEvent";

const Eventos = () => {
  const dataSource: Event[] = [
    {
      id: 1,
      date: "Nov 15, 2024",
      title: "Reflejos Urbanos",
      description:
        "Instalación que usa video mapping en edificios históricos para explorar la relación entre humanos y ciudades a través de luz y sonido.",
      thumbnail: "/images/evento-1.jpg",
    },
    {
      id: 2,
      date: "Dic 1, 2024",
      title: "Cuerpos en Movimiento",
      description:
        "Exposición colectiva que presenta esculturas, pinturas y performances que exploran la identidad y la corporalidad en el arte contemporáneo.",
      thumbnail: "/images/evento-2.jpg",
    },
    {
      id: 3,
      date: "May 10, 2025",
      title: "Naturaleza reinventada",
      description:
        "Exposición con instalaciones, esculturas y fotos que exploran la relación entre humanos y naturaleza, usando materiales naturales y reflexión ambiental.",
      thumbnail: "/images/evento-3.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="titulo">
        <h4 className="font-bold text-center text-5xl">
          {"Reserva entradas para"}
        </h4>
        <h2 className="contorno font-bold text-center text-5xl mt-1">próximos eventos</h2>
      </div>
      <div className="mb-4">
        <ListEvent dataSource={dataSource} />
      </div>
    </div>
  );
};

export default Eventos;
