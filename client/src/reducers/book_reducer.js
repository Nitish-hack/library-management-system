export const addBookReducer = (state = { bookItems: [] }, action) => {
  switch (action.type) {
    case 'ADD_BOOK_REQUEST':
      return { ...state, loading: true }
    case 'ADD_BOOK_SUCCESS':
      return {
        ...state,
        bookItems: [...state.bookItems, action.payload],
        loading: false
      }



    default:
      return state
  }
}

export const getAllBookReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case 'GET_BOOKS_REQUEST':
      return { ...state, loading: true }
    case 'GET_BOOKS_SUCCESS':
      return {
        books: action.payload, loading: false
      }
    case 'GET_BOOKS_FAILED':
      return { error: action.payload, loading: false }
    default:
      return state
  }
}
export const editBookReducer = (state = { editedBook: null }, action) => {
  switch (action.type) {
    case 'EDIT_BOOK_REQUEST':
      return { ...state, loading: true };
    case 'EDIT_BOOK_SUCCESS':
      return {
        editedBook: action.payload.updatedBook,
        loading: false,
      };
    case 'EDIT_BOOK_FAILED':
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const deleteBookReducer = (state = { deletedBook: null }, action) => {
  switch (action.type) {
    case 'DELETE_BOOK_REQUEST':
      return { ...state, loading: true };
    case 'DELETE_BOOK_SUCCESS':
      return {
        deletedBook: action.payload.deletedBook,
        loading: false,
      };
    case 'DELETE_BOOK_FAILED':
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};
