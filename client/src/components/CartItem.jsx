const CartItem = ({product, onAdd, onRemove, onDelete}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-6 mx-2.5 relative">
      <div className="absolute top-0 right-0 text-5xl cursor-pointer" onClick={() => onDelete(product)}>&times;</div>
      <img className="w-40" src={product.img} alt="Mountain"/>
      <div className="py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base mb-2">
          {product.description}
        </p>
        <div className="font-bold text-xl">Цена: {product.price}тг</div>
      </div>
      <div className="flex text-lg ">
        <button className="w-8 bg-black  text-white rounded-md" onClick={() => onRemove(product)}>-</button>
        <div className=" font-medium mx-4">{product.count}</div>
        <button className="w-8 bg-black  text-white rounded-md" onClick={() => onAdd(product)}>+</button>
      </div>
    </div>
  )
}

export default CartItem
