import {AiOutlineCloseCircle} from 'react-icons/ai';
interface IProps {
    closeModal: () => void
}
const DeleteModal = ({closeModal}:IProps) => {
    const hendleDeleteProduct=()=>{

    }
    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-60 z-50 ">
            <section className="p-2 rounded-xl shadow-sm shadow-accent absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white dark:bg-base-100">
                <div className="flex flex-col gap-4 min-w-[20rem] min-h-[10rem]" >
                    <div>
                        <AiOutlineCloseCircle className="text-error text-3xl cursor-pointer" onClick={() =>  closeModal() } />
                    </div>
                    <div className='flex-1'>
                      آیا از حذف همه ی محصول ها مطمعن هستید ؟
                    </div>
                    <div className='flex justify-center gap-4 text-white py-1'>
                        <button className='btn btn-success' onClick={hendleDeleteProduct}>بله</button>
                        <button className='btn btn-warning' onClick={closeModal}>خیر</button>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default DeleteModal
