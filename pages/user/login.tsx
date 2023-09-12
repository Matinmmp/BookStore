import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

type Inputs = {
    username: string,
    password: string,
    rememberme: boolean
}

const login = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const user = {
            username: data.username,
            password: data.password
        }
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col p-8 rounded-md  border-[0px] lg:border-[1px] lg:border-gray-300 w-full lg:w-[25rem]">
                <div className="flex justify-center w-full ">
                    <Link href={'/'}   >
                        <Image alt="لوگو" src={'/Images/logo2.png'} width={300} height={200} className="w-24 h-16" />
                    </Link>
                </div>
                <div className="my-4">
                    <p className="text-xl font-semibold">ورود</p>
                </div>
                <div className="form-control w-full relative pb-7">
                    <label className="label">نام کاربری</label>
                    <input type="text" placeholder="نام کاربری"
                        {...register('username', { required: "نام کاربری را وارد کنید" })}
                        className="input input-bordered input-primary w-full text-base-content" />
                    {errors.username &&
                        <label className="label text-error absolute bottom-0">
                            <span className="label-text-alt text-error">{errors.username.message}</span>
                        </label>}
                </div>
                <div className="form-control w-full relative pb-7">
                            <label className="label">رمز عبور</label>
                            <input type="text" placeholder="رمز عبور"
                                {...register('password', { required: "رمز عبور را وارد کنید ." })}
                                className="input input-bordered input-primary w-full text-base-content" />
                            {errors.password &&
                                <label className="label text-error absolute bottom-0">
                                    <span className="label-text-alt text-error">{errors.password.message}</span>
                                </label>}
                        </div>

                <button className="btn btn-primary m-0 mt-8">ورود</button>

            </form>
        </div>


    )
}

export default login
