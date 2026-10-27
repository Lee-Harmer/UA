export interface Special {
  id: string;
  tag: string;
  title: string;
  description: string;
  saving: string;
  validUntil?: string;
  conditions: string[];
  image: string;
  enquireSubject: string;
}

export const specials: Special[] = [
  {
    id: 'early-bird-summer',
    tag: 'Summer',
    title: 'Early Bird Summer Discount',
    description:
      'Lock in your December or January stay now and save 10% off our standard high-season rates. The beach will be warm, the promenade will be buzzing, and your accommodation will already be sorted at a price that rewards planning ahead.',
    saving: 'Save 10%',
    validUntil: '30 November 2026',
    conditions: [
      'Valid for stays in December 2026 and January 2027',
      'Must be booked and paid in full by 30 November 2026',
      'Minimum stay of 5 nights',
      'Subject to availability',
    ],
    image: '/images/hero/umhlanga-beach.jpg',
    enquireSubject: 'Early Bird Summer Discount Enquiry',
  },
  {
    id: 'seventh-night-free',
    tag: 'Extended Stay',
    title: '7 Nights, Pay for 6',
    description:
      'Stay a full week and your seventh night is on us. This special is available year-round across most of our properties, a straightforward reward for those who know that a week in Umhlanga is never quite long enough.',
    saving: '1 Night Free',
    conditions: [
      'Valid on stays of exactly 7 consecutive nights',
      'Available across most properties, confirm at booking',
      'Cannot be combined with other specials',
      'Valid year-round, subject to availability',
    ],
    image: '/images/hero/beach-lighthouse.jpg',
    enquireSubject: '7-Night Stay Special Enquiry',
  },
  {
    id: 'winter-escape',
    tag: 'Winter',
    title: 'Winter Escape Special',
    description:
      'June, July and August in Umhlanga are among the best-kept secrets on the KZN coast. Clear skies, mild temperatures, whale sightings from the shore, and empty beaches. Our winter rates make it even easier to say yes.',
    saving: 'Low Season Rates',
    validUntil: '31 August 2027',
    conditions: [
      'Valid for stays in June, July and August 2027',
      'Applies to standard low-season nightly rates',
      'Minimum stay of 3 nights',
      'Subject to availability',
    ],
    image: '/images/hero/lighthouse-pool.jpg',
    enquireSubject: 'Winter Escape Special Enquiry',
  },
  {
    id: 'last-minute',
    tag: 'Last Minute',
    title: 'Last Minute Deal',
    description:
      'Sometimes the best plans are made on short notice. If you book within 14 days of your arrival date, we can offer reduced rates on selected available units. Call us directly for the fastest response as availability moves quickly.',
    saving: 'Up to 15% Off',
    conditions: [
      'Must be booked within 14 days of arrival',
      'Available on selected units only, enquire for current availability',
      'Minimum stay of 2 nights',
      'Cannot be combined with other specials',
    ],
    image: '/images/hero/walkway-prom.jpg',
    enquireSubject: 'Last Minute Deal Enquiry',
  },
];
