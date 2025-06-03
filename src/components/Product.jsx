import Button from "./Button";

export default function Product({ value }) {
    return (
        <div className="w-full py-20">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                <h2 className="text-6xl font-semibold capitalize">{value?.title}</h2>
                <div className="dets w-1/3">
                    <p className="mb-5">{value?.description}</p>
                    <div className="flex items-center gap-5">
                        {value?.live && <Button>Live Website</Button>}
                        {value?.case && <Button>Case Study</Button>}
                    </div>
                </div>
            </div>
        </div>
    );
}
