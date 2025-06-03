import { Link } from "react-router";
import Button from "./Button";
import { LuBlend } from "react-icons/lu";

export default function Navbar() {
    return (
        <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b border-zinc-700">
            <div className="nLeft flex items-center">
                {/* //* logo */}
                <Link to="/" className="flex items-center gap-2 text-lg">
                    <LuBlend />
                    <h3 className="uppercase font-semibold">Nebulae</h3>
                </Link>

                {/* //* navLinks */}
                <div className="links flex gap-14 ml-20">
                    {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
                        <Link
                            to="/"
                            className="text-sm font-medium flex items-center gap-1"
                            key={elem}
                        >
                            {elem.length === 0 ? (
                                <span className="w-[1px] h-[24px] bg-zinc-700 cursor-default"></span>
                            ) : (
                                <>
                                    {index === 1 && (
                                        <span
                                            style={{ boxShadow: "0 0 0.45em #00FF19" }}
                                            className="inline-block w-1.5 h-1.5 rounded-full bg-green-500"
                                        ></span>
                                    )}
                                </>
                            )}
                            {elem}
                        </Link>
                    ))}
                </div>
            </div>

            {/* //* button */}
            <Button>Get Started</Button>
        </div>
    );
}
