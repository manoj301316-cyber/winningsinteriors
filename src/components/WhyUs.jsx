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
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="feature-card" key={feature.label}>
                <div className="feature-icon">
                  <Icon size={26} />
                </div>

                <p className="feature-label">
                  <strong className="feature-num">{feature.num}</strong>{" "}
                  {feature.label}
                </p>
              </article>
            );
          })}
        </div>

        <a href="#estimate" className="btn-secondary">
          Book Free Consultation
        </a>
      </div>
    </section>
  );
}