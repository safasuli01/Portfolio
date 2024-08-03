// import React from "react";
// import "./Contact.css";

// export default function Contact() {
//   return (
//     <div id="contact-section" className="contact-wrapper">
//       <h2>Keep in Touch</h2>
//       <div className="contact-details">
//         <div className="contact-item">safa.abduallah2001@hotmail.com</div>
//         <div className="contact-item">(+2)01061751779</div>
//         <button>Contact Me</button>
//       </div>
//     </div>
//   );
// }
import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Contact() {
  return (
    <div id="contact-section" className="contact-wrapper">
      <div className="contact-content">
        <div className="contact-info">
          <h2>GET IN TOUCH</h2>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} /> safa.abduallah2001@hotmail.com
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} /> (+2)01061751779
          </div>
        </div>
        <div className="contact-button">
          <button>Contact Me</button>
        </div>
        <div className="contact-social">
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
      <div className="contact-footer">
        <p>Copyright &copy;2024 REACT</p>
      </div>
    </div>
  );
}
