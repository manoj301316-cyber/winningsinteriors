import { features } from "../data/servicesData";

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <h2>
          Why Hyderabad Homeowners
          <br />
          Love <span className="accent">Winnings Interior</span>
        </h2>

        <p className="section-subtitle">
          We combine premium design, transparent pricing, quality materials,
          and timely delivery to create homes you'll love for years.
        </p>

        <div className="features-grid">
          {features.map((feature) => (
            <article
              className="feature-card"
              key={feature.label}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3 className="feature-num">
                {feature.num}
              </h3>

              <p className="feature-label">
                {feature.label}
              </p>
            </article>
          ))}
        </div>

        <a
          href="#estimate"
          className="btn-secondary"
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  );
}