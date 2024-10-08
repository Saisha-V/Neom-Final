import React, { useState, useEffect } from "react";

const PopupMessage: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed top-1/3 right-5 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="bg-gray-800 text-white p-8 w-96 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-3 bg-transparent text-white text-2xl"
              onClick={handleClosePopup}
            >
              ×
            </button>
            <h3 className="text-yellow-200 mb-2 font-ivy text-xl">
              Hey Charlie 🌟
            </h3>
            <p className="mb-5 font-poppins text-sm font-light">
              "We regret to inform you that the current weather conditions are
              not conducive for a golf session. Would you like to reschedule or
              cancel your session for today?"
            </p>
            <div className="flex">
              <button className="px-4 py-2 bg-white text-black rounded mr-4 font-poppins text-sm">
                Reschedule
              </button>
              <a className="text-white font-poppins text-sm font-light cursor-pointer pt-2 hover:underline">
                Cancel
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupMessage;
