/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";

let products = [
    {
        title: "Analog Way",
        description:
            "Analog Way's website transformed with a dynamic, story-driven homepage and streamlined design, redefining their digital presence to attract leads and engage users.",
        live: true,
        case: false,
        bgColor: "hover:bg-blue-900",
    },
    {
        title: "Brightwave",
        description:
            "A scalable and dynamic website with a bold visual identify to reflect Brightwaves' evolution from an ambitious AI-driven startup to a mature leader in the financial sector.",
        live: true,
        case: false,
        bgColor: "hover:bg-gray-600",
    },

    {
        title: "YIR 2021",
        description:
            "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
        live: true,
        case: true,
        bgColor: "hover:bg-violet-700",
    },
    {
        title: "Showcase",
        description:
            "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
        live: true,
        case: true,
        bgColor: "hover:bg-[#ff5f2d]",
    },
];

export default function Products() {
    const [pos, setPos] = useState(0);

    const mover = (val) => {
        setPos(val * 23);
    };

    return (
        <div className="relative mt-32">
            {products.map((elem, index) => (
                <Product key={elem?.title} value={elem} mover={mover} count={index} />
            ))}
            <div className="w-full h-full absolute top-0 pointer-events-none">
                <motion.div
                    initial={{ y: pos, x: "-40%" }}
                    animate={{ y: pos + `rem` }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
                    className="window absolute bg-white w-[28rem] h-[23rem] left-[44%] overflow-hidden"
                >
                    <motion.video
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className="w-full h-full object-cover"
                        src="/video2.webm"
                        muted
                        loop
                        autoPlay
                    ></motion.video>
                    <motion.video
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className="w-full h-full object-cover"
                        src="/video1.webm"
                        muted
                        loop
                        autoPlay
                    ></motion.video>
                    <motion.video
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className="w-full h-full object-cover"
                        src="/video3.webm"
                        muted
                        loop
                        autoPlay
                    ></motion.video>
                    <motion.video
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }}
                        className="w-full h-full object-cover"
                        src="/video4.webm"
                        muted
                        loop
                        autoPlay
                    ></motion.video>
                </motion.div>
            </div>
        </div>
    );
}
