import React from "react";
import { flexing } from "../utils";
import ProductCard from "./ProductCard";

const Star = () => {
  return (
    <section className={`flex  flex-col  justify-center items-center mt-10 `}>
      <h1 className="m-5 text-[2rem]  w5">Our Star Products</h1>
      <div className="flex flex-wrap gap-x-7">

      <ProductCard
        image="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Miss"
        sub="lotion"
      />
      <ProductCard
        image="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Miss"
        sub="lotion"
      />
      <ProductCard
        image="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Miss"
        sub="lotion"
      />
      <ProductCard
        image="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Miss"
        sub="lotion"
      />
      </div>
     
    </section>
  );
};

export default Star;
