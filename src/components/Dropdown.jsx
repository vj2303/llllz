import { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Adjust the import based on your project structure

const Dropdown = ({ options, register, errors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full sm:w-[70%] text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-xl bg-white px-3 py-3 text-sm  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>{selectedOption || "Select Experience"}</span>
          <ChevronDown className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full sm:w-[70%] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-200 transform opacity-100 scale-100">
          <ul className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionSelect(option)}
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}

      {errors.experience && (
        <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
      )}
    </div>
  );
};

export default Dropdown;
