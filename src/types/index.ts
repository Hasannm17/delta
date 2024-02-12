export type ProductCardType = {
  image: string;
  name: string;
  sub: string;
};

export type Sub = {
  name: string;
};

export type CategoryProps = {
  id: number | boolean;
  name: string  | boolean;
  img_url: string;
};
