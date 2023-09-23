import publicAxios from "@/services/instance/publiceAxios";
import { useForm, SubmitHandler } from "react-hook-form";
import {  useDispatch } from 'react-redux';
import { setUser } from "@/store/user-slice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";

type Inputs = {
    username: string,
    password: string,
    rememberme: boolean
}

const login = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm<Inputs>();
    const dispatch = useDispatch()
    const router = useRouter();
    const handleLocalStorageForUser = () => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('User') !== null) {
                const user = JSON.parse(String(localStorage.getItem("User")));
                if (user) {
                    console.log(user)
                    router.push('/');
                }
            }
        }
    }

    handleLocalStorageForUser();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const user = {
            username: data.username,
            password: data.password
        }
        publicAxios.post('/auth/login', user).then(res => {
            dispatch(setUser(res.data.data.user));
            toast.success(`${res.data.data.user.firstname} خوش آمدید .`, {
                position: "top-right",
                autoClose: 3000,
                closeOnClick: true,
            });
            router.back();
        }).catch(() => console.log("no"));
    }

    return (
        <div className="w-full h-screen flex items-center justify-center ">
            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col p-8 rounded-md  border-[0px] lg:border-[1px] lg:bg-white w-full lg:w-[25rem]">
                <div className="flex justify-center w-full ">
                    <Link href={'/'}   >
                        <Image alt="لوگو" src={'/Images/logo2.png'} width={300} height={200} className="w-24 h-16" />
                    </Link>
                </div>
                <div className="my-4">
                    <p className="text-xl font-semibold">ورود</p>
                </div>
                <div className="form-control w-full relative pb-8">
                    <label className="label">نام کاربری</label>
                    <input type="text" placeholder="نام کاربری"
                        {...register('username', { required: "نام کاربری را وارد کنید" })}
                        className="input input-bordered input-primary w-full text-base-content" />
                    {errors.username &&
                        <label className="label text-error absolute bottom-0">
                            <span className="label-text-alt text-error">{errors.username.message}</span>
                        </label>}
                </div>
                <div className="form-control w-full relative pb-8">
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
