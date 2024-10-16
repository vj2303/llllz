import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { X } from "lucide-react"
import axios from 'axios'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { ClipLoader } from 'react-spinners';
import GoogleAnalytics from '../../components/GoogleAnalytics';



const GiftCardModal = ({ intialInfo, handleCloseModal }) => {

    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            // document.body.appendChild(script);

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: intialInfo
    })
    useEffect(() => {
        reset(intialInfo)
    }, [intialInfo])

    const handleCreatePayment = async (data) => {
        try {
            const res = await axios({
                method: "post",
                url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/salon-pro/create/order`,
                params: {
                    verify: process.env.NEXT_PUBLIC_VERIFY,
                    amount: data.amount * 100,
                    currency: "INR"
                },
                headers: {
                    "Accept": "application/json",
                    "Content-Type": 'application/json'
                },
            })

            handleCloseModal()
            return res.data
        } catch (error) {
            swal("Something went wrong")
        }
    }


    const handle = async (data) => {

        const res = await handleCreatePayment(data)
        const response = await initializeRazorpay();
        if (!response) {
            swal("Razorpay SDK Failed to load");
            return;
        }
        // loaderRef.current.showModal()
        const options = {
            "key": process.env.NEXT_PUBLIC_RAZOR_API_KEY, // Enter the Key ID generated from the Dashboard
            "amount": data.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "LUZO", //your business name
            "description": data?.description,
            // "image": "https://example.com/your_logo",
            "order_id": res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": async function (response) {
                Swal.fire({
                    title: 'Verifying your payment...',
                    html: '',
                    timerProgressBar: true,

                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading()
                    },
                })
                const det = await axios({
                    method: 'post',
                    url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/salon-pro/verify/payment`,
                    headers: {
                        "Accept": "applocation/json",
                        "Content-Type": 'application/json'
                    },
                    params: {
                        verify: process.env.NEXT_PUBLIC_VERIFY,
                        orderId: res.data.id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                    }
                })
                if (det.data.status === "success") {

                    window.gtag('event', 'giftcard_purchase', {
                        'send_to': ['G-6V3T5CZ1YT'],
                        'transaction_id': response.razorpay_payment_id,
                        'currency': 'INR',
                        'value': parseInt(data.amount),
                    });

                    const purchaseRes = await axios({
                        method: "post",
                        url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/v1/giftcard/purchase`,
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": 'application/json'
                        },
                        params: {
                            buyerName: data.name,
                            buyerContact: data.number,
                            amount: data.amount,
                            recipientMessage: data?.description || "",
                            recipientContact: data?.receiverPhoneNumber,
                            recipientName: data?.receiverName,
                        }
                    })

                    

                    if (purchaseRes.data.status === "success") {

                        Swal.close()
                        Swal.fire({
                            title: 'Gift Card purchased successfully',
                            icon: 'success',
                            html: '',
                            timer: 2000, // Close after 2 seconds (2000 milliseconds)
                            timerProgressBar: true,
                            showConfirmButton: false,
                            allowOutsideClick: true,
                        });
                    }
                    else {
                        swal("Something went wrong")

                    }
                }
                else {
                    swal("Something went wrong")

                }
            },
            "features": {
                'wallet_on_checkout': false
            },
            "prefill": {
                "contact": data.number,
                "name": data.name,
                // "email": "" + inputValue.receiverEmail + ""
            },
            "notes": {
                "Receiver Name": data?.receiverName,
                "Receiver Number": data?.receiverPhoneNumber,
                // "Receiver Email": data?.receiverEmail || null ,
                "message": data?.description || "",
            },
            "theme": {
                "color": "#78BCED",
                "hide_topbar": false,
                "backdrop_color": "#ffffff",
                "text_color": "#4d4d4d",
                "primary_color": "#78BCED"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response) {
            swal(response.error.code);
            swal(response.error.description);
            swal(response.error.source);
            swal(response.error.step);
            swal(response.error.reason);
            swal(response.error.metadata.order_id);
            swal(response.error.metadata.payment_id);
        });
        rzp1.open();
    }

    return (
        <form className='flex flex-col p-2 ' onSubmit={handleSubmit(handle)}>
               <GoogleAnalytics />
            <div className='flex justify-between text-[18px] border-b-2 '>
                <p className='font-medium'>Confirm your details</p>
                <button className='bg-black rounded-full aspect-square w-[30px] flex justify-center items-center' type='button' onClick={handleCloseModal}><X color="#ffffff" /></button>

            </div>
            <label className="flex flex-col text-[16px]  py-2 gap-2 font-medium" htmlFor="name">
                Your Name
                <input type="text" placeholder="Enter Name" className="border px-[10px] rounded-[10px] py-[10px] text-black" {...register("name", { required: "Please enter your name" })} />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </label>
            <label className="flex flex-col py-2 gap-2 font-medium" htmlFor="number">
                Your Number
                <input type="text" id='number' min="0" placeholder="Enter Number" className="border w-[295px] sm:w-[442px] px-[10px] rounded-[10px] py-[10px] text-black" {...register("number", { required: "Please enter your number", minLength: { value: 10, message: "Enter a valid number" }, maxLength: { value: 11, message: "Enter a valid number" } })} />
                {errors.number && <span className="text-red-500">{errors.number.message}</span>}
            </label>
            <label className="flex flex-col py-2 gap-2 font-medium" htmlFor="amount">
                Gift Card Amount
                <input type="number" id='amount' placeholder="Enter amount" className="border  w-[295px] sm:w-[442px] px-[10px] rounded-[10px] py-[10px] text-black" {...register("amount", { required: "Value between 250 and 25000", min: { value: 250, message: "Value between 250 and 25000" }, max: { value: 25000, message: "Value between 250 and 25000" } })} />
                {errors.amount && <span className="text-red-500">{errors.amount.message}</span>}
            </label>
            {intialInfo.description && <label className="flex flex-col py-2 gap-2 font-medium" htmlFor="description">
                Message (Optional)
                <input type="text" placeholder="Prompt for yourself" id='description' className="border w-[295px]  sm:w-[442px] px-[10px] rounded-[10px] py-[10px] text-black" {...register("description")} />
            </label>}
            <label className="flex flex-col py-2 gap-2 font-medium" htmlFor="receiverName">
                Receiver&apos;s Name
                <input type="text" id='receiverName' placeholder="Receiver's Name" className="border  sm:w-[442px] w-[295px] px-[10px] rounded-[10px] py-[10px] text-black" {...register("receiverName", { required: "Please enter receiver's name" })} />
                {errors.receiverName && <span className="text-red-500">{errors.receiverName.message}</span>}
            </label>
            <label className="flex flex-col py-2 gap-2 font-medium" htmlFor="receiverPhoneNumber">
                Receiver&apos;s Contact Number
                <input type="number" id='receiverPhoneNumber' min="0" placeholder="Enter Receiver's Number" className="border w-[295px] sm:w-[442px] px-[10px] rounded-[10px] py-[10px] text-black" {...register("receiverPhoneNumber", { required: "Please enter reciever number", minLength: { value: 10, message: "Enter a valid number" }, maxLength: { value: 11, message: "Enter a valid number" } })} />
                {errors.receiverPhoneNumber && <span className="text-red-500">{errors.receiverPhoneNumber.message}</span>}
            </label>
            {intialInfo.receiverEmail && <label className="flex flex-col py-2 gap-2 font-medium" htmlFor="receiverEmail">
                Receiver&apos;s Email (Optional)
                <input type="text" id='receiverEmail' min="0" placeholder="Enter Receiver's Email" className="border w-[295px] sm:w-[442px] px-[10px] rounded-[10px] py-[10px] text-black" {...register("receiverEmail", { required: "Please enter reciever number", validate: (val) => { return val.includes("@") ? true : "Enter a valid Email" } })} />
                {errors.receiverEmail && <span className="text-red-500">{errors.receiverEmail.message}</span>}
            </label>}

            <button className='border mt-[10px]  bg-[#42a5f5] text-[white] rounded-[10px] px-[20px] py-[10px]' type='submit'>Continue</button>
        </form>
    )
}

export default GiftCardModal