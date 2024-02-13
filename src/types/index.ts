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
  name: string | boolean;
  img_url: string;
};

export type Category = {
  id: number;
  name: string | undefined;
  img_url: string;
};

export type Item = {
  id: number;
  name: string | undefined;
  img_url: string;
  category_id: number;
  description: string;
  usagee: string;
  weight: string;

};

export type CategoryItems = {
  category: Category;
  items: Item[];
};
