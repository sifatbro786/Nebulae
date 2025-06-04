import Stripe from "./Stripe";

export default function Stripes() {
    let stripes = [
        {
            url: "/logo1.svg",
            number: 48,
            border: true,
        },
        {
            url: "/logo2.svg",
            number: 2,
            border: true,
        },
        {
            url: "/logo3.svg",
            number: 11,
            border: true,
        },
        {
            url: "/logo1.svg",
            number: 32,
            border: true,
        },
        {
            url: "/logo2.svg",
            number: 9,
            border: true,
        },
        {
            url: "/logo3.svg",
            number: 5,
            border: false,
        },
    ];

    return (
        <div className="flex items-center mt-32">
            {stripes.map((elem, index) => (
                <Stripe value={elem} key={index} />
            ))}
        </div>
    );
}
