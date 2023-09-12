import { addToCart, deleteFromCart } from '../../store/shopingCart-slice';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import { BsTrash } from 'react-icons/bs';
import { Cart, Product } from '@/models/Types';
import { toast } from 'react-toastify';

interface IProps {
    product: Cart
    quantity: number
}


const NumericUpDown = ({ product, quantity }: IProps) => {
    const cartList = useSelector((state: RootState) => state.shopingCart.cartList)
    const dispatch = useDispatch()

    const handleDeleteFromShopingCart = () => {
        dispatch(deleteFromCart(({ ...product, count: 1 })));
        toast.success(`${product.name} از سبد خرید حذف شد .`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
        });
    }

    const handleAddToShopingCart = () => {
        if (product.count < quantity)
            dispatch(addToCart(({ ...product, count: 1 })))
    }

    return (
        <div className='flex items-center w-[6rem] h-[3rem] text-primary px-2 shadow-md shadow-gray-400 rounded-xl'>
            <span onClick={handleAddToShopingCart}
                className="cursor-pointer ">
                    <AiOutlinePlus className={`${product.count === quantity && 'text-blue-200'}`}/>
                    </span>
            <span className='w-full text-center'>{product.count}</span>
            {product.count === 1 ?
                <BsTrash className="cursor-pointer text-3xl" onClick={handleDeleteFromShopingCart} /> :
                <AiOutlineMinus className="cursor-pointer"
                    onClick={() => dispatch(deleteFromCart(({ ...product, count: 1 })))} />
            }

        </div>
    )
}

export default NumericUpDown
