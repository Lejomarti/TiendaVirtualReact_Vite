import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const chevronLeftIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 text-black cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1)
  if (index==="last") index = context.order?.length -1


  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          {chevronLeftIcon}
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order && context.order.length > 0 ? (
          context.order
            // .slice(-1)[0]
            [index]
            ?.products.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images}
                price={product.price}
              />
            ))
        ) : (
          <p>No hay productos en la orden.</p>
        )}
      </div>
    </Layout>
  );
}

export default MyOrder;