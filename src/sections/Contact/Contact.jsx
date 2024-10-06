import "./Contact.css";

function Contact() {
  return (
    <div>
      <h1 className="contacttitle">Contact</h1>
      <div className="contactContainer">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xqakzldo"
            method="POST"
            className="contact-inputs">
            <input type="text" placeholder="Name" autoComplete="off" required />
            <input
              type="text"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              autoComplete="off"
              required></textarea>
            <input className="submitBtn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
