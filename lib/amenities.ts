export type AmenityKey =
  | 'aircon'
  | 'balcony'
  | 'bath'
  | 'braai'
  | 'dstv'
  | 'dishwasher'
  | 'gym'
  | 'hotel-facilities'
  | 'inverter'
  | 'iron'
  | 'open-parking'
  | 'pool'
  | 'safe'
  | 'sea-views'
  | 'shower'
  | 'tumble-dryer'
  | 'tv'
  | 'undercover-parking'
  | 'washing-machine'
  | 'wifi';

export interface AmenityDef {
  label: string;
  icon: string; // Lucide icon name
}

export const AMENITIES: Record<AmenityKey, AmenityDef> = {
  'aircon':            { label: 'Air Conditioning',   icon: 'Wind' },
  'balcony':           { label: 'Balcony',            icon: 'LayoutPanelTop' },
  'bath':              { label: 'Bath',               icon: 'Bath' },
  'braai':             { label: 'Braai / BBQ',         icon: 'Flame' },
  'dstv':              { label: 'DSTV',               icon: 'Tv2' },
  'dishwasher':        { label: 'Dishwasher',         icon: 'Waves' },
  'gym':               { label: 'Gym',                icon: 'Dumbbell' },
  'hotel-facilities':  { label: 'Hotel Facilities',   icon: 'Building2' },
  'inverter':          { label: 'Inverter',           icon: 'Zap' },
  'iron':              { label: 'Iron',               icon: 'Shirt' },
  'open-parking':      { label: 'Open Parking',       icon: 'ParkingSquare' },
  'pool':              { label: 'Pool',               icon: 'Droplets' },
  'safe':              { label: 'In-Room Safe',       icon: 'Lock' },
  'sea-views':         { label: 'Sea Views',          icon: 'Binoculars' },
  'shower':            { label: 'Shower',             icon: 'ShowerHead' },
  'tumble-dryer':      { label: 'Tumble Dryer',       icon: 'RefreshCw' },
  'tv':                { label: 'Smart TV',           icon: 'Monitor' },
  'undercover-parking':{ label: 'Parking',            icon: 'Car' },
  'washing-machine':   { label: 'Washing Machine',    icon: 'WashingMachine' },
  'wifi':              { label: 'Free WiFi',          icon: 'Wifi' },
};
