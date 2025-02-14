import React from 'react'
import "../styles/dynamicStyles/footer.css"

const Footer = () => {
  return (
    <footer id="footer">
      {/* Important Section */}
      <section className="important footer-section">
        <p className="footer-subtitle">Important</p>
        <ol className="footer-list">
          <li><a className="footer-btn-link" href="#">Terms and Conditions</a></li>
          <li><a className="footer-btn-link" href="#">Privacy Policy</a></li>
          <li><a className="footer-btn-link" href="#">Payment Methods</a></li>
        </ol>
      </section>

      {/* Contact Section */}
      <section className="contacto footer-section">
        <p className="footer-subtitle">Contact us</p>
        <ol className="footer-list">
          <li><p className="footer-list-data">Sales +57 320 5698976</p></li>
          <li><p className="footer-list-data">Customer service 601 5941919</p></li>
          <li>
            <p className="footer-list-data">
              <strong>Schedule:</strong> <br /> Monday to Friday at 8:00 a.m to 6:00 p.m
            </p>
          </li>
        </ol>
      </section>

      {/* Redes Section */}
      <section className="redes footer-section">
        <p className="footer-subtitle">Address</p>
        <ol className="footer-list footer-redes">
          <li>
            <a href="#"><i className="bx bxl-facebook footer-icon-red"></i></a>
          </li>
          <li>
            <a href="#"><i className="bx bxl-instagram footer-icon-red"></i></a>
          </li>
          <li>
            <a href="#"><i className="bx bxl-youtube footer-icon-red"></i></a>
          </li>
        </ol>
      </section>
    </footer>
  )
}

export default Footer