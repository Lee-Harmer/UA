export function TrustBar() {
  return (
    <div className="trust-bar" aria-label="Trust indicators">
      <div className="trust-bar__inner">
        <div className="trust-bar__item">
          <strong>Est.</strong>
          <span data-count="1988">1988</span>
        </div>

        <div className="trust-bar__dot" aria-hidden="true" />

        <div className="trust-bar__item">
          <span data-count="19">19</span>
          <strong>Complexes</strong>
        </div>

        <div className="trust-bar__dot" aria-hidden="true" />

        <div className="trust-bar__item">
          <span data-count="70">70</span>
          <strong>+ Units</strong>
        </div>

        <div className="trust-bar__dot" aria-hidden="true" />

        <div className="trust-bar__item">
          <strong>Personal Service</strong>
        </div>

        <div className="trust-bar__dot" aria-hidden="true" />

        <div className="trust-bar__item">
          <a
            href="tel:+27315612012"
            style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: 'color 200ms' }}
          >
            <strong>+27 31 561 2012</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
