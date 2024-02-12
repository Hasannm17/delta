type CategoriesHero = {
  name: string;
  imageurl: string;
};

const CategoriesHero = ({ name, imageurl }: CategoriesHero) => {
  return (
    <section
      className="w-full h-[400px] flex flex-col justify-center items-start gap-y-7 p-10 "
      style={{
        backgroundImage: `url(${imageurl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-white w7 text-[3rem] ml-10 ">{name}</h1>
    </section>
  );
};

export default CategoriesHero;
