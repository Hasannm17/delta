import { useParams } from "react-router-dom";
import ArticleDescription from "../components/ArticleDescription";
import { useQuery } from "@tanstack/react-query";
import { CategoryItems, Item } from "../types";
import { Url, Url_img, en } from "../hooks";
import ProductCard from "../components/ProductCard";
import CategoriesHero from "../components/CategoriesHero";
import Category from "../components/SubCategory";

const ProductPage = () => {
  let { productid, catname } = useParams();

  const { isFetching, error, data } = useQuery<CategoryItems>({
    queryKey: ["items", productid],
    queryFn: () =>
      fetch(`${Url}/${en}/filteritems/${catname}`).then((res) => res.json()),
  });

  if (isFetching) {
    return (
      <div className="w-full flex justify-center my-9">
        <div className="loader flex justify-center items-center h-screen">
          <span className="loader-text">loading</span>
          <span className="load"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

  const selectedItem = data?.items.find(
    (item) => item.id.toString() === productid
  );

  if (!selectedItem) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <CategoriesHero
        name={data?.category?.name}
        imageurl={`${Url_img}/${data?.category?.img_url}`}
      />
      <Category />
      <section className="flex justify-center items-center gap-x-16 mt-32">
        <div>
          <img
            src={`${Url_img}/${selectedItem?.img_url}`}
            alt={selectedItem?.name}
            className="h-[400px] w-[400px]"
          />
        </div>

        <article className="w-[400px]">
          <ArticleDescription
            name={selectedItem?.name}
            subname={selectedItem?.description}
            benefits={selectedItem?.usagee}
            instrunctions="Apply a small amount to the face morning and/or evening to thoroughly cleansed skin (face, neck, and neckline). Just a few drops are enough. Follow up the skincare by applying your lotion or cream. You may also mix the oil with the cream or the lotion."
            sizes={selectedItem?.weight}
          />
        </article>
      </section>

      <article className="flex justify-center items-center mt-20">
        <RandomProductList items={data?.items} />
      </article>
    </>
  );
};

const RandomProductList = ({ items }: { items?: Item[] }) => {
  if (!items) return null;

  // Shuffle the array
  const shuffledItems = [...items].sort(() => Math.random() - 0.5);

  // Take the first four items
  const selectedItems = shuffledItems.slice(0, 4);

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-8">
      {selectedItems.map((item, index) => (
        <ProductCard
          key={index}
          image={`${Url_img}/${item.img_url}`}
          name={item.name}
          sub={item.description}
        />
      ))}
    </div>
  );
};

export default ProductPage;
