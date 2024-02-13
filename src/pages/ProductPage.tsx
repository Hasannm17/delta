import ArticleDescription from "../components/ArticleDescription";

const ProductPage = () => {
  return (
    <>
      <section className="h-screen flex justify-center items-center gap-x-16 -mt-28 ">
        <div>
          <img
            src="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="soap"
            className="h-[400px] w-[400px] "
          />
        </div>






        <article>
          <ArticleDescription
            name="INFINI CLEAR"
            subname="CLARIFYING MILK - CARROT OIL"
            active="Beta-Carotene, Vitamin E"
            benefits="Effectively erases pigment spots

Refines the skin's texture

Skin care in addition to the lotion and cream

Makes your complexion brighter and more even"
            instrunctions="Apply a small amount to the face morning and/or evening to thoroughly cleansed skin (face, neck and neckline).

Just a few drops is enough. Follow up the skincare by applying your lotion or cream.

 

You may also mix the oil with the cream or the lotion."
            sizes="50 ml"
          />
        </article>






      </section>
    </>
  );
};

export default ProductPage;
