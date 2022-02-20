import React, { Component } from "react";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Get In touch</h2>
          <p>Call +49 123456789</p>
          <p>email tolulopeflosbach@gmail.com</p>
        </div>

        <div>
          <h1>Send me a message</h1>
          <form>
            <input type="email" placeholder="Your email address" /> <br />
            <input type="phone" placeholder="Your phone number" />
            <br />
            <textarea type="text" placeholder="Type your message" />
            <br />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactPage;
