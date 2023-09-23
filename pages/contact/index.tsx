import publicAxios from "@/services/instance/publiceAxios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { setUser } from "@/store/user-slice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";

type Inputs = {
    name: string,
    email: string,
    message: string
}

const About = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        toast.success(`ارسال شد .`, {
            position: "top-right",
            autoClose: 3000,
            closeOnClick: true,
        });
        reset();
    }

    return (
        <section className='flex items-center justify-center w-full px-4 sm:px-8 lg:px-4 2xl:px-32 pt-8'>
            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col p-8 rounded-md  border-[0px] lg:border-[1px] lg:bg-white w-full lg:w-[40rem]">
                <div className="flex justify-center w-full ">
                    <Link href={'/'}   >
                        <Image alt="لوگو" src={'/Images/logo2.png'} width={300} height={200} className="w-24 h-16" />
                    </Link>
                </div>
                <div className="my-4">
                    <p className="text-xl font-semibold">ارتباط با ما</p>
                </div>
                <div className="form-control w-full relative pb-8">
                    <label className="label">نام </label>
                    <input type="text" placeholder="نام "
                        {...register('name', { required: "نام را وارد کنید" })}
                        className="input input-bordered input-primary w-full text-base-content" />
                    {errors.name &&
                        <label className="label text-error absolute bottom-0">
                            <span className="label-text-alt text-error">{errors.name.message}</span>
                        </label>}
                </div>
                <div className="form-control w-full relative pb-8">
                    <label className="label">رمز عبور</label>
                    <input type="email" placeholder="ایمیل"
                        {...register('email', { required: " ایمیل را وارد کنید ." })}
                        className="input input-bordered input-primary w-full text-base-content" />
                    {errors.email &&
                        <label className="label text-error absolute bottom-0">
                            <span className="label-text-alt text-error">{errors.email.message}</span>
                        </label>}
                </div>
                <div className="form-control w-full relative pb-8">
                    <label className="label">پیام</label>
                    <textarea placeholder="پیام" 
                        {...register('message', { required: " پیام را وارد کنید ." })}
                        className="textarea  textarea-primary w-full text-base-content h-[8rem]" />
                    {errors.message &&
                        <label className="label text-error absolute bottom-0">
                            <span className="label-text-alt text-error">{errors.message.message}</span>
                        </label>}
                </div>
                <button className="btn btn-primary m-0 mt-8">ورود</button>

            </form>
        </section>
    )
}

export default About