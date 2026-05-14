import { AmenityKey } from '@/lib/amenities';
import { AmenityIcon } from '@/components/AmenityIcon';

const ALL_AMENITIES: AmenityKey[] = [
  'wifi', 'aircon', 'pool', 'sea-views', 'balcony', 'braai',
  'dstv', 'tv', 'dishwasher', 'washing-machine', 'tumble-dryer',
  'bath', 'shower', 'undercover-parking', 'safe', 'inverter', 'iron',
];

export function AmenitiesHighlight() {
  return (
    <section className="amenities-section section">
      <div className="container">
        <div className="amenities-section__header reveal">
          <span className="eyebrow">What&apos;s Included</span>
          <h2 className="display-lg">Everything you need<br />to <em>feel at home</em></h2>
          <p className="body-lg" style={{ maxWidth: '50ch', margin: '1rem auto 0', color: 'var(--mid-grey)', textAlign: 'center' }}>
            Our self-catering apartments are fully equipped with all the amenities
            for a comfortable, stress-free holiday.
          </p>
        </div>

        <div className="amenities-grid">
          {ALL_AMENITIES.map((key, i) => (
            <div
              key={key}
              className="reveal"
              style={{ '--i': i % 6 } as React.CSSProperties}
            >
              <AmenityIcon amenity={key} size={22} showLabel />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
