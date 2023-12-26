import { XMarkIcon } from "@heroicons/react/20/solid"
import { useShoppingCart } from "../context/ShoppingCartContext"
import CartItem from "./CartItem"
import storeItems from "../data/items.json"
import formatCurrency from "../utilities/formatCurrency"

type  ShoppingCartProps = {
  open: boolean
}

export const ShoppingCart = ({ open } : ShoppingCartProps) => {

  const { closeCart, cartItems } = useShoppingCart()

return (
  <div
    className={`
      absolute 
      bg-gray-900/30 
      w-full 
      h-screen 
      top-0
      ${open ? "visible" : "invisible"}
    `}
  >
    <div className="relative">
      <div className="absolute md:w-1/3 w-4/5 right-0 bg-white px-10 py-5 h-screen">
        {/* CART HEADER */}
        <div className="flex justify-between pt-5 pb-20">
          <h2 className="text-3xl font-semibold">Cart</h2>
          <button onClick={closeCart}><XMarkIcon className="w-10 h-10" /></button>
        </div>

        {/* CART BODY */}
        <div
          className="
            flex
            flex-col
            gap-5
          "
        >
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="font-semibold text-2xl m-5 absolute right-0 pr-5">
          Total: {formatCurrency(
            cartItems.reduce((total, cartItem) => {
            const item = storeItems.find(i => i.id === cartItem.id)
            return total + (item?.price || 0) * cartItem.quantity
            }, 0)
          )}
        </div>
      </div>
    </div>
  </div>
)
}