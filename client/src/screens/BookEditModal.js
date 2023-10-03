import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editOneBook } from './../actions/book_action';



function BookEditModal({ book }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updatedBookData, setUpdatedBookData] = useState({ ...book }); // Initialize with current book data
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedBookData({
            ...updatedBookData,
            [name]: value,
        });
    };

    const handleEditBook = () => {
        // Dispatch the editOneBook action with the updated book data 
        dispatch(editOneBook(book._id, updatedBookData));
        setIsModalOpen(false); // Close the modal
        window.location.reload();
    };

    return (
        <div>

            <button className="btn btn-warning" onClick={handleOpenModal}>
                Edit
            </button>

            {isModalOpen && (
                <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Book</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleCloseModal}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Title:</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={updatedBookData.title}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Author:</label>
                                    <input
                                        type="text"
                                        name="author"
                                        value={updatedBookData.author}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Copies:</label>
                                    <input
                                        type="number"
                                        name="copies"
                                        value={updatedBookData.copies}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                                {/* Add similar inputs for other book fields (publisher, year, etc.) */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handleEditBook}>
                                    Save changes
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                    onClick={handleCloseModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default BookEditModal;
