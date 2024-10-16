"use client"

import React, { useState } from 'react'
import Checkbox from '../../components/Checkbox'
import Radio from '../../components/Radio'
import axios from 'axios'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Swal from 'sweetalert2'
import Dropdown from '../../components/Dropdown'
import FileInput from '../../components/FileInput'


const Form = () => {
  const { register, watch, handleSubmit, reset, formState: { errors, isSubmitting }, control, setValue } = useForm()
  const [files, setFiles] = useState({})
  const positionValue = watch('position'); // Watch the value of 'your_position'

  const Submit = async (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        // Append the file to FormData
        formData.append(key, value);
      } else if (Array.isArray(value)) {
        // If the field is an array (like checkboxes), loop through and append each item
        value.forEach((item, index) => {
          formData.append(`${key}[${index}]`, item);
        });
      } else {
        // Append other fields
        formData.append(key, value);
      }
    });

    try {
      const res = await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_HOST}/api/v1/create/applicationForm`,
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
    { name: 'name', label: 'Your Name*', type: 'text', validtion: { required: "Your name is required" } },
    { name: 'contact', label: 'Your Contact*', type: 'number', validtion: { required: { value: true, message: "Your contact number is required" }, minLength: { value: 10, message: "Contact number must contain at least 10 digits" }, maxLength: { value: 10, message: "Contact number can max contain 10 digits" } } },
    { name: 'city', label: 'City*', type: 'text', validtion: { required: "City is required" } },
    { name: 'current_salary', label: 'Current Salary*', type: 'text', validtion: { required: "Current salary is required" } },
    { name: 'expected_salary', label: 'Expected Salary*', type: 'text', validtion: { required: "Expected Salary is required" } },
    {
      name: 'position',
      label: 'Your Current Designation',
      type: 'radio',
      options: ["Salon Manager", "Stylist/Therapist", "Manicure", "Pedicure", "Men's Grooming", "Sales/Marketing", "Tech", "Accounting & Finance", "Operations", "Other"],
      validtion: { required: "This field is required" },
      nestedInput: [{
        watch: "position",
        for: "Stylist/Therapist",
        name: "specialties",
        label: "Select Specialities",
        type: "checkbox",
        options: ["Nails", "Spa/Body Massage", "Hair", "Beauty", "Manicure", "Pedicure", "Men's Grooming", "Bridal", "Cosmetology/Dermatology"],
        validtion: { required: "Select at least one" },
      },
      {
        watch: "position",
        for: "Tech",
        name: "Tech",
        label: "Select Specialities",
        type: "checkbox",
        options: ["Frontend Developer", "Backend Developer"],
        validtion: { required: "Select at least one" },
      },
      { watch: "position", for: "Other", name: 'Other', label: 'Tell about you designation', type: 'text', validtion: { required: "This is required" } }
      ],
    },


    { name: 'experience', label: 'Experience*', type: 'select', options: ['Less than 1 year', '1 to 3 years', '3 to 7 years', '7+ years'], validtion: { required: "Experience is required" } },
    { name: 'about', label: 'About*', type: 'textarea', validtion: { required: "About is required" } },
    { name: "CV", label: "Upload CV (Optional)", type: "file", fileType: "application/pdf image/*", exampleImage: '/Age-range.jpeg' }
  ];

  return (
    <div className='mb-[100px] mt-6 max-w-[1200px] mx-auto'>
      <h2 className='font-medium text-[20px] sm:text-[30px] font-semibold mb-4 pl-5'>Help us with your details?</h2>

      <form onSubmit={handleSubmit(Submit)} className='mx-[22px] flex flex-col gap-[14px]'>
        {formFields.map((field, index) => (
          <div key={index}>
            {(field.type === 'text' || field.type === 'number') && (
              <div className="relative w-full">
                <input
                  type={field.type}
                  {...register(field.name, { ...field.validtion })}
                  name={field.name}
                  placeholder={""}
                  id={field.name}
                  className={`block px-2.5 pb-2.5 pt-4 w-full sm:w-[70%] text-base text-gray-900 bg-transparent border ${errors[field.name] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-blue-600 focus:ring-0 focus:outline-none peer`}

                />
                <label
                  htmlFor={field.name}
                  className={`absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
                >
                  <span className='sm:text-[16px] text-[14px]'>{field.label}</span>
                </label>
                {(errors[field.name] || errors["salon_contacts"]) && <p className="text-red-500 text-sm mt-1">{errors[field.name]?.message || errors["salon_contacts"][field.name.split(".")[field.name.split.length - 1]]?.message}</p>}
              </div>
            )}

            {field.type === 'radio' && (
              <label className='flex flex-col gap-[12px]'>
                <span className='font-semibold'>{field.label}</span>
                {field.options.map((option, i) => (
                  <div key={i}>
                    <Controller
                      name={field.name}
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Radio
                          isChecked={value === option}
                          label={option}
                          name={field.name}
                          value={option}
                          // onChange={onChange}
                          onChange={() => {
                            if (field.nestedInput) {
                              field.nestedInput.map((input) => {
                                setValue(input.name, input.type === "checkbox" ? [] : "")
                              })
                            }
                            onChange(value === option ? '' : option)
                          }}
                          nestedInputProp={field.nestedInput ? field.nestedInput : undefined}
                          errors={errors}
                          control={control}
                          register={register}
                        />
                      )}
                    />
                  </div>
                ))}
              </label>
            )}

            {/* Render therapist specialties only when 'Stylist/Therapist' is selected */}
            {positionValue === 'Stylist/Therapist' && field.type === "checkbox" && (
              <label className='flex flex-col gap-[12px] pl-8'>
                <span>
                  <span className='font-semibold'>{field.label}</span>
                  {errors[field.name] && <p className="text-red-500 text-sm mt-1">{errors[field.name].message}</p>}
                </span>
                {field.options.map((option, i) => (
                  <Controller
                    key={i}
                    name={field.name}
                    control={control}
                    rules={field.validtion}
                    render={({ field: { onChange, value } }) => (
                      <Checkbox
                        isChecked={value ? value.includes(option) : false}
                        label={option}
                        value={option}
                        onChange={e => {
                          const newValue = e.target.checked
                            ? [...(value || []), option]
                            : (value || []).filter(v => v !== option);
                          onChange(newValue);
                        }}
                      />
                    )}
                  />
                ))}
              </label>
            )}

            {field.type === "select" && (
              <>
                <h3 className='font-semibold my-1 text-[16px] leading-2 '>Experience</h3>
                <Dropdown register={register} errors={errors} options={field.options} />
              </>
            )}

            {field.type === 'file' &&
              <Controller
                name={field.name}
                control={control}
                render={({ field: { onChange, value } }) => (
                  // <input type='file' />
                  <FileInput
                    label={field.label}
                    fileType={field.fileType}
                    withExample={false}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      console.log(file);

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

            {field.type === "textarea" && (
              <div className="relative w-full ">
                <textarea
                  {...register("about", { required: "Work/Training Experience is required" })}
                  placeholder="Tell us where you got your training, where you worked, and what position and for how long"
                  className={`block p-3 overflow-y-hidden w-full sm:w-[70%] h-32 text-base text-gray-900 bg-white border ${errors.work_training_experience ? 'border-red-500' : 'border-[#B9B9B9]'} rounded-xl focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-2 peer`}
                />
                {errors.work_training_experience && <p className="text-red-500 text-sm mt-1">{errors.work_training_experience.message}</p>}
              </div>
            )}
          </div>
        ))}



        {/* Work/Training Experience Textarea */}


        <button type="submit" className='bg-[#72B5EC] text-white font-semibold text-[16px] px-[50px] py-[15px] w-full sm:w-[70%] rounded-lg flex justify-center'>
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
