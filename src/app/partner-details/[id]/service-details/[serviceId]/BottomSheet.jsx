"use client"
import { useState } from 'react';

const BottomSheet = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-end bg-black bg-opacity-5">
      <div className="bg-gray-200 w-full max-w-lg rounded-t-2xl p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold px-2">{service.name}</h2>
          <button onClick={onClose} className="text-gray-700 ">
            &#10005;
          </button>
        </div>
        <p className="text-gray-500 mb-2 bg-white p-2 rounded-xl">{service.one_line_description}</p>
        <div className="mb-4 bg-white p-2 rounded-xl">
        <div className='flex justify-between items-center'>
          <div>
              <h3 className="font-semibold px-2">{service.customizations?.[0]?.name}</h3>
              <p className="text-sm text-gray-500 mb-2 px-2">{service.customizations?.[0]?.instruction}</p>
          </div>
          <button className='bg-gray-300 py-1 text-[12px] rounded-md px-2 text-gray-500'>
               Required
          </button>
        </div>
        {
          service.customizations?.[0]?.options?.map((ele, i) => {
            return (
              <div className="grid grid-cols-2 items-center rounded-md px-2 py-2" key={i}>
                {/* Service Name */}
                <span>{ele.name}</span>
                {/* Container for rate and radio button */}
                <div className="flex items-center justify-end gap-2">
                  <span className="text-sm text-gray-500">From ₹ {ele.rate}</span>
                  <input type="radio" name="product" className="form-radio" />
                </div>
              </div>
            );
          })
        }


         
        </div>
        <button className="bg-blue-500 text-white w-full py-2 rounded-md font-semibold">
          Add Service
        </button>
      </div>
    </div>
  );
};

export default BottomSheet;
