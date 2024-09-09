import { ItemCardProps } from "./dtos";

const ItemCard = ({ paint }: ItemCardProps) => {
  let { thumbnail, title, description, price } = paint;
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-md overflow-hidden h-96 flex flex-col transition-transform transform hover:scale-105 group hover:cursor-pointer">
        <img
          className="w-full h-60 object-cover"
          src={thumbnail || "/images/page-principal.png"}
          alt="prueba"
        />
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xl font-bold mt-2 group-hover:underline group-hover:transition-all text-black dark:text-white">
              {title}
            </span>
            <span className="bg-amber-400 dark:bg-gray-800 text-black dark:text-gray-200 px-2 py-1 rounded-md group-hover:bg-gray-900 group-hover:text-white transition-colors">
              ${price}
            </span>
          </div>
          <h2 className="text-black dark:text-gray-300 text-sm">
            {description}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
