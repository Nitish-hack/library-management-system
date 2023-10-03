import axios from "axios";

export const deleteOneBook = (bookName) => async (dispatch) => {
    dispatch({
        type: 'DELETE_BOOK_REQUEST',
    });

    try {
        const response = await axios.delete('/api/books/deleteBook', {
            data: { name: bookName }, // Send the book name in the request body
        });

        dispatch({
            type: 'DELETE_BOOK_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: 'DELETE_BOOK_FAILED',
            payload: error,
        });
    }
};


export const addOneBook = (book) => async dispatch => {
    dispatch({
        type: 'ADD_BOOK_REQUEST'
    })

    try {
        const response = await axios.post('/api/books/addBook', book);

        dispatch({
            type: 'ADD_BOOK_SUCCESS',
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: 'ADD_BOOK_FAILED',
            payload: error
        })
    }
}


export const editOneBook = (bookId, updatedBookData) => async (dispatch) => {
    dispatch({
        type: 'EDIT_BOOK_REQUEST',
    });

    try {
        const response = await axios.put(`/api/books/editBook/${bookId}`, updatedBookData);

        dispatch({
            type: 'EDIT_BOOK_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: 'EDIT_BOOK_FAILED',
            payload: error,
        });
    }
};

export const getAllBook = () => async dispatch => {
    dispatch({
        type: 'GET_BOOKS_REQUEST'
    })
    try {
        const response = await axios.get('/api/books/allBook');

        dispatch({
            type: 'GET_BOOKS_SUCCESS',
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: 'GET_BOOKS_FAILED',
            payload: error
        })
    }
}

export const filterBook = (searchKey) => async dispatch => {
    dispatch({
        type: 'GET_BOOKS_REQUEST'
    })
    var filterItem;
    try {
        const response = await axios.get('/api/books/allBook');
        filterItem = response.data.filter(pizza => pizza.title.toLowerCase().includes(searchKey.toLowerCase()));

        dispatch({
            type: 'GET_BOOKS_SUCCESS',
            payload: filterItem
        })
    } catch (error) {
        dispatch({
            type: 'GET_BOOKS_FAILED',
            payload: error
        })
    }
}