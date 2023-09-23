import Image from "next/image"

const EmptyCart = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <section className="flex flex-col items-center gap-4">
      <Image alt="لوگو" src={'/Images/empty-cart.svg'} width={200} height={200} className="w-[13rem] h-[13rem]" />
      <p className="text-2xl ">سبد خرید شما خالی است!</p>
      </section>
    </div>
  )
}

export default EmptyCart
