import "../styles/About.css"

const About = () => {
  return (
    <div className="aboutPage">
      <div className="aboutHeader">
        <h1>About BookHaven</h1>
        <p>Your trusted literary sanctuary</p>
      </div>

      <div className="aboutContent">
        <div className="aboutSection">
          <h2>Our Story</h2>
          <p>
            HavenBookstore was founded with a simple mission: to create a haven for book lovers everywhere. We believe
            that books have the power to transform lives, inspire minds, and connect people across cultures and
            generations.
          </p>
          <p>
            From classic literature to contemporary bestsellers, we carefully curate our collection to bring you the
            finest reading experiences. Our team of passionate readers is dedicated to helping you discover your next
            favorite book.
          </p>
        </div>

        <div className="aboutSection">
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature">
              <h3>Curated Selection</h3>
              <p>Handpicked books across all genres and categories</p>
            </div>
            <div className="feature">
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping to your doorstep</p>
            </div>
            <div className="feature">
              <h3>Best Prices</h3>
              <p>Competitive prices and regular discounts</p>
            </div>
            <div className="feature">
              <h3>Customer Service</h3>
              <p>Friendly support team ready to help you</p>
            </div>
          </div>
        </div>

        <div className="aboutSection">
          <h2>Our Vision</h2>
          <p>
            We envision a world where everyone has access to quality literature. Through HavenBookstore, we aim to
            promote literacy, encourage reading habits, and foster a community of lifelong learners and book
            enthusiasts.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
