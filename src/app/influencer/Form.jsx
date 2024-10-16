"use client"

import React, { useState } from 'react'
import FileInput from '../../components/FileInput'
import { Controller, useForm } from 'react-hook-form'
import axios from 'axios'
import Swal from 'sweetalert2'

const Form = () => {
  const { register, control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

  const submit = async (data) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (Array.isArray(value)) {
        value.forEach((item, index) => {
          formData.append(`${key}[${index}]`, item);
        });
      } else {
        formData.append(key, value);
      }
      formData.append("created_by", "web")
      formData.append("type_of_entity", "test")
      formData.append("other_notes", "be polite")
    });

    try {
      const res = await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_HOST}/api/v1/influencer/details/create`,
        data: formData,

      })
      reset()
      Swal.fire({
        title: 'Thank you for submitting. Our team will get in touch with you shortly. In the meantime, you can call or WhatsApp us at:',
        icon: 'success',
        html: '<a href="https://api.whatsapp.com/send?phone=918879949404" target="_blank" style="color: #007bff; text-decoration: none;">+91-8879949404</a>',
        showConfirmButton: true,
        allowOutsideClick: true,
        confirmButtonText: "Ok"
      });
    } catch (error) {
      console.log(error);
      alert("Could not add lead")
    }
  };

  const formFields = [
    { name: 'name', label: 'Name*', type: 'text', validation: { required: "Name is required" } },
    {
      name: 'contact',
      label: 'Contact* ',
      type: 'number',
      validation: {
        required: { value: true, message: "Your contact number is required" },
        minLength: { value: 10, message: "Contact number must contain at least 10 digits" },
        maxLength: { value: 10, message: "Contact number can only contain 10 digits" }
      }
    },
    { name: 'location', label: 'Where are you based?* Area, city', type: 'text', validation: { required: "Locatin is required" } },
    { name: 'handle', label: 'Your Instagram / Youtube handle*', type: 'text', validation: { required: "Instagram / Youtube handle is required" } },
    { name: 'followers', label: 'Approx followers / subscribers* ', type: 'text', validation: { required: "Follower count is required" } },
    {
      name: 'followers_ratio_image',
      label: 'Attach screenshot of Men Women followers ratio (Optional)',
      type: 'file',
      fileType: "image/*",
      // validation: { required: "This file is required" },
      exampleImage: '/men-women-ratio.jpeg'
    },
    {
      name: 'top_cities_image',
      label: 'Attach screenshot of Top cities (Optional)',
      type: 'file',
      fileType: "image/*",
      // validation: { required: "This file is required" },
      exampleImage: '/cities.jpeg'
    },
    {
      name: 'age_range_image',
      label: 'Attach screenshot of Age range (Optional)',
      type: 'file',
      fileType: "image/*",
      // validation: { required: "This file is required" },
      exampleImage: '/Age-range.jpeg'
    },
    { name: 'about', label: 'Tell us about you and your audience (optional)', type: 'text' },

  ];

  return (
    <div className='my-8  max-w-[1200px] mx-auto'>
      <h2 className='font-semibold text-[20px] sm:text-[30px] pb-4 pl-5'>Join our community </h2>
      {/* <p className='mb-[30px] text-[10px] text-[#707070] text-center'>(All fields are mandatory)</p> */}

      <form onSubmit={handleSubmit(submit)} className='mx-[22px] text-[16px] flex flex-col gap-[14px]'>
        {formFields.map((field, index) => (
          <div key={index}>
            {(field.type === 'text' || field.type === "number") && (
              <div className="relative w-full">
                <input
                  type={field.type}
                  name={field.name}
                  placeholder=" "
                  {...register(field.name, field.validation)}
                  id={field.name}
                  className={`block p-[15px] w-full sm:w-[70%] text-base text-gray-900 bg-white border ${errors[field.name] ? 'border-red-500' : 'border-[#B9B9B9]'} rounded-xl focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-2 peer`}
                />
                <label
                  htmlFor={field.name}
                  className={`absolute  text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
                >
                  <span className='sm:text-[16px] text-[14px]'>{field.label}</span>
                </label>


              </div>

            )}

            {field.type === 'file' &&
              <Controller
                name={field.name}
                control={control}
                rules={field.validation}
                render={({ field: { onChange, value } }) => (
                  <FileInput
                    label={field.label}
                    fileType={field.fileType}
                    withExample={true}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      onChange(file); // Pass the file to react-hook-form
                    }}
                    name={field.name}
                    value={value}
                    exampleImage={field.exampleImage}
                  // exampleImage='/1.png'
                  />
                )}
              />
            }
            {/* {errors[field.name] && <p className="text-red-500 text-sm mt-1">{errors[field.name].message}</p>} */}
            {(errors[field.name] || errors["salon_contacts"]) && <p className="text-red-500 text-sm mt-1">{errors[field.name]?.message || errors["salon_contacts"][field.name.split(".")[field.name.split.length - 1]]?.message}</p>}
          </div>
        ))}

        <button type="submit" className='bg-[#72B5EC] sm:w-[70%] text-white font-semibold text-[16px] px-[50px] py-[15px] rounded-lg flex justify-center'>
          {
            isSubmitting ? 
            <svg aria-hidden="true" class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg> :
              "Submit"
          }
        </button>
      </form>
    </div>
  )
}

export default Form;
