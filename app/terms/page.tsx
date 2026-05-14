import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Umhlanga Accommodations',
  description: 'Terms and conditions for guests occupying apartments booked through Umhlanga Accommodations - Penny Underwood.',
};

export default function TermsPage() {
  return (
    <main>
      <div className="legal-page__hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Legal</span>
          <h1 className="display-lg" style={{ color: 'var(--white)', marginTop: '0.75rem' }}>
            Terms &amp; Conditions
          </h1>
        </div>
      </div>

      <section className="legal-page__body">
        <div className="container">
          <div className="legal-content">

            <p className="legal-content__intro">
              Umhlanga Accommodation CC - Penny Underwood<br />
              Terms and Conditions for Guests Occupying the Apartments
            </p>

            <h2>Identity Verification</h2>
            <p>
              A copy of the booker's ID, Driver's Licence, or Passport is required to be emailed back to us within 48 hours of confirming a reservation.
            </p>

            <h2>Property Ownership</h2>
            <p>
              The guest accepts and acknowledges that the property is not owned by Umhlanga Accommodation. The owner of the property has given Umhlanga Accommodation a mandate to rent out the property, which allows the guest to occupy the unit for the purpose of their holiday only.
            </p>

            <h2>Guest Responsibilities</h2>
            <p>The guest agrees to use the property solely as a private holiday residence for the maximum number of people shown on the reservation form, and agrees not to:</p>
            <ul>
              <li>Cause or allow any guest or visitor to cause any nuisance, disturbance, or annoyance to other residents.</li>
              <li>Allow any smoking in the property, including hubbly.</li>
              <li>Bring any animals or pets into the property.</li>
              <li>Use the property for any illegal or immoral purposes, and to abide by all rules of the property.</li>
              <li>Sub-let the property in any way.</li>
            </ul>
            <p>
              No persons under the age of 25 years may occupy the property without a responsible adult present. No Matric Rage reservations are accepted. Guests may be evicted; we will act within our legal rights and the PIE Act.
            </p>
            <p>
              If these requirements are not complied with, the reservation/agreement will be terminated immediately.
            </p>

            <h2>Payment Terms</h2>
            <p>
              A deposit is required to hold the reservation, and the balance of payment is due 30 days before arrival. If the booking is made less than 30 days before arrival, full payment is due when the reservation letter is sent to the guest.
            </p>

            <h2>Cancellation Policy</h2>
            <p>
              If a cancellation is received 30 or more days prior to arrival, a full refund will be made less the booking fee. If a cancellation is received within 30 days of arrival, every effort will be made to re-let the apartment; if this is not possible, the monies will be forfeited. We regret that no refunds are made for early departures.
            </p>

            <h2>Security Deposit</h2>
            <p>
              A refundable damages deposit is required as stated in the reservation correspondence. This will be refunded without interest to the guest within 10 days of vacating the premises, less any reasonable costs for repairing or replacing damage to the property or its contents, including cleaning costs if the property is left in a dirty or untidy condition. All refuse must be removed as per instructions. A charge will be levied for keys returned late.
            </p>

            <h2>Damage &amp; Liability</h2>
            <p>
              Should any items be damaged through neglect, misuse, or carelessness on the part of the guest or any visitors, the guest agrees to repair, replace, or pay for those items. The onus is on the guest, once they have taken occupation, to ensure the apartment is looked after and secure. If damage occurs through the negligence or action of the guest, the guest agrees to indemnify the owner of the unit against any associated losses, including the sourcing of alternative accommodation and any lost income.
            </p>
            <p>
              The guest should notify the agent of any breakages or repairs required immediately, and allow necessary access to carry out repairs.
            </p>

            <h2>Unavailability</h2>
            <p>
              If a property becomes unavailable due to unforeseen circumstances, the guest will be informed as soon as possible and will be offered either similar accommodation or, if this is not acceptable, a full refund of monies received by Umhlanga Accommodation.
            </p>

            <h2>Check-In &amp; Check-Out</h2>
            <p>
              Unless other arrangements have been made with the agent, the apartment will be available for occupation from <strong>14:00</strong> and must be vacated by <strong>10:00</strong>. Keys must be returned in accordance with the arrangements made at collection.
            </p>

            <h2>Linen &amp; Towels</h2>
            <p>
              Linen is changed once a week and towels are changed every third day. Toiletries are not supplied. Toilet paper is supplied on arrival only. Beach towels are not provided.
            </p>

            <h2>Acceptance</h2>
            <p>
              Payment confirms and implies complete understanding and acceptance of the above Terms and Conditions.
            </p>

            <div className="legal-content__back">
              <Link href="/" className="btn btn--outline">← Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
