import React, { useState, useEffect } from "react";

const PopupMessage: React.FC = () => {
  const [showPopup, setShowPopup] = useState < boolean > false;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg relative w-96">
            <button
              className="absolute top-2 right-4 text-white text-xl"
              onClick={handleClosePopup}
            >
              ×
            </button>
            <h3 className="text-yellow-400 text-lg mb-2">Hey Charlie! 🌟</h3>
            <p className="text-sm mb-4 font-light">
              We regret to inform you that the current weather conditions are
              not conducive for a golf session. Would you like to reschedule or
              cancel your session for today?
            </p>
            <div className="flex justify-between">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-200">
                Reschedule
              </button>
              <button className="text-white font-light hover:text-gray-400">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupMessage;
