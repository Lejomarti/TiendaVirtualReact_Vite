import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import {totalPrice} from "../../utils"

import "./styles.css";

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  function handleDelete(id){
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts (filteredProducts)
  }

  function handleCheckOut(){
    const orderToAdd = {
      date: "11.01.24",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
    
  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <div className="cursor-pointer">
          <svg
            onClick={() => context.closeCheckoutSideMenu()}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">

      {context.cartProducts.map(product => (
        
        <OrderCard
        id={product.id}
        key={product.id}
        title={product.title}
        imageUrl={product.images}
        price={product.price}
        handleDelete = {handleDelete}
        />
      ))
    }
    </div>
    <div className="px-6 mb-6">
      <p className="flex justify-between items-center mb-2">
        <span className="font-light">Total:</span>
        <span className="font-medium text-xl">${totalPrice(context.cartProducts)}</span>
      </p>
      <Link to="/my-orders/last">
      <button className="w-full bg-black py-3 text-white rounded-sm" onClick={()=> handleCheckOut()}>Checkout</button>
      </Link>
    </div>
    </aside>
  );
}

export default CheckoutSideMenu;
