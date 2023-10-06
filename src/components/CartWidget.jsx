import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const CartWidget = () => {
    return (
        <button
            type="button"
            className="relative rounded-full bg-green-600 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <ShoppingCartIcon className="h-6 w-6 text-slate-800" aria-hidden="true" />
            <span className='absolute top-[20px] text-white text-xs font-bold w-[25px] p-[3px] bg-red-500 rounded-full'>6</span>
        </button>
    );
}

export default CartWidget;