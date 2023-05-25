import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import './Dialog.css';

function Dialog({ message, isLoading }) {
  return (
    <div className="loading-dialog">
      {isLoading ? (
        <FaSpinner className="loading-icon" />
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}

Dialog.propTypes = {
  message: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Dialog;
