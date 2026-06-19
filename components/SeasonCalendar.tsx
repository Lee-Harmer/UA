'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Season = 'low' | 'mid' | 'midplus' | 'high';

interface SeasonRow {
  from: string;
  to: string;
  season: Season;
  label: string;
  notes?: string;
}

const SEASONS_2026: SeasonRow[] = [
  { from: '14 Jan', to: '26 Mar',  season: 'low',     label: 'Low'   },
  { from: '27 Mar', to: '07 Apr',  season: 'mid',     label: 'Mid',     notes: '4 night min' },
  { from: '08 Apr', to: '23 Apr',  season: 'low',     label: 'Low'   },
  { from: '24 Apr', to: '03 May',  season: 'mid',     label: 'Mid',     notes: '4 night min · PH 27th & 1st' },
  { from: '04 May', to: '11 Jun',  season: 'low',     label: 'Low'   },
  { from: '12 Jun', to: '16 Jun',  season: 'midplus', label: 'Mid+',    notes: '4 night min' },
  { from: '17 Jun', to: '26 Jun',  season: 'low',     label: 'Low'   },
  { from: '27 Jun', to: '01 Jul',  season: 'mid',     label: 'Mid'   },
  { from: '02 Jul', to: '06 Jul',  season: 'midplus', label: 'Mid+',    notes: '4 night min' },
  { from: '07 Jul', to: '19 Jul',  season: 'midplus', label: 'Mid+',    notes: '4 night min' },
  { from: '20 Jul', to: '06 Aug',  season: 'low',     label: 'Low'   },
  { from: '07 Aug', to: '10 Aug',  season: 'mid',     label: 'Mid',     notes: '3 night min · Long weekend PH 10th' },
  { from: '11 Aug', to: '23 Sep',  season: 'low',     label: 'Low'   },
  { from: '24 Sep', to: '05 Oct',  season: 'mid',     label: 'Mid',     notes: '3 night min · Long weekend PH 24th & 25th' },
  { from: '06 Oct', to: '26 Nov',  season: 'low',     label: 'Low'   },
  { from: '27 Nov', to: '13 Dec',  season: 'midplus', label: 'Mid+',    notes: '4 night min · Rage (min 5 nights)' },
  { from: '14 Dec', to: '30 Jun',  season: 'high',    label: 'Peak',    notes: '7 night min' },
];

const SEASONS_2027: SeasonRow[] = [
  { from: '13 Jan', to: '18 Mar',  season: 'low',     label: 'Low'   },
  { from: '19 Mar', to: '05 Apr',  season: 'mid',     label: 'Mid',     notes: '4 night min' },
  { from: '06 Apr', to: '22 Apr',  season: 'low',     label: 'Low'   },
  { from: '23 Apr', to: '02 May',  season: 'mid',     label: 'Mid',     notes: '4 night min' },
  { from: '03 May', to: '09 Jun',  season: 'low',     label: 'Low'   },
  { from: '10 Jun', to: '16 Jun',  season: 'midplus', label: 'Mid+',    notes: '4 night min · Comrades' },
  { from: '17 Jun', to: '24 Jun',  season: 'low',     label: 'Low'   },
  { from: '25 Jun', to: '30 Jun',  season: 'mid',     label: 'Mid',     notes: '4 night min' },
  { from: '01 Jul', to: '05 Jul',  season: 'midplus', label: 'Mid+',    notes: '4 night min · Durban July' },
  { from: '06 Jul', to: '19 Jul',  season: 'mid',     label: 'Mid',     notes: '4 night min' },
  { from: '20 Jul', to: '05 Aug',  season: 'low',     label: 'Low'   },
  { from: '06 Aug', to: '10 Aug',  season: 'mid',     label: 'Mid',     notes: '3 night min · Long weekend PH 9th' },
  { from: '11 Aug', to: '21 Sep',  season: 'low',     label: 'Low'   },
  { from: '22 Sep', to: '04 Oct',  season: 'mid',     label: 'Mid',     notes: '4 night min' },
  { from: '05 Oct', to: '24 Nov',  season: 'low',     label: 'Low'   },
  { from: '25 Nov', to: '07 Dec',  season: 'midplus', label: 'Mid+',    notes: '5 night min · Rage' },
  { from: '08 Dec', to: '16 Dec',  season: 'mid',     label: 'Mid',     notes: '4 night min' },
  { from: '17 Dec', to: '10 Jan',  season: 'high',    label: 'Peak',    notes: '7 night min' },
];

const SEASON_STYLES: Record<Season, { bg: string; labelColor: string }> = {
  low:     { bg: '#D8F0DD', labelColor: '#1c4d28' },
  mid:     { bg: '#FFF4CC', labelColor: '#5a4300' },
  midplus: { bg: '#FFE4C4', labelColor: '#6b3000' },
  high:    { bg: '#FFD8D8', labelColor: '#6b0f0f' },
};

function CalendarTable({ rows }: { rows: SeasonRow[] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', fontFamily: 'var(--font-body)' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--warm-grey)' }}>
            <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mid-grey)', whiteSpace: 'nowrap' }}>From</th>
            <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mid-grey)', whiteSpace: 'nowrap' }}>To</th>
            <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mid-grey)' }}>Season</th>
            <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mid-grey)' }}>Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const s = SEASON_STYLES[row.season];
            return (
              <tr key={i} style={{ borderBottom: '1px solid var(--warm-grey)' }}>
                <td style={{ padding: '0.55rem 0.75rem', whiteSpace: 'nowrap', color: 'var(--charcoal)', fontWeight: 500 }}>{row.from}</td>
                <td style={{ padding: '0.55rem 0.75rem', whiteSpace: 'nowrap', color: 'var(--charcoal)', fontWeight: 500 }}>{row.to}</td>
                <td style={{ padding: '0.55rem 0.75rem' }}>
                  <span style={{ display: 'inline-block', background: s.bg, color: s.labelColor, fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.2rem 0.55rem', borderRadius: '2px' }}>
                    {row.label}
                  </span>
                </td>
                <td style={{ padding: '0.55rem 0.75rem', color: 'var(--mid-grey)', fontSize: '0.78rem' }}>{row.notes ?? ''}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function SeasonCalendar({ alwaysOpen }: { alwaysOpen?: boolean }) {
  const [open, setOpen] = useState(true);
  const [year, setYear] = useState<2026 | 2027>(2026);

  return (
    <div style={{ border: '1px solid var(--warm-grey)', borderRadius: '4px', marginBottom: '2rem', background: 'var(--white)' }}>
      {/* Header */}
      {alwaysOpen ? (
        <div style={{ padding: '1rem 1.25rem' }}>
          <span style={{ font: '600 0.9rem/1 var(--font-body)', color: 'var(--charcoal)' }}>Season Date Calendar</span>
          <span style={{ display: 'block', font: '400 0.75rem/1 var(--font-body)', color: 'var(--mid-grey)', marginTop: '0.3rem' }}>
            When does each season apply? Dates &amp; minimum stays below.
          </span>
        </div>
      ) : (
        <button
          onClick={() => setOpen(!open)}
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
          aria-expanded={open}
        >
          <div>
            <span style={{ font: '600 0.9rem/1 var(--font-body)', color: 'var(--charcoal)' }}>Season Date Calendar</span>
            <span style={{ display: 'block', font: '400 0.75rem/1 var(--font-body)', color: 'var(--mid-grey)', marginTop: '0.3rem' }}>
              When does each season apply? Click to view dates &amp; minimum stays.
            </span>
          </div>
          <ChevronDown
            size={18}
            strokeWidth={1.5}
            style={{ color: 'var(--mid-grey)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
          />
        </button>
      )}

      {(alwaysOpen || open) && (
        <div style={{ borderTop: '1px solid var(--warm-grey)', padding: '1.25rem' }}>
          {/* Year tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {([2026, 2027] as const).map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '2px',
                  border: '1px solid var(--warm-grey)',
                  background: year === y ? 'var(--near-black)' : 'transparent',
                  color: year === y ? 'var(--white)' : 'var(--charcoal)',
                  font: '600 0.75rem/1 var(--font-body)',
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                }}
              >
                {y}
              </button>
            ))}
          </div>

          <CalendarTable rows={year === 2026 ? SEASONS_2026 : SEASONS_2027} />

          {/* Legend */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--warm-grey)' }}>
            {(['low', 'mid', 'midplus', 'high'] as Season[]).map((s) => (
              <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', font: '500 0.72rem/1 var(--font-body)', color: SEASON_STYLES[s].labelColor }}>
                <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '2px', background: SEASON_STYLES[s].bg, border: `1px solid ${SEASON_STYLES[s].labelColor}` }} />
                {s === 'low' ? 'Low' : s === 'mid' ? 'Mid' : s === 'midplus' ? 'Mid+' : 'Peak'}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
