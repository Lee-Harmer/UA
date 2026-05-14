const reasons = [
  {
    numeral: 'I',
    title: 'The Beach',
    body: "Umhlanga's Blue Flag beach is one of South Africa's finest - warm Indian Ocean waters, a 3 km promenade, and the iconic red-and-white lighthouse.",
  },
  {
    numeral: 'II',
    title: 'The Village',
    body: 'A vibrant, walkable village with world-class restaurants, boutique shops, and Gateway Theatre of Shopping just minutes away.',
  },
  {
    numeral: 'III',
    title: 'The Location',
    body: 'Only 20 km north of Durban, Umhlanga is perfectly placed for day trips to the Valley of a Thousand Hills, uShaka Marine World, and beyond.',
  },
];

export function WhyUmhlanga() {
  return (
    <section className="why">
      <div className="container">
        <div className="why__inner">
          <div className="why__intro reveal">
            <span className="eyebrow">Why Umhlanga?</span>
            <h2 className="display-lg why__headline">
              South Africa&apos;s premier<br /><em>beach destination</em>
            </h2>
          </div>

          <ol className="why__list">
            {reasons.map((r, i) => (
              <li
                key={r.numeral}
                className="why__item reveal"
                style={{ '--i': i + 1 } as React.CSSProperties}
              >
                <span className="why__numeral">{r.numeral}</span>
                <div>
                  <h3 className="why__title">{r.title}</h3>
                  <p className="why__body">{r.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
