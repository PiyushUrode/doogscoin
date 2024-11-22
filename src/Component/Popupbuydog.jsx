import React from 'react'

const Popupbuydog = ({ onClose }) => {
    return (
      <div className="fixed top-32 right-10 bg-black bg-opacity-50 z-10 flex justify-center items-center ">
        <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
          >
            &times;
          </button>

          <p className="text-gray-700 mb-4">
          Get ready to be among the first to experience exclusive benefits and early access to our latest offerings. Stay tuned for more updates!
          </p>
          <button
            onClick={onClose}
            className="bg-orange-500 text-white py-2 px-10 rounded-lg"
          >
Ok
          </button>
        </div>
      </div>
    );
  };
  
  export default Popupbuydog;
  