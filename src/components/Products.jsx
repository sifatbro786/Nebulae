import Product from "./Product";

export default function Products() {
    let products = [
        {
            title: "arquitel",
            description:
                "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for customers that",
            live: true,
            case: false,
        },
        {
            title: "TTR",
            description:
                "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for customers that",
            live: true,
            case: false,
        },
        {
            title: "YIR 2022",
            description:
                "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for customers that",
            live: true,
            case: true,
        },
        {
            title: "Yahoo!",
            description:
                "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for customers that",
            live: true,
            case: true,
        },
    ];
    return (
        <div>
            {products.map((elem) => (
                <Product key={elem?.title} value={elem} />
            ))}
        </div>
    );
}
