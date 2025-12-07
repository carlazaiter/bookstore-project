import { useState } from "react"
import { Link } from "react-router-dom"
import Gatsbsy from "../pictures/thegreatgabsy.png"
import MockingBird from "../pictures/toKillamockingbird.png"
import book1984 from "../pictures/book1984.png"
import PrideandPrejudice from "../pictures/prideandprejudice.png"
import theHobbit from "../pictures/theHobbit.png"
import HarryPotter from "../pictures/harrypotter.png"
import theCatcher from "../pictures/thecatcher.png"
import bravenewWorld from "../pictures/Bravenewworld.png"
import "../styles/Books.css"

const Books = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Classic", "Science Fiction", "Fantasy", "Romance"];
  const allBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 12.99,
      category: "Classic",
      image: Gatsbsy,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 14.99,
      category: "Classic",
      image: MockingBird,
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: 13.99,
      category: "Science Fiction",
      image: book1984,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: 11.99,
      category: "Romance",
      image: PrideandPrejudice,
    },
    {
      id: 5,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      price: 15.99,
      category: "Fantasy",
      image: theHobbit,
    },
    {
      id: 6,
      title: "Harry Potter",
      author: "J.K. Rowling",
      price: 16.99,
      category: "Fantasy",
      image: HarryPotter,
    },
    {
      id: 7,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      price: 12.49,
      category: "Classic",
      image: theCatcher,
    },
    {
      id: 8,
      title: "Brave New World",
      author: "Aldous Huxley",
      price: 13.49,
      category: "Science Fiction",
      image: bravenewWorld,
    },
  ]

  const filteredBooks = allBooks
    .filter(book =>
      selectedCategory === "All" ? true : book.category === selectedCategory
    )
    .filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="booksPage">
      <div className="pageHeader">
        <h1>Our Book Collection</h1>
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search books by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="dropdown">
  <button className="dropdownBtn">
    {selectedCategory} ▼
  </button>
  <div className="dropdownContent">
    {categories.map(category => (
      <div
        key={category}
        className="dropdownItem"
        onClick={() => setSelectedCategory(category)}
      >
        {category}
      </div>
    ))}
  </div>
</div>

      <div className="booksContainer">
        <div className="booksGrid">
          {filteredBooks.map((book) => (
            <div className="bookItem" key={book.id}>
              <img src={book.image || "/placeholder.svg"} alt={book.title} />
              <div className="bookInfo">
                <h3>{book.title}</h3>
                <p className="authorName">{book.author}</p>
                <span className="categoryTag">{book.category}</span>
                <p className="bookPrice">${book.price}</p>
                <Link to={`/book/${book.id}`}>
                  <button className="viewButton">View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Books
