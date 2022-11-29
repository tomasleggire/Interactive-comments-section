import React from "react";
import '../CSS/DeleteModal.css';

export default function DeleteModal({setDeleteModalValue, deleteConfirmation}) {

    return (
        <div className="modal-main">
            <div className="modal">
                <h2>Delete comment</h2>
                <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                <div className="modal-btn-main">
                    <button type="button" className="btn-modal btn-modal-cancel" onClick={() => setDeleteModalValue(false)}>NO, CANCEL</button>
                    <button type="button" className="btn-modal btn-modal-delete" onClick={deleteConfirmation}>YES, DELETE</button>
                </div>
            </div>
        </div>
    )
}