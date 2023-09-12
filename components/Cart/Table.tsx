import { Cart } from "../../models/Types";
import Row from './Row';

type IProps = {
    products:Cart[];
}

const Table = ({products}:IProps) => {

    return (
        <div className="relative shadow-md sm:rounded-lg overflow-y-auto">
            <table  className="w-full text-left shadow-md min-w-[45rem]" >
                <thead  className=" text-white flex bg-primary  text-[.9rem]">
                    <tr className="flex w-full justify-around text-center">
                        <th scope="col" className="px-6 py-3 w-4/12">
                            نام
                        </th>
                        <th scope="col" className="px-6 py-3 w-2/12">
                             تعداد
                        </th>
                        <th scope="col" className="px-6 py-3 w-3/12">
                             قیمت
                        </th>
                        <th scope="col" className="px-6 py-3 w-3/12">
                            قیمت کل
                        </th>
                    </tr>
                </thead>

                <tbody className="text-center max-h-[55vh] flex flex-col overflow-auto w-full">
                    {products.length > 0 ? products.map((item) => <Row key={item.productId} product={item} />) : null}
                </tbody>
            </table>
        </div>
    )
}

export default Table
