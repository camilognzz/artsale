import { Event } from "../domain/entities/Event"; 
import ListEvent from "@/components/eventlist/ListEvent";


const Eventos = () => {
    const dataSource: Event[] = [
        {
            id: 1,
            date: "2024-09-15",
            title: "Evento de Arte",
            description: "Un evento increíble sobre arte.",
            thumbnail: "/images/cuadro1.png",
          },
          {
            id: 2,
            date: "2024-10-05",
            title: "Conferencia de Diseño",
            description: "Explora las últimas tendencias en diseño.",
            thumbnail: "/images/cuadro1.png",
          },
          {
            id: 3,
            date: "2024-10-05",
            title: "Conferencia de Diseño",
            description: "Explora las últimas tendencias en diseño.",
            thumbnail: "/images/cuadro1.png",
          },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
      <div className="titulo">
        <h4 className="font-bold text-center text-4xl">
          {"Reserva entradas para"}
        </h4>
        
        <h2 className="text-center stroke-black  text-4xl mt-1 texto-borde">
          próximos eventos
        </h2>
      </div>
      <div className="mt-5">
      <ListEvent dataSource={dataSource} />
      </div>
      </div>
    )
}

export default Eventos;