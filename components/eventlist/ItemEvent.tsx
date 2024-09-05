import { Event } from "@/app/domainevent/entities/Event";
import { EventCardProps } from "./dtos";
import { Image } from "@nextui-org/react";

const ItemEvent = ({ event, isReversed }: EventCardProps) => {
  let { id, date, title, description, thumbnail } = event;

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 md:w-2/3 max-w-[400px]">
        <div className="relative w-full h-0 pb-[66.66%]">
          {" "}
          {/* Proporción de aspecto 3:2 */}
          <Image
            src={thumbnail || "/images/cuadro1.png"}
            alt={title}
            width={300}
            height={200}
          />
        </div>
      </div>
      <div className="md:w-1/3 bg-white p-6">
        <div className="bg-green-500 text-white px-4 py-2 mb-4">{date}</div>
        <h3 className="text-gray-800 text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-green-500 hover:text-green-700">
          Ver más
        </a>
      </div>
    </div>
  );
};

export default ItemEvent;
