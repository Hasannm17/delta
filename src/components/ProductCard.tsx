import { ProductCardType } from "../types";

const ProductCard = ({ image, name, sub }: ProductCardType) => {
  return (
    <div className=" flex flex-col gap-y-3">
      <img src={image} className="h-72 w-72 rounded-3xl " alt={name} />
      <div className="flex flex-col justify-center items-center">
        <h2 className="w5 text-lg">{name}</h2>
        <h5 className="w4 text-sm">{sub}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
