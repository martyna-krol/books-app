import BookForm from "./components/BookForm/BookForm";
import BookList from "./components/BooksList/BooksList";
import { useState } from "react";
import shortid from "shortid";

const App = () => {

  const [books, setBooks] = useState([
    { id: 1, title: 'of Mice and Men', author: 'John Steinbeck'},
    { id: 2, title: 'the Witcher', author: 'Andrzej Sapkowski'}
  ]);

  const removeBook = bookId => {
    setBooks(books.filter(book => book.id !== bookId))
  }

  const addBook = newBook => {
    setBooks([...books, {id: shortid(), title: newBook.title, author: newBook.author}]);
  }

  return (
    <div className="App">
      <h1>Books App</h1>
      <BookList books={books} removeBook={removeBook} />
      <BookForm addBook={addBook}/>
    </div>
  );
}

export default App;
