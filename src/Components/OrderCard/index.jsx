function OrderCard(props) {
    const {id, title, imageUrl, price, handleDelete} = props
    let renderIcon 
    if(handleDelete){
      renderIcon =         <svg
      onClick={() => handleDelete(id)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6 text-black cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    }

  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <figure className="h-20 w-20">
          <img className="w-full h-full rounded-lg object-cover"  src={imageUrl} alt={title} />
        </figure>
        <p className="text-sm font-light "></p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-semibold">${price}</p>
        {renderIcon}
      </div>
    </div>
  );
}

export default OrderCard;
