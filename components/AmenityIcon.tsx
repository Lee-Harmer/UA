import {
  Wind, LayoutPanelTop, Bath, Flame, Tv2, Waves, Zap, Shirt,
  Droplets, Lock, Binoculars, ShowerHead, RefreshCw, Monitor,
  Car, WashingMachine, Wifi, Dumbbell, Building2, ParkingSquare,
} from 'lucide-react';
import { AmenityKey, AMENITIES } from '@/lib/amenities';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Wind, LayoutPanelTop, Bath, Flame, Tv2, Waves, Zap, Shirt,
  Droplets, Lock, Binoculars, ShowerHead, RefreshCw, Monitor,
  Car, WashingMachine, Wifi, Dumbbell, Building2, ParkingSquare,
};

interface AmenityIconProps {
  amenity: AmenityKey;
  size?: number;
  showLabel?: boolean;
  chipStyle?: boolean;
}

export function AmenityIcon({ amenity, size = 16, showLabel = true, chipStyle = false }: AmenityIconProps) {
  const def = AMENITIES[amenity];
  if (!def) return null;

  const IconComp = ICON_MAP[def.icon];

  if (chipStyle) {
    return (
      <span className="amenity-chip">
        {IconComp && <IconComp size={13} strokeWidth={1.5} />}
        {showLabel && def.label}
      </span>
    );
  }

  return (
    <div className="amenity-item">
      <div className="amenity-item__icon">
        {IconComp && <IconComp size={size} strokeWidth={1.5} />}
      </div>
      {showLabel && <span className="amenity-item__label">{def.label}</span>}
    </div>
  );
}
