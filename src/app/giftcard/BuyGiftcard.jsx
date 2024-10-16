"use client"
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form"
import GiftCardModal from "./GiftCardModal";
import HowToUse from "./HowToUse";
const BuyGiftcard = () => {
  const [amount, setAmount] = useState(null)
  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    defaultValues: amount !== null ? { amount: amount } : undefined
  })
  const [currentForm, setCurrentForm] = useState("senderDetails")
  const [info, setInfo] = useState({})
  const modalRef = useRef(null)


  const handleSubmitFirstForm = (data) => {
    setCurrentForm("recepientDetails")
    setInfo({ ...info, ...data })
  }

  const handleOpenModal = (data) => {
    setInfo({ ...info, ...data })
    modalRef.current.showModal()

  }

  const handleEnterDetailsClick = () => {
    setCurrentForm("senderDetails")
  }
  const handlePaymentClick = () => {
    if (info.name && info.number && info.amount && !errors.name && !errors.number && !errors.amount) {
      setCurrentForm("recepientDetails")
      console.log("running");
    }
  }

  const handleCloseModal = () => {
    setCurrentForm("senderDetails")
    setAmount(null)
    reset()
    modalRef.current.close()
  }

  useEffect(() => {
    reset({ amount: amount })
  }, [amount])

  // useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [currentForm]);

  return (
    <div className="sm:px-[120px] px-[10px] py-[30px]">
      <div className="flex flex-row gap-[20px] cursor-pointer py-[20px]">
        <h1 className={`text-[20px] ${currentForm === "senderDetails" ? "text-[#60A5FA]" : "text-black"} leading-[24px]`} onClick={handleEnterDetailsClick}>Enter Details</h1>
        <h1 className={`text-[20px] ${currentForm === "recepientDetails" ? "text-[#60A5FA]" : "text-black"} leading-[24px]`} onClick={handlePaymentClick}>Payment</h1>
      </div>

      <hr className="border border-b border-[#60A5FA] w-full " />

      {currentForm === "senderDetails" ? <form onSubmit={handleSubmit(handleSubmitFirstForm)} className="flex flex-col sm:flex-row sm:gap-[90px] justify-between px-[20px] sm:px-[50px]">
        <div className="flex flex-col mt-6 w-full">
          <div className="flex flex-col relative w-full">
            <input
              type="text"
              placeholder=" "
              id="name"
              className="block px-[10px] pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none peer"
              {...register("name", { required: "Please enter your name" })}
            />
            <label
              htmlFor="name"
              className={`absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}

            >
              Enter Name
            </label>
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>

          <div className="flex flex-col relative w-full mt-4">
            <input
              type="text"
              min="0"
              placeholder=" "
              id="number"
              className="block px-[10px] pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none peer"
              {...register("number", {
                required: "Please enter your number",
                minLength: { value: 10, message: "Enter a valid number" },
                maxLength: { value: 11, message: "Enter a valid number" }
              })}
            />
            <label
              htmlFor="number"
              className={`absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}

            >
              Enter Number
            </label>
            {errors.number && <span className="text-red-500">{errors.number.message}</span>}
          </div>

          <div className="flex mt-4 flex-col relative w-full mt-4">

            <input type="number" id="amount" placeholder=" " className="block px-[10px] pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none peer" {...register("amount", { required: "Value between 250 and 25000", min: { value: 250, message: "Value between 250 and 25000" }, max: { value: 25000, message: "Value between 250 and 25000" } })} />
            <label
              htmlFor="amount"
              className={`absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}

            >
              Enter Amount
            </label>
            {errors.amount && <span className="text-red-500">{errors.amount.message}</span>}
            <div className="mt-[10px] flex cursor-pointer flex-row gap-[10px]">
              <p className="border text-center font-normal text-[16px]  leading-[24px] rounded-[10px] py-[6px] w-[66px]" onClick={() => setAmount(1000)} type="button">₹ 1,000</p>
              <p className="border text-center font-normal text-[16px]  leading-[24px] rounded-[10px] py-[6px] w-[66px]" onClick={() => setAmount(2000)} type="button">₹ 2,000</p>
              <p className="border text-center font-normal text-[16px]  leading-[24px] rounded-[10px] py-[6px] w-[66px]" onClick={() => setAmount(5000)} type="button">₹ 5,000</p>
              <p className="border text-center font-normal text-[16px]  leading-[24px] rounded-[10px] py-[6px] w-[68px]" onClick={() => setAmount(10000)} type="button">₹ 10,000</p>
            </div>
          </div>
        </div>

        <div>
          <div className="relative w-full mt-5">

            {/* Floating Outlined Textarea */}
            <textarea
              placeholder=" "
              id="description"
              className="block px-[10px] pb-[10px] pt-4 w-full  lg:w-[442px] text-base text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none peer h-[150px] resize-none"
              {...register("description")}
            />
            <label
              htmlFor="description"
              className={`absolute mx-[10px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}

            >
              Message for your loved one! (Optional)
            </label>
          </div>


          <button className="border mt-[10px]  bg-[#42a5f5] text-[white] rounded-[10px] px-[20px] py-[10px]" type="submit">Add receiver&apos;s details</button>
        </div>

      </form> :
        <form onSubmit={handleSubmit(handleOpenModal)} className="flex flex-col justify-between w-full sm:max-w-[50%] px-[20px] sm:px-[50px]">

          <div className="relative w-full mt-6 flex flex-col">
            <input
              type="text"
              placeholder=" "
              className="block px-[10px] pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none peer"

              {...register("receiverName", { required: "Please enter receiver's name" })}
            />
            <label
              htmlFor="receiverName"
              className={`absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}

            >
              Enter Receiver&apos;s Name
            </label>
            {errors.receiverName && (
              <span className="text-red-500 text-sm mt-1">
                {errors.receiverName.message}
              </span>
            )}
          </div>

          <div className="relative w-full mt-4 flex flex-col">
            <input
              type="number"
              min="0"
              placeholder=" "
              className="block px-[10px] pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none peer"

              {...register("receiverPhoneNumber", {
                required: "Please enter receiver's number",
                minLength: { value: 10, message: "Enter a valid number" },
                maxLength: { value: 11, message: "Enter a valid number" }
              })}
            />
            <label
              htmlFor="receiverPhoneNumber"
              className={`absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}

            >
              Receiver&apos;s Contact Number
            </label>
            {errors.receiverPhoneNumber && (
              <span className="text-red-500 text-sm mt-1">
                {errors.receiverPhoneNumber.message}
              </span>
            )}
          </div>


          <div className="relative mt-4 w-full flex flex-col">
            <input
              type="text"
              placeholder=" "
              className="block px-[10px] pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none peer"
              {...register("receiverEmail", {
                validate: (val) => {
                  return !val || val.includes("@") ? true : "Enter a valid Email";
                }
              })}
            />
            <label
              htmlFor="receiverEmail"
              className={`absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}

            >
              Receiver&apos;s Email (Optional)
            </label>
            {errors.receiverEmail && (
              <span className="text-red-500 text-sm mt-1">
                {errors.receiverEmail.message}
              </span>
            )}
          </div>



          <button className="border mt-[12px] self-start  bg-[#42a5f5] text-[white] rounded-[10px] px-[20px] py-[10px]" type="submit">Continue to purchase gift card</button>


        </form>
      }

      <dialog ref={modalRef} className="backdrop:backdrop-blur-sm rounded-2xl shadow-2xl ">
        <GiftCardModal intialInfo={info} handleCloseModal={handleCloseModal} />
      </dialog>

    </div>
  )
}

export default BuyGiftcard