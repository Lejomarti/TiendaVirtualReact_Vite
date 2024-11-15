function OrdersCard(props) {
  const { totalPrice, totalProducts } = props;
  const chevronRightIcon = <svg className="h-6 w-6 text-black cursor-pointer"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>

  return (
    <div className="flex justify-between items-center mb-4 border border-black w-80 p-4 rounded-lg">
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
        <span className="font-light">08.11.24</span>
        <span className="font-light">{totalProducts} articles</span>
        </div>
        <p className="flex flex-row gap-2 items-center">
        <span className="font-medium text-xl">${totalPrice}</span>
        {chevronRightIcon}
        </p>
      </div>
    </div>
  );
}

export default OrdersCard;
