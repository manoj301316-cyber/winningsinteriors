export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <div className="logo-mark">
              <span>WI</span>
            </div>

            <div className="logo-details">
              <h3 className="logo-name">WINNINGS INTERIOR</h3>
              <p className="logo-subtitle">
                Luxury Interior Design Studio
              </p>
            </div>
          </a>

          <p className="footer-address">
            📍 H.No. 5-165/34/A/1,
            <br />
            Flat No. 101, First Floor,
            <br />
            Plot No. 34, Road No. 17,
            <br />
            Srivani Nagar, Ganesh Nagar,
            <br />
            Ameenpur, Miyapur,
            <br />
            Hyderabad – 502032,
            <br />
            Telangana, India
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#why-us">Why Us</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#centres">Visit Our Studio</a>
          <a href="#estimate">Get Free Estimate</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>

          <p>
            📞{" "}
            <a href="tel:7989808900">
              +91 79898 08900
            </a>
          </p>

          <p>
            💬{" "}
            <a
              href="https://wa.me/917989808900"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </p>

          <p>
            📧 info@winningsinterior.com
          </p>

          <p className="footer-copy">
            © {new Date().getFullYear()} Winnings Interior.
            All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}