import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGem, faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';

export default function CustomFooter() {
  return (
    <footer style={{ backgroundColor: '#f8f9fa' }} className="text-center text-lg-start text-muted">
      {/* Social Media Section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <Link to="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link to="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} />
          </Link>
          <Link to="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link to="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          {/* Company Info */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <FontAwesomeIcon icon={faGem} className="me-3" />
              Company name
            </h6>
            <p>
              Use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
          </div>

          {/* Products */}
          <div className="col-sm-6 col-md-3 col-lg-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <Link to="/angular" className="text-reset">Angular</Link>
            </p>
            <p>
              <Link to="/react" className="text-reset">React</Link>
            </p>
            <p>
              <Link to="/vue" className="text-reset">Vue</Link>
            </p>
            <p>
              <Link to="/laravel" className="text-reset">Laravel</Link>
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-sm-6 col-md-3 col-lg-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <Link to="/pricing" className="text-reset">Pricing</Link>
            </p>
            <p>
              <Link to="/settings" className="text-reset">Settings</Link>
            </p>
            <p>
              <Link to="/orders" className="text-reset">Orders</Link>
            </p>
            <p>
              <Link to="/help" className="text-reset">Help</Link>
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <FontAwesomeIcon icon={faHome} className="me-2" />
              New York, NY 10012, US
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="me-3" />
              info@example.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="me-3" />
              + 01 234 567 88
            </p>
            <p>
              <FontAwesomeIcon icon={faPrint} className="me-3" />
              + 01 234 567 89
            </p>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <Link to="/" className="text-reset fw-bold">
          YourWebsite.com
        </Link>
      </div>
    </footer>
  );
}
