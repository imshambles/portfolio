import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e4jntyw",
        "template_s1jt0tr",
        form.current,
        "PGnXV5Fo2hKCKay11"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>E-mail</h4>
            {/* <h5>vishwaslatiyan@gmail.com</h5> */}
            <a href="mailto:vishwaslatiyan@gmail.com">Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            {/* <h5>vishwaslatiyan@gmail.com</h5> */}
            <a
              href="https://api.whatsapp.com/send?phone=918860063830"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Your E-mail address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <Popup
            trigger={
              <button className="btn btn-primary" type="submit">
                Send Message
              </button>
            }
            style={{left: "48.1562px"}}
          >
            <div className="popup-text">
              Your message has been received. I'll get back to you shortly! :)
            </div>
          </Popup>
        </form>
      </div>
    </section>
  );
};

export default Contact;
