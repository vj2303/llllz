import { X, MapPin } from 'lucide-react';
import React from 'react';

const LocationsPopup = ({ onClose, relatedSalons }) => {
  return (
    <>
      {/* Black Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={onClose} // Clicking on the overlay closes the bottom sheet
      ></div>

      {/* Bottom Sheet */}
      <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-lg shadow-lg z-50 max-w-md mx-auto transition-transform transform translate-y-full animate-slide-up">
        {/* Close Icon */}
        <div className="flex justify-end bg-blue-400 p-2 rounded-t-lg">
          <X
            className="cursor-pointer text-white hover:text-gray-700"
            size={24}
            onClick={onClose} // Close bottom sheet when the cross icon is clicked
          />
        </div>

        {/* Bottom Sheet Header */}
        <div className="text-center p-2 bg-blue-400">
          <p className="text-[24px] text-white mb-4">Other Outlets ({relatedSalons.length})</p>
        </div>

        {/* Timings List (Scrollable) */}
        <div className="space-y-2 p-4 bg-white rounded-b-lg w-full max-h-[500px] overflow-y-auto">
          {
            relatedSalons?.map((sal, i) => (
              <p key={i} className="bg-gray-50 flex justify-between p-4 rounded-md">{sal.salon_name}, {sal.salon_location} <span><MapPin /></span> </p>
            ))
          }
        </div>
      </div>

      {/* Bottom Sheet Animation */}
      <style jsx>{`
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }

        @keyframes slide-up {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default LocationsPopup;
