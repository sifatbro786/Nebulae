/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Card({ width, start, para, hover = false }) {
    return (
        <motion.div
            whileHover={{ backgroundColor: hover && "#7443ff", padding: "25px" }}
            className={`w-1/2 bg-zinc-800 rounded-xl p-5 duration-200 ${width} min-h-[30rem] flex flex-col justify-between`}
        >
            <div className="w-full">
                <div className="w-full flex justify-between items-center">
                    <h3 className="uppercase">{!start ? "portfolio" : "get in touch"}</h3>
                    <IoIosArrowRoundForward />
                </div>
                <h2 className="text-3xl font-medium mt-5 w-[200px]">
                    {!start ? "Projects & Case Studies" : "Let's get to it. together."}
                </h2>
            </div>
            <div className="down w-full mt-60">
                {start && (
                    <>
                        <h1 className="text-6xl font-semibold tracking-tight leading-none">
                            Start a Project
                        </h1>
                        <button className="w-fit rounded-full py-2 px-4 border-[2px] border-zinc-50 mt-5">
                            Contact Us
                        </button>
                    </>
                )}
                {para && (
                    <p className="text-sm text-zinc-500 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
                        tempora.
                    </p>
                )}
            </div>
        </motion.div>
    );
}
