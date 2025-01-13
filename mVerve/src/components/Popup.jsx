// Popup.js
import React from "react";

const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="justify-center items-center">
        <h3 className="text-xl mx-4 font-lato font-semibold text-brand-Default mb-4">{message}</h3>
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-white font-lato font-bold text-brand-Default py-2 rounded-3xl border-2 border-brand-Default  hover:bg-brand-Default  hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
