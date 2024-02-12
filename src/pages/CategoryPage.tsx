import AdCampain from "../components/AdCampain";
import CategoriesHero from "../components/CategoriesHero";
import Star from "../components/Star";

const CategoryPage = () => {
  return (
    <>
      <CategoriesHero
        name="Baby"
        imageurl="https://images.unsplash.com/photo-1591161555818-7b9debeccc07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <Star />
      <AdCampain />
    </>
  );
};

export default CategoryPage;
