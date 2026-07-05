import StudioImage from "../assets/studio/studio.jpg";

export default function Centres() {
  return (
    <section className="centres" id="centres">
      <div className="container">
        <h2>Visit Our Studio in Hyderabad</h2>

        <div className="centre-panel-full">
          {/* Studio Image */}
          <div className="centre-img">
            <img
              src={StudioImage}
              alt="Winnings Interior Design Studio, Ameenpur, Hyderabad"
              className="centre-image"
            />

            <div className="centre-img-label">
              Winnings Interior • Ameenpur Studio
            </div>
          </div>

          {/* Studio Information */}
          <div className="centre-info">
            <div className="info-block">
              <h4 className="info-label">📍 ADDRESS</h4>

              <p>
                H.No. 5-165/34/A/1,
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

            <div className="info-block">
              <h4 className="info-label">🕒 STUDIO HOURS</h4>

              <p>
                Monday – Sunday
                <br />
                10:00 AM – 7:30 PM
              </p>
            </div>

            <div className="info-block">
              <h4 className="info-label">📞 PHONE</h4>

              <p>
                <a href="tel:+917989808900">
                  +91 79898 08900
                </a>
              </p>
            </div>

            <div className="info-block">
              <h4 className="info-label">💬 WHATSAPP</h4>

              <p>
                <a
                  href="https://wa.me/917989808900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with Us
                </a>
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=H.No.+5-165/34/A/1+Flat+No.+101+Plot+No.+34+Road+No.+17+Srivani+Nagar+Ganesh+Nagar+Ameenpur+Miyapur+Hyderabad+502032"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
