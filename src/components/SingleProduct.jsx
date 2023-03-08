import React, { useContext } from "react";
import { Cart } from "../Context";

const SingleProduct = ({ product }) => {
  const { cart, setCart } = useContext(Cart);


  return (
    <div className="border rounded-md">
      <img src={product.image} className="w-[250px] md:w-[200px]" alt="" />
      <div className="my-3 mx-2 font-semibold">
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
      <div className="flex flex-col gap-3 justify-start  mx-2 mb-3">
        {cart.includes(product) ? (
          <button
            className="rounded-md bg-orange-300  font-semibold text-white px-5 py-1.5  hover:bg-orange-600"
            onClick={() => {
              setCart(cart.filter((p) => p.id !== product.id));
            }}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="button"
            onClick={() => {
              setCart([...cart, product]);
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
