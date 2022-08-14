import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const BookList = () => {

    const books = useSelector(state => state.books)
    const dispatch = useDispatch();

    const removeBook = bookId => {
        dispatch({ type: 'REMOVE_BOOK', payload: bookId})
    }

    return (
        <ul>
            {books.map(book => <li key={book.id}>{book.title} by {book.author} <button onClick={() => removeBook(book.id)}>Remove</button></li>)}
        </ul>
    );
};

export default BookList;