import { useScroll } from "framer-motion";
import { useState } from "react";

let imagesData = [
    {
        url: "/work1.png",
        top: "50%",
        left: "50%",
        isActive: false,
    },
    {
        url: "/work3.jpg",
        top: "56%",
        left: "44%",
        isActive: false,
    },
    {
        url: "/work4.png",
        top: "45%",
        left: "56%",
        isActive: false,
    },
    {
        url: "/work2.png",
        top: "60%",
        left: "53%",
        isActive: false,
    },
    {
        url: "/work5.png",
        top: "43%",
        left: "40%",
        isActive: false,
    },
    {
        url: "/work6.png",
        top: "65%",
        left: "55%",
        isActive: false,
    },
];

export default function Work() {
    const [images, setImages] = useState(imagesData);
    const { scrollYProgress } = useScroll();

    scrollYProgress.on("change", (data) => {
        function imagesShow(arr) {
            setImages((prev) =>
                prev.map((item, index) =>
                    arr.indexOf(index) === -1
                        ? { ...item, isActive: false }
                        : { ...item, isActive: true },
                ),
            );
        }

        switch (Math.floor(data * 100)) {
            case 0:
                imagesShow([]);
                break;
            case 1:
                imagesShow([0]);
                break;
            case 3:
                imagesShow([0, 1]);
                break;
            case 5:
                imagesShow([0, 1, 2]);
                break;
            case 7:
                imagesShow([0, 1, 2, 3]);
                break;
            case 9:
                imagesShow([0, 1, 2, 3, 4]);
                break;
            case 12:
                imagesShow([0, 1, 2, 3, 4, 5]);
                break;
        }
    });

    return (
        <div className="w-full mt-10">
            <div className="relative max-w-screen-xl mx-auto text-center">
                <h1 className="text-[30vw] leading-none font-medium tracking-tight select-none">
                    work
                </h1>
                <div className="absolute top-0 w-full h-full">
                    {images.map(
                        (elem) =>
                            elem?.isActive && (
                                <img
                                    key={elem}
                                    src={elem?.url}
                                    alt={elem?.url}
                                    className="absolute w-60 h-[200px] rounded-lg object-cover -translate-x-1/2 -translate-y-[50%]"
                                    style={{ top: elem?.top, left: elem?.left }}
                                />
                            ),
                    )}
                </div>
            </div>
        </div>
    );
}
