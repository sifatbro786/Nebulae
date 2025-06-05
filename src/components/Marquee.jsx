/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Marquee({ imgUrls, direction = "left" }) {
    const xInitial = direction === "left" ? 0 : "-100%";
    const xAnimate = direction === "left" ? "-100%" : "0%";

    return (
        <div className="flex w-full overflow-hidden">
            {[...Array(2)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ x: xInitial }}
                    animate={{ x: xAnimate }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex shrink-0 gap-40 py-10 pr-40"
                >
                    {imgUrls.map((url, idx) => (
                        <img src={url} alt="logo" key={idx} className="w-[6vw]" />
                    ))}
                </motion.div>
            ))}
        </div>
    );
}
