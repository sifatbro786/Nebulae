import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";

export default function App() {
    return (
        <div className="w-full bg-zinc-900 text-white font-['satoshi_variable']">
            <Navbar />
            <Work />
            <Stripes />
        </div>
    );
}
