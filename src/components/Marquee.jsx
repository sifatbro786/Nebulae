export default function Marquee({ imgUrls }) {
    return (
        <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
            {imgUrls.map((url, idx) => (
                <img src={url} alt="logo" key={idx} className="w-[6vw] flex-shrink-0" />
            ))}
            {imgUrls.map((url, idx) => (
                <img src={url} alt="logo" key={idx} className="w-[6vw] flex-shrink-0" />
            ))}
        </div>
    );
}
