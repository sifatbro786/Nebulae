export default function Work() {
    let images = [
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
