import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/BookCard.css";

const BookCard = ({ book }) => {
  const { addToCart } = useCart();
  const [adding, setAdding] = useState(false);

  const handleAdd = () => {
    setAdding(true);
    addToCart(book);

    setTimeout(() => {
      setAdding(false);
    }, 900);
  };

  return (
    <div className="card">

      <Link to={`/books/${book.id}`}>
        <div className="card-img-box">
          <img
            src={book.coverImage}
            alt={book.title}
            className="card-img"
          />
        </div>
      </Link>

      <div className="card-body">
        <Link to={`/books/${book.id}`} className="card-title">
          {book.title}
        </Link>

        <p className="card-author">{book.author}</p>

        <span className="card-category">{book.category}</span>

        <p className="card-desc">{book.description}</p>

        <div className="card-bottom">
          <span className="card-price">${book.price.toFixed(2)}</span>

          <button
            className={`card-btn ${adding ? "added" : ""}`}
            disabled={adding}
            onClick={handleAdd}
          >
            {adding ? "✓ Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
