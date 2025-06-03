import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Projects from "./components/Products";
import Products from "./components/Products";
import Marquees from "./components/Marquees";

export default function App() {
    return (
        <div className="w-full bg-zinc-900 text-white font-['satoshi_variable']">
            <Navbar />
            <Work />
            <Stripes />
            <Products />
            <Marquees />
        </div>
    );
}
