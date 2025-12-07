import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { useCart } from "../context/CartContext";
import Gatsbsy from "../pictures/thegreatgabsy.png"
import MockingBird from "../pictures/toKillamockingbird.png"
import book1984 from "../pictures/book1984.png"
import PrideandPrejudice from "../pictures/prideandprejudice.png"
import theHobbit from "../pictures/theHobbit.png"
import HarryPotter from "../pictures/harrypotter.png"
import theCatcher from "../pictures/thecatcher.png"
import bravenewWorld from "../pictures/Bravenewworld.png"

import "../styles/BookDetails.css"

const BookDetails = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const books = {
    1: {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 12.99,
      category: "Classic",
      pages: 180,
      publisher: "Scribner",
      language: "English",
      isbn: "978-0-7432-7356-5",
      image: Gatsbsy,
      description:
        "The Great Gatsby is a 1925 tragedy novel by F. Scott Fitzgerald set in the Jazz Age on Long Island, narrated by Nick Carraway, about the mysterious millionaire Jay Gatsby and his obsessive pursuit of his former love, Daisy Buchanan. The story explores themes of wealth, love, social class, and the corruption of the American Dream as Gatsby tries to win Daisy, now married to Tom Buchanan. The narrative culminates in tragedy after Daisy accidentally kills a woman in Gatsby's car, and Gatsby takes the blame, leading to his murder. ",
    },
    
    2: {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 14.99,
      category: "Classic",
      pages: 324,
      publisher: "J. B. Lippincott & Co.",
      language: "English",
      isbn: "978-0-06-112008-4",
      image: MockingBird,
      description:
        "To Kill a Mockingbird is a 1960 novel by Harper Lee that explores themes of racial injustice, prejudice, and innocence through the eyes of a young girl in the 1930s American South. Narrated by Scout Finch, the story follows her and her brother Jem as their lawyer father, Atticus Finch, defends a Black man, Tom Robinson, who is wrongly accused of raping a white woman. The novel is a bildungsroman (coming-of-age story) that also features a subplot about the children's fascination with their reclusive neighbor, Boo Radley. ",
    },

    3: {
      title: "1984",
      author: "George Orwell",
      price: 13.99,
      category: "Science Fiction",
      pages: 328,
      publisher: "Secker & Warburg",
      language: "English",
      isbn: "978-0-452-28423-4",
      image: book1984,
      description:
        "1984 is a dystopian novel by George Orwell about a totalitarian society where the government, led by Big Brother, controls every aspect of life, including thought. The story follows protagonist Winston Smith, who rebels against the Party by keeping a diary and having a forbidden affair with a woman named Julia. The novel explores themes of government surveillance, manipulation of history and information, and the suppression of individuality, serving as a warning against the dangers of absolute power." ,
    },

     4: { 
        title: "Pride and Prejudice", 
        author: "Jane Austen", 
        price: 11.99, 
        category: "Romance", 
        pages: 279, 
        publisher: "T. Egerton",
         language: "English", 
         isbn: "978-1503290563", 
         image: PrideandPrejudice,
          description: "Pride and Prejudice is a 1813 novel by Jane Austen about the relationship between the intelligent and headstrong Elizabeth Bennet and the wealthy, proud Mr. Darcy. Set in rural England, the story focuses on the societal pressures on the five Bennet daughters to marry well to secure their family's future, and the novel follows their romantic entanglements, particularly Elizabeth and Darcy's initial dislike for each other, which gradually turns into love as they overcome their personal biases.",
        },

    5: {
         title: "The Hobbit", 
         author:"J.R.R. Tolkien",
         price: 15.99,
        category: "Fantasy",
        pages: 310,
        publisher: "George Allen & Unwin",
        language: "English", isbn: "978-0547928227", 
        image: theHobbit, 
        description: "The Hobbit is a children's fantasy novel by J.R.R. Tolkien about the hobbit Bilbo Baggins, who is persuaded by the wizard Gandalf to join a band of dwarves on a quest to reclaim their treasure from the dragon Smaug. During their journey, they encounter various creatures and Bilbo discovers a magical ring, which sets the stage for The Lord of the Rings. Hobbits are described as small, humanlike beings who enjoy a simple life but are capable of great courage.", 
    },

    6: {
         title: "Harry Potter", 
         author: "J.K. Rowling", 
         price: 16.99, 
         category: "Fantasy", 
         pages: 500, 
         publisher: "Bloomsbury", 
         language: "English", 
         isbn: "978-0747532743", 
         image: HarryPotter, 
         description: "Harry Potter is an adolescent wizard who discovers his magical heritage on his eleventh birthday and attends Hogwarts School of Witchcraft and Wizardry. He has unruly black hair, bright green eyes, a thin face, knobbly knees, and a lightning-shaped scar on his forehead. He is known as The Boy Who Lived for surviving a murder attempt by the dark wizard Lord Voldemort as a baby.",
         },

    7: {
         title: "The Catcher in the Rye", 
         author: "J.D. Salinger", 
         price: 12.49, 
         category: "Classic",
        pages: 277, 
        publisher: "Little, Brown and Company", 
        language: "English", 
        isbn: "978-0316769488", 
        image: theCatcher, 
        description: "The Catcher in the Rye is a 1951 novel by J.D. Salinger about the experiences of a disillusioned 16-year-old named Holden Caulfield over a few days after he is expelled from prep school. Narrated in a conversational style, the story follows Holden as he wanders through New York City, grappling with feelings of alienation, and railing against the phoniness of the adult world. A key theme is Holden's desire to be the catcher in the rye, a metaphor for preserving childhood innocence from the corruption of adulthood.",
         },

    8: { 
        title: "Brave New World", 
        author: "Aldous Huxley", 
        price: 13.49, 
        category: "Science Fiction", 
        pages: 268, 
        publisher: "Chatto & Windus", 
        language: "English", 
        isbn: "978-0060850524", 
        image: bravenewWorld, 
        description: "Brave New World is a dystopian novel by Aldous Huxley set in a futuristic World State where human society is engineered and conditioned into a rigid caste system to ensure stability and conformity. The story explores the loss of individuality, emotion, and freedom in a society that values superficial happiness, consumerism, and social order above all else, and critiques the potential dangers of unchecked technological and social control.", 
    },
  }

  const book = books[id] || books[1]

  const handleAddToCart = () => {
    addToCart(book, quantity);
    alert(`Added ${quantity} copy(ies) of "${book.title}" to cart!`)
  }

  return (
    <div className="bookDetailsPage">
      <Link to="/books" className="backLink">
        ← Back to Books
      </Link>

      <div className="detailsContainer">
        <div className="bookImage">
          <img src={book.image || "/placeholder.svg"} alt={book.title} />
        </div>

        <div className="bookInformation">
          <h1>{book.title}</h1>
          <h2 className="bookAuthor">by {book.author}</h2>
          <p className="bookPrice">${book.price}</p>

          <div className="bookMeta">
            <div className="metaItem">
              <span className="metaLabel">Category:</span>
              <span>{book.category}</span>
            </div>
            <div className="metaItem">
              <span className="metaLabel">Pages:</span>
              <span>{book.pages}</span>
            </div>
            <div className="metaItem">
              <span className="metaLabel">Publisher:</span>
              <span>{book.publisher}</span>
            </div>
            <div className="metaItem">
              <span className="metaLabel">Language:</span>
              <span>{book.language}</span>
            </div>
            <div className="metaItem">
              <span className="metaLabel">ISBN:</span>
              <span>{book.isbn}</span>
            </div>
          </div>

          <div className="purchaseSection">
            <div className="quantitySelector">
              <label>Quantity:</label>
              <div className="quantityButtons">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
            <button className="addToCartButton" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          <div className="bookDescription">
            <h3>Description</h3>
            <p>{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails