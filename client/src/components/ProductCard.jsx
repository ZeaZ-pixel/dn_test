const ProductCard = ({product, onAdd}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-6 mx-2.5">
      <img className="w-40" src={product.img} alt="Mountain"/>
      <div className="py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base mb-2">
          {product.description}
        </p>
        <div className="font-bold text-xl">Цена: {product.price}тг</div>
      </div>
      <button className=" h-8 w-16 bg-black text-white rounded-md" onClick={() => onAdd(product)}>
        Buy
      </button>
    </div>
  )
}

export default ProductCard
