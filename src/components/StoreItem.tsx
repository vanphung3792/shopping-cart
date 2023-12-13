import formatCurrency from "../utilities/formatCurrency"
import Button from "./Button"

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {

    const quantity = 0

  return (
    <div
        className="
            flex
            flex-col
        "
    >
        {/* CARD-IMAGE */}
        <img src={imgUrl} alt={name}
            className="
                h-[250px]
                object-contain
                p-5
            "
        />

        {/* CARD-BODY */}
        <div
            className="
                border-t-[1px]
                border-black
                bg-white
                px-5
                py-3
            "
        >
            <div
                className="
                    flex
                    justify-between
                    text-xl
                    mb-5
                "
            >
                <div className="font-semibold text-2xl">{name}</div>
                <div>{formatCurrency(price)}</div>
            </div>

            {/* CTA */}
            <div
                className="
                "
            >
                {quantity === 0 ? (
                    <Button 
                        label="+ Add to cart" 
                        fullWidth
                    />
                ) : (
                    <div>
                        <div
                            className="
                                flex
                                flex-col
                                justify-center
                                items-center
                                gap-5
                            "
                        >
                            <div
                                className="
                                    flex
                                    flex-row
                                    justify-center
                                    items-center
                                    gap-5
                                "
                            >
                                <Button label="-" />
                                <div>
                                    <span className="font-semibold text-2xl">{`1 `}</span>
                                    in cart
                                </div>
                                <Button label="+" />
                            </div>
                            <div>
                                <Button label="Remove" secondary />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
export default StoreItem