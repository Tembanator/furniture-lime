export default function NavButton({ icon, withPill, pillAmount, onClick, isInWishlist }) {

    return (
        <button
            onClick={onClick}
            className={`${!isInWishlist ? 'bg-lime-200 hover:bg-lime-300' : 'bg-red-400 text-white'} rounded-full p-2  relative`}
            disabled={isInWishlist}
        >
            {icon}
            {withPill &&
                <span className='absolute -top-3 -right-3 rounded-full text-xs font-bold text-white bg-red-500 py-1 px-2'>{pillAmount}</span>}
        </button>
    )
}
