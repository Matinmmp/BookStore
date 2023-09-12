import { useQuery } from "@tanstack/react-query";
import { Cart} from "../../models/Types";
import { getProductById } from "@/services/api/product";
import { separate } from "@/utils/seperator";
import NumericUpDown from "../Products/NumericUpDown";


interface IProps {
    product: Cart;
}
const Row = ({ product }: IProps) => {

    return (
        <tr className=" flex justify-around items-center hover:bg-primary-focus hover:text-white transition-all w-full">
            <td className="px-6 py-4 w-5/12">
                <div className="flex items-center gap-4">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img src={`http://localhost:8000/images/products/images/${product.image}`} alt="Avatar Tailwind CSS Component" />
                        </div>
                        
                    </div>
                    <p>{product.name}</p>
                </div>
            </td>

            <td className="px-6 py-4 w-3/12">
            <NumericUpDown product={product}  />
            </td>

            <td className="  w-3/12 text-center ">
            {separate(product.price)} تومان
                
            </td>
        </tr>
    )

}

export default Row
