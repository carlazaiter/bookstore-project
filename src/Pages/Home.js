import { Link } from "react-router-dom"
import Gatsbsy from "../pictures/thegreatgabsy.png"
import MockingBird from "../pictures/toKillamockingbird.png"
import book1984 from "../pictures/book1984.png"
import "../styles/Home.css"

const Home = () => {
  const featuredBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 12.99,
      image: Gatsbsy,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 14.99,
      image: MockingBird,
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: 13.99,
      image: book1984,
    },
  ]

  return (
    <div className="home">
      <div className="heroSection">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl">
                Your Literary <span className="text-primary">Sanctuary</span>
              </h1>
        <p className="mt-6 text-lg text-muted-foreground text-pretty md:text-xl leading-relaxed">
                Discover curated books across all genres. From timeless classics to contemporary bestsellers, find your
                next great read at BookHaven.
              </p>
        <Link to="/books">
          <button className="shopButton">Browse Books</button>
        </Link>
      </div>

      <div className="featuredSection">
        <h2>Featured Books</h2>
        <div className="bookGrid">
          {featuredBooks.map((book) => (
            <div className="bookCard" key={book.id}>
              <img src={book.image || "/placeholder.svg"} alt={book.title} />
              <h3>{book.title}</h3>
              <p className="author">{book.author}</p>
              <p className="price">${book.price}</p>
              <Link to={`/book/${book.id}`}>
                <button className="detailsButton">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
