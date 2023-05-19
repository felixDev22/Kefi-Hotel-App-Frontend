import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import './Dialog.css'

const Dialog = ({ message, isLoading }) => {
  return (
    <div className = "loading-dialog" >
      {isLoading ? (
        <FaSpinner className="loading-icon" />
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default Dialog;
