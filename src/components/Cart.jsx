import React, { useEffect, useState, useContext } from "react";
import SingleProduct from "./SingleProduct";
import { Cart } from "../Context";

const CartPage = () => {
  const [total, setTotal] = useState();

  const { cart, setCart } = useContext(Cart);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <section className="w-full">
      <div className="w-5/6 mx-auto">
        <div className="md:w-1/4 mx-auto rounded-md text-center my-7 font-semibold p-3  text-xl border ">
          <p>My Cart</p>
          <p>Total: ${total}</p>
        </div>

        <div className="w-5/6 mx-auto flex flex-wrap gap-10 justify-center">
          {cart.map((c) => (
            <div>
              <SingleProduct
                product={c}
                key={c.id}
                cart={cart}
                setCart={setCart}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CartPage;
