import { IoIosReturnRight } from "react-icons/io";

export default function Button({ children }) {
    return (
        <button className="min-w-36 px-4 py-2 bg-zinc-100 text-black text-sm rounded-full flex items-center justify-between cursor-pointer">
            {children}
            <IoIosReturnRight />
        </button>
    );
}
