export default function Stripe({ value }) {
    return (
        <div className="w-[16.66%] px-10 py-5 border-y-[2px] border-r-[2px] border-zinc-600 flex items-center justify-between">
            <img src={value?.url} alt={value?.url} className="object-cover" />
            <span className="font-medium text-xs">{value?.number}</span>
        </div>
    );
}
