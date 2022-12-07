import React from "react";
import './index.css';

/**
 * Bootstrap Display Modal
 *
 * @description: Shows Modal that can show alert messages with a close button
 * @returns Bootstrap Modal
 */
const Modal = ({ show, setShowModal, text, searchTerm }) => {
    return (
        <div className={`modal ${ show ? 'show' : 'hide'}`} role='dialog'>
            <div className="modal-dialog modal-dialog-centered" role='dialog'>
                <div className="modal-content">
                    <div className="modal-body">
                        <p className="fs-5">{text} <span className="text-primary">{searchTerm}</span></p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-info text-white"
                            data-bs-dismiss="modal"
                            onClick={() => setShowModal({ show: false, text: '' })}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
