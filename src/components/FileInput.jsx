"use client";
import Image from 'next/image';
import { CloudUpload, X } from 'lucide-react';
import React, { useRef, useState } from 'react';

const FileInput = ({ label, onChange, exampleImage, name, fileType, withExample, value }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
    if (isPopupVisible !== true && popupRef.current !== null) {
      popupRef.current.showModal();
    } else {
      popupRef.current.close();
    }
  };

  return (
    <>
      <div className='flex flex-col gap-[8px] sm:w-[70%] w-full '>
        <span className='flex justify-between font-medium '>
          <p className='max-w-[50%] font-semibold sm:text-[14px]'>{label}</p>
          { withExample && <button type='button' className='underline text-[#646464]' onClick={togglePopup}>View Example</button> }
        </span>
        <label htmlFor={name}>
          <input type="file" accept={fileType} id={name} className='hidden' onChange={onChange} name={name} />
          <p
            className='p-[15px] rounded-2xl border border-[#B9B9B9] w-full flex gap-2 items-center cursor-pointer'
            // onClick={() => document.querySelector(`input[name="${name}"]`).click()}
          >
            <CloudUpload />
            {!value? "Upload" : value.name}
          </p>
        </label>
        <dialog ref={popupRef} className=''>
          <X className='absolute top-0 right-0' onClick={togglePopup} />
          <Image
            height={100}
            width={200}
            alt='example'
            src={exampleImage}
          />
        </dialog>
      </div>
    </>
  );
};

export default FileInput;
