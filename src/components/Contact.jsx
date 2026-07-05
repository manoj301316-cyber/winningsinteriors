export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <div className="contact-text">
          <h2>
            Confused Between Styles,
            <br />
            Layouts, and Costs?
          </h2>

          <p className="contact-subtitle">
            Talk to our interior experts and get a FREE consultation
            for your dream home.
          </p>

          <a href="#estimate" className="btn-primary large">
            Meet a Designer
          </a>

          <div className="contact-info">
            <a href="tel:+917989808900">
              📞 +91 79898 08900
            </a>

            <a
              href="https://wa.me/917989808900"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1116817152592!2d78.35074137575671!3d17.502181399486833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb932122f2beaf%3A0x869a6ea439a458f5!2sELTRIVE!5e0!3m2!1sen!2sin!4v1783070950440!5m2!1sen!2sin"
            className="contact-map-frame"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Winnings Interior Studio Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}