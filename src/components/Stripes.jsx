import Stripe from "./Stripe";

export default function Stripes() {
    let stripes = [
        {
            url: "/logo1.svg",
            number: 48,
        },
        {
            url: "/logo2.svg",
            number: 2,
        },
        {
            url: "/logo3.svg",
            number: 11,
        },
        {
            url: "/logo1.svg",
            number: 32,
        },
        {
            url: "/logo2.svg",
            number: 9,
        },
        {
            url: "/logo3.svg",
            number: 5,
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
