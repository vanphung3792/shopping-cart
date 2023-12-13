import StoreItem from "../components/StoreItem"
import storeItems from "../data/items.json"

const Store = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-gray-800">STORE</h1>
      <div
        className="
          flex
          flex-col
          md:flex-row
          md:flex-wrap
          gap-10
          mt-10
          justify-center
        "
      >
        {storeItems.map(item => (
          <div key={item.id}
            className="
              bg-gray-100
              rounded-lg
              flex
              flex-col
              w-[400px]
              border-2
              border-gray-00
            "
          >
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  )
}
export default Store