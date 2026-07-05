import { services } from "../data/servicesData";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>End-to-End Interior Solutions</h2>

        <p className="section-subtitle">
          Everything you need to transform your house into a beautiful,
          functional, and modern home.
        </p>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="service-item"
                key={service.label}
              >
                <div className="service-icon">
                  <Icon size={34} />
                </div>

                <h3>{service.label}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}