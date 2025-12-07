import { useState } from "react"
import "../styles/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for contacting us! We will respond shortly.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="contactPage">
      <div className="contactHeader">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>

      <div className="contactContainer">
        <div className="contactInfo">
          <h2>Get In Touch</h2>
          <div className="infoItem">
            <h3>Address</h3>
            <p>123 Book Street, Reading City, leb</p>
          </div>
          <div className="infoItem">
            <h3>Phone</h3>
            <p>+961 03 123 456</p>
          </div>
          <div className="infoItem">
            <h3>Email</h3>
            <p>Haven@bookstore.com</p>
          </div>
          <div className="infoItem">
            <h3>Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="contactForm">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="formGroup">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="formGroup">
              <label>Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="formGroup">
              <label>Message</label>
              <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submitButton">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact