import { X } from "lucide-react"; // Importing cross icon from lucide-react
import { useEffect, useState } from "react";

const TimingPopup = ({ onClose, timings }) => {
  const [currentDay, setCurrentDay] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Get the current day and time
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const day = daysOfWeek[now.getDay()];
    const time = now.getHours() * 60 + now.getMinutes(); // Convert current time to minutes since midnight
    
    setCurrentDay(day);
    setCurrentTime(time);
  }, []);

  // Function to check if the current time is within the working hours
  const isCurrentTimeInRange = (workingHours) => {
    const [start, end] = workingHours.split("-");
    const [startHours, startMinutes] = start.trim().split(":").map(Number);
    const [endHours, endMinutes] = end.trim().split(":").map(Number);
    
    const startTimeInMinutes = startHours * 60 + startMinutes;
    const endTimeInMinutes = endHours * 60 + endMinutes;

    return currentTime >= startTimeInMinutes && currentTime <= endTimeInMinutes;
  };

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
          <h1 className="font-bold text-xl text-white">Timings</h1>
          <p className="text-sm text-white mb-4">All Timings Are In IST</p>
        </div>

        {/* Timings List */}
        <div className="space-y-2 p-4 bg-white rounded-b-lg w-full">
          {timings.map((timing, index) => (
            <div
              key={index}
              className={`flex justify-between text-gray-700 rounded-lg ${
                timing.working_day === currentDay && isCurrentTimeInRange(timing.working_hours)
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : ""
              }`}
            >
              <span className="font-medium">{timing.working_day}</span>
              <div className="items-end">
                <span className="text-right">{timing.working_hours.split("-")[0]} - </span>
                <span className="text-right">{timing.working_hours.split("-")[1]}</span>
              </div>
            </div>
          ))}
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

export default TimingPopup;
