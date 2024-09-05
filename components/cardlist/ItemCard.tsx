import { ItemCardProps } from "./dtos";

const ItemCard = ({ paint }: ItemCardProps) => {
    let {thumbnail, title, description, price} = paint;
  return (
    <div>
      <div className="card">
        <img
          className="w-full h-full object-cover"
          src={thumbnail || "/images/page-principal.png"}
          alt="prueba"
        />
        <div className="p-5 flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="badge">{description}</span>
            <span className="badge">{price}</span>
          </div>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
