import { useState } from "react";
import { createLead } from "../api";

export default function EstimateForm({
  property,
  purpose,
  setProperty,
  setPurpose,
}) {
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState({
    text: "",
    type: "",
  });

  async function submitLead(e) {
    e.preventDefault();

    setMsg({ text: "", type: "" });

    if (!fname.trim()) {
      setMsg({
        text: "Please enter your full name.",
        type: "error",
      });
      return;
    }

    if (!phone.trim()) {
      setMsg({
        text: "Please enter your phone number.",
        type: "error",
      });
      return;
    }

    if (!/^\d{10}$/.test(phone.trim())) {
      setMsg({
        text: "Phone number must contain exactly 10 digits.",
        type: "error",
      });
      return;
    }

    if (!email.trim()) {
      setMsg({
        text: "Please enter your email address.",
        type: "error",
      });
      return;
    }

    const payload = {
      name: fname.trim(),
      phone: phone.trim(),
      email: email.trim(),
      property,
      budget,
      purpose,
    };

    setSubmitting(true);

    try {
      await createLead(payload);

      setMsg({
        text: "✅ Thank you! Our designer will contact you shortly.",
        type: "success",
      });

      setFname("");
      setPhone("");
      setEmail("");
      setBudget("");
      setProperty("");
      setPurpose("");
    } catch (error) {
      setMsg({
        text:
          error?.response?.data?.detail ||
          "❌ Submission failed. Please try again or call 7989808900.",
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="estimate-form" id="estimate">
      <div className="container">
        <h2>Get Your Free Estimate</h2>

        <p>
          Book a FREE 3D Design Session with our experts today.
        </p>

        <form className="form-card" onSubmit={submitLead}>
          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Your full name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="9876543210"
              value={phone}
              maxLength={10}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, ""))
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Property Type</label>

            <select
              value={property}
              onChange={(e) => setProperty(e.target.value)}
            >
              <option value="">Select property type</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>4 BHK+</option>
              <option>Villa</option>
            </select>
          </div>

          <div className="form-group">
            <label>Budget Range</label>

            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option value="">Select budget</option>
              <option>Under ₹5 Lakh</option>
              <option>₹5–10 Lakh</option>
              <option>₹10–20 Lakh</option>
              <option>Above ₹20 Lakh</option>
            </select>
          </div>

          <div className="form-group">
            <label>Purpose</label>

            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            >
              <option value="">Select purpose</option>
              <option>Move In</option>
              <option>Rent Out</option>
              <option>Renovate</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn-primary large full-width"
            id="submitBtn"
            disabled={submitting}
          >
            {submitting
              ? "Submitting..."
              : "Book FREE 3D Design Session →"}
          </button>

          <p className="form-disclaimer">
            By submitting, you agree to our Privacy Policy and
            Terms of Use.
          </p>

          {msg.text && (
            <div className={`form-msg ${msg.type}`}>
              {msg.text}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
