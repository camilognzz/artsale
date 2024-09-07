import { EventCardProps } from "./dtos";

const ItemEvent = ({ event, isReversed }: EventCardProps) => {
  let { id, date, title, description, thumbnail } = event;

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`flex flex-col md:flex-row ${
          isReversed ? "md:flex-row-reverse" : ""
        } mb-6 w-full max-w-[1200px] hover:cursor-pointer hover:bg-gray-100 group`}
      >
        <div className="flex-1 md:w-2/3">
          <div className="relative w-full h-[300px]">
            <img
              src={thumbnail || "/images/cuadro1.png"}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-4 flex flex-col justify-start">
          <div className="bg-rose-600 text-white px-3 py-1 mb-4 self-start">
            {date}
          </div>
          <h3 className="text-gray-800 text-3xl font-bold mb-3 group-hover:underline group-hover:text-gray-900 transition-all duration-300 ease-in-out">
            {title}
          </h3>{" "}
          <p className="text-gray-600 mb-2 text-sm">{description}</p>
          <a
            href="#"
            className="text-amber-400 hover:text-amber-600 text-sm self-start border-b border-amber-400 hover:border-amber-600"
          >
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemEvent;
