import { XMarkIcon } from "@heroicons/react/20/solid"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import formatCurrency from "../utilities/formatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

const CartItem = ({ id, quantity } : CartItemProps) => {

  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id) 
  if (item == null) return null
  return (
    <div
      className="
        flex
        flex-row
        gap-5
        items-center
      "
    >
      <img src={item.imgUrl} alt={item.name}
        className="
          object-contain
          w-[125px]
          h-[75px]
          bg-neutral-900/10
          p-2
          rounded-sm
        "
      />
      <div className="flex flex-col w-1/2">
        <div className="text-lg">
          {item.name}{" "}
          {quantity > 0 && <span className="text-sm text-neutral-500">x{quantity}</span>}
        </div>
        <div className="text-neutral-500">
          {formatCurrency(item.price)}
        </div>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <div className="text-lg">{formatCurrency(item.price * quantity)}</div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="w-8 h-8 border-[1px] border-solid border-black rounded-sm"><XMarkIcon /></button>
      </div>
    </div>
  )
}
export default CartItem