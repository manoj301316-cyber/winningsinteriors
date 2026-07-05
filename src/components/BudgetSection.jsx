import { useState } from "react";

const BHK_OPTIONS = ["1 BHK", "2 BHK", "3 BHK", "3+ BHK"];
const PURPOSE_OPTIONS = ["Move In", "Rent Out", "Renovate"];

const PROPERTY_SELECT_OPTIONS = [
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "4 BHK+",
  "Villa",
];

export default function BudgetSection({ onEstimate }) {
  const [bhk, setBhk] = useState("");
  const [purpose, setPurpose] = useState("");
  const [error, setError] = useState("");

  function gotoStep2() {
    if (!bhk) {
      setError("Please select your floor plan.");
      return;
    }

    if (!purpose) {
      setError("Please select your purpose.");
      return;
    }

    setError("");

    const bhkKey = bhk.replace("+", "");

    const matchedProperty =
      PROPERTY_SELECT_OPTIONS.find((option) =>
        option.includes(bhkKey)
      ) || "";

    onEstimate(matchedProperty, purpose);

    document
      .getElementById("estimate")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  return (
    <section className="budget-section">
      <div className="budget-overlay"></div>

      <div className="container budget-content">
        <div className="budget-text">
          <h2>
    Your <span>Dream.</span> 
    <br/> 
    Your <span>Budget.</span>
</h2>

<h3>Get a Custom Estimate</h3>
        </div>

        <div className="budget-form-card">
          <h3>
            Personalized Interior Design Quote
            <br />
            in 30 Seconds
          </h3>

          <p className="step-label">
            STEP <strong>1</strong> OF 2
          </p>

          <div className="bhk-group">
            <p className="group-label">
              Your Floor Plan
            </p>

            <div className="bhk-buttons">
              {BHK_OPTIONS.map((label) => (
                <button
                  key={label}
                  type="button"
                  className={`bhk-btn ${
                    bhk === label ? "active" : ""
                  }`}
                  aria-pressed={bhk === label}
                  onClick={() => setBhk(label)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="bhk-group">
            <p className="group-label">
              Purpose
            </p>

            <div className="bhk-buttons">
              {PURPOSE_OPTIONS.map((label) => (
                <button
                  key={label}
                  type="button"
                  className={`purpose-btn ${
                    purpose === label ? "active" : ""
                  }`}
                  aria-pressed={purpose === label}
                  onClick={() => setPurpose(label)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <p className="budget-error">
              {error}
            </p>
          )}

          <button
            type="button"
            className="btn-cta full"
            onClick={gotoStep2}
          >
            Get Free Estimate
            <span className="free-badge">
              FREE
            </span>
            →
          </button>
        </div>
      </div>
    </section>
  );
}