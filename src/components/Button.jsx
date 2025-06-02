import { IoIosReturnRight } from "react-icons/io";

export default function Button({ children }) {
    return (
        <button className="min-w-40 px-4 py-2 bg-zinc-100 text-black text-sm font-medium rounded-full flex items-center justify-between">
            {children}
            <IoIosReturnRight />
        </button>
    );
}
