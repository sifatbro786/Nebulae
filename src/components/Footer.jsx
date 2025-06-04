import { Link } from "react-router";
import footerImg from "/public/footer.jpg";

export default function Footer() {
    return (
        <div className="w-full mt-10">
            <div className="max-w-screen-xl mx-auto py-10 flex gap-24">
                <div className="basis-1/2">
                    <h2 className="text-[12rem] font-semibold leading-none tracking-tight">
                        Nebulae.
                    </h2>
                </div>
                <div className="basis-1/2 flex gap-4">
                    <div className="basis-1/3">
                        <h4 className="mb-8 text-zinc-400">Socials</h4>
                        {["instagram", "twitter (x?)", "LinkedIn"].map((item) => (
                            <Link
                                to={"/"}
                                key={item}
                                className="block mt-2 text-zinc-600 capitalize hover:text-zinc-200 duration-200"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                    <div className="basis-1/3">
                        <h4 className="mb-6 text-zinc-400">Sitemap</h4>
                        {["home", "work", "careers", "contact"].map((item) => (
                            <Link
                                to={"/"}
                                key={item}
                                className="block mt-2 text-zinc-600 capitalize hover:text-zinc-200 duration-200"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                    <div className="basis-1/2 flex flex-col items-end">
                        <p className="text-right text-zinc-300">
                            Nebulae is a pioneering digital agency driven by design and empowered by
                            technology.
                        </p>
                        <img src={footerImg} alt="footer-logo" className="object-cover mt-10" />
                    </div>
                </div>
            </div>
        </div>
    );
}
