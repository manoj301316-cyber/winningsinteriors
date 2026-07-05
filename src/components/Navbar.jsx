export default function Navbar() {
  return (
    <header className="navbar" id="navbar">
      <div className="container nav-inner">

        <a
  href="#home"
  className="logo"
  aria-label="Winnings Interior Home"
>
  <img
    src="/images/logo.png"
    alt="Winnings Interior"
    className="logo-image"
  />
</a>
        <a
          href="#estimate"
          className="btn-nav-cta"
          aria-label="Get Free Estimate"
        >
          Get Free Estimate
        </a>

      </div>
    </header>
  );
}
