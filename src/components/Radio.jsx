import { Circle } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import Checkbox from './Checkbox';


const Radio = ({ label, isChecked, onChange, name, value, nestedInputProp, errors, control, register }) => {
  const [nestedInput, setNestedInput] = useState(undefined)

  useEffect(() => {
    if (nestedInputProp && nestedInputProp.length > 0) {
      const currentInput = nestedInputProp.filter(input => input.for === value)[0]
      setNestedInput(currentInput)
    }
  }, [nestedInputProp, value])
  return (
    <>
      <label className="flex items-center gap-4 cursor-pointer">
        <input
          type="radio"
          checked={isChecked}
          onChange={onChange}
          name={name}
          value={value}
          className="hidden"
        />
        <span
          className={`w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center ${isChecked ? 'bg-[#87cefa]' : 'bg-white'
            }`}
        >
          {isChecked && (
            //   <span className="w-1 h-1 bg-white rounded-full"></span>
            <Circle color='white' fill='white' size={5} />
          )}
        </span>
        <span className="text-gray-700">{label}</span>
      </label>
      {nestedInput && nestedInput.type === "checkbox" && nestedInput.watch === name && nestedInput.for === value && isChecked && (
        <label className='flex flex-col gap-[12px] pl-8'>
          <span>
            <span className='font-semibold'>{nestedInput.label}</span>
            {errors[nestedInput.name] && <p className="text-red-500 text-sm mt-1">{errors[nestedInput.name].message}</p>}
          </span>
          {nestedInput.options.map((option, i) => (
            <Controller
              key={i}
              name={nestedInput.name}
              control={control}
              rules={nestedInput.validtion}
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

      {nestedInput && nestedInput.type === "text" && nestedInput.watch === name && nestedInput.for === value && isChecked && (
        <div className='relative w-full'>
            <input
              type={nestedInput.type}
              {...register(nestedInput.name, { ...nestedInput.validtion })}
              name={nestedInput.name}
              id={nestedInput.name}
              placeholder={""}
              className={`block px-2.5 pb-2.5 pt-4 w-full sm:w-[70%] text-base text-gray-900 bg-transparent border ${errors[nestedInput.name] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-blue-600 focus:ring-0 focus:outline-none peer`}

            />
            <label
              htmlFor={nestedInput.name}
              className={`absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
            >
              <span>{nestedInput.label}</span>
            </label>
            {(errors[nestedInput.name] || errors["salon_contacts"]) && <p className="text-red-500 text-sm mt-1">{errors[nestedInput.name]?.message || errors["salon_contacts"][nestedInput.name.split(".")[nestedInput.name.split.length - 1]]?.message}</p>}
        
          </div>
                )}
        </>
      );
};

      export default Radio;
