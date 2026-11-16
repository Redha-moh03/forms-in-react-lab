import { useState } from "react";
import App from "../../App";

function BookShelf() {
  const [books, setBooks] = useState([
    {
      title: "dream",
      author: "redha",
    },
  ]);

  const [newBook, setNewBook] = useState([
    {
      title: "",
      author: "",
    },
  ]);
  function handleInputChange(event) {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({
      title: "",
      author: "",
    });
  }
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">title</label>
          <input
            type="text"
            value={newBook.title}
            id="title"
            name="title"
            onChange={handleInputChange}
          />
          <label htmlFor="author">author</label>
          <input
            type="text"
            value={newBook.author}
            id="author"
            name="author"
            onChange={handleInputChange}
          />
          <button>Add a book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((oneBook) => (
          <div key={`${oneBook.title} ${oneBook.author}`}>
            <p>Title : {oneBook.title}</p>
            <p>author : {oneBook.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BookShelf;
