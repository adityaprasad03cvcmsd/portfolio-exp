import React from "react";
import contactImg from "../images/my_pic.jpg";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Contact Me.</h1>
              <p className="hire__text white">
                <strong>+91 881797 0562</strong>,email{" "}
                <strong>adityaprasad003@gmail.com</strong>,
                <a
                  href="https://www.linkedin.com/in/aditya-prasad-0741441a7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="icons_contacts"
                    alt=""
                    src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png"
                  />
                  linkedin
                </a>{" "}
                or{" "}
                <a
                  href="https://github.com/adityaprasad03cvcmsd"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="icons_contacts"
                    alt=""
                    src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
                  />
                  github
                </a>
              </p>
            </div>
            <img src={contactImg} alt="" className="contact__img" />
            {/* <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div> */}
          </div>
        </div>
        {/* <div className="col__2"></div> */}
      </div>
    </div>
  );
}

export default Contact;
