import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";

faker.seed(100);

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));

  const [products] = useState(productArray);

  return (
    <section className="w-full py-8">
      <div className="w-5/6 mx-auto flex flex-wrap gap-10 justify-center">
        {products.map((product) => (
          <div key={product.id}>
            <SingleProduct product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
