// ConfirmationModal.js
import React from "react";
import PropTypes from "prop-types";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-accent-4 flex items-center justify-center z-50">
            <div className="bg-accent-3 p-6 rounded-lg shadow-lg  max-w-lg">
                <h3 className="text-lg font-semibold mb-1 text-danger">
                    Confirm Exit
                </h3>
                <p className="text-white">
                    Are you sure you want to exit? This will cancel the test and
                    you will lose all your progress.
                </p>
                <div className="flex justify-between mt-8">
                    <button
                        onClick={onConfirm}
                        className="border-red-900 border-2 hover:bg-red-950 drop-shadow-custom cursor-pointer text-white px-4 py-2 rounded-seven mr-2"
                    >
                        Exit Test
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-primary cursor-pointer hover:bg-[#96ce71] text-black px-4 py-2 rounded-seven drop-shadow-custom"
                    >
                        Continue Test
                    </button>
                </div>
            </div>
        </div>
    );
};

ConfirmationModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default ConfirmationModal;
