import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";

const Header = () => {
  const { cart } = useContext(Cart);

  return (
    <section className="w-full py-4 bg-blue-600">
      <nav className="w-5/6 mx-auto">
        <span className="text-center">
          <p className="text-2xl font-bold text-white">
            React Context API tutorial
          </p>
        </span>

        <div className=" w-3/4 mx-auto py-1 flex justify-between ">
          <div>
            <Link to={"/"}>
              <p className="text-white font-semibold">Home Page</p>
            </Link>
          </div>
          <div>
            <Link to={"cart"}>
              <p className="text-white font-semibold">Cart({cart?.length})</p>
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
