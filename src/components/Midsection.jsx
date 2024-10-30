export default function Midsection() {
    return (
        <div className='bg-neutral-700 w-full p-8 flex flex-col sm:flex-row  items-center justify-center gap-6'>
            <div className="h-full rounded-3xl overflow-hidden flex-1 flex-grow">
                <img className="h-full object-cover" src="/lamp1.jpeg" alt="image" />
            </div>
            <div className="flex flex-col space-y-5 flex-1 flex-grow text-neutral-300">
                <h3 className="text-3xl">A furniture-buying experience that works for you.
                    It’s simple, really.</h3>
                <p>We founded PowerFurniture in 2019 to fix what traditional furniture retailers have always missed—like offering long-lasting materials, customizable options, and outstanding service.</p>
                <p>Today, we’re still 100% focused on these things. From selecting a PowerFurniture piece to seeing it set up in your home, we ensure the entire experience is tailored to your needs.</p>
            </div>
        </div>
    )
}
