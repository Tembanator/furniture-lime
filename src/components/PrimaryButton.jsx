export default function PrimaryButton({ children, onClick, isInCart }) {
    return (
        <button
            onClick={onClick}
            className={`${!isInCart ? 'bg-lime-400 hover:bg-lime-500' : 'bg-gray-300 hover:bg-gray-300 cursor-not-allowed'} w-full pt-2 pb-1 text-sm flex items-center justify-center`}
            disabled={isInCart}>
            {children}
        </button>
    )
}
