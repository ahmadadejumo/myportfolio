import React, { useRef, useState } from "react";
import "./contact.css";
import phone from "../img/phone.png";
import email from "../img/email.png";
import address from "../img/address.png";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1j4wdgq",
        "template_m44dij5",
        formRef.current,
        "user_lJ1Qb0F6zS5Liv7jvJ1Yd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="phone" className="c-icon" />
              +234 8082065510
            </div>
            <div className="c-info-item">
              <img src={email} alt="phone" className="c-icon" />
              adejumoahmad4life@gmail.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="phone" className="c-icon" />
              Federal Teaching Hospital Quarters Gombe (FTHG) block C21, Gombe
              State Nigeria
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
