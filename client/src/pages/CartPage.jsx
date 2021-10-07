
import CartItem from "../components/CartItem";

const CartPage = ({cartItems, onAdd, onRemove, onDelete}) => {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.count, 0);
  return (
    <>
      <div className="flex flex-wrap relative container mx-auto">
      {cartItems.length > 0 && cartItems.map(cartItem => (
        <CartItem key={cartItem.id} product={cartItem} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete}/>
      ))}
      </div>
      <div className="fixed bottom-0 flex items-center bg-black h-16 w-full">
        <div className="container mx-auto text-white text-lg font-medium">
          Цена: {totalPrice}тг
        </div>
      </div>
    </>
  )
}

export default CartPage
