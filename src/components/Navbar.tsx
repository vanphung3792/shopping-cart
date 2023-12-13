import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div
        className="
            flex
            flex-row
            justify-between
            items-center
            bg-neutral-100
            px-20
            py-3
            shadow-sm
            text-lg
        "
    >
        <nav
            className="
                flex
                gap-5
                uppercase
                font-semibold
                text-gray-800
            "
        >
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/store"}>Store</NavLink>
            <NavLink to={"/about"}>About</NavLink>
        </nav>
        <button
            className="
                bg-white
                text-blue-600
                p-2
                rounded-full
                border-blue-600
                border-[1px]
                relative
                flex
                justify-center
                items-center
                hover:bg-blue-600
                hover:text-white
            "
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <div
                className="
                    bg-red-500
                    text-white
                    rounded-full
                    w-5
                    h-5
                    text-sm
                    absolute
                    flex
                    items-center
                    justify-center
                    translate-x-3/4
                    translate-y-3/4
                "
            >3</div>
        </button>
    </div>
  )
}
export default Navbar