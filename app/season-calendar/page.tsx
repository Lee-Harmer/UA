import { SeasonCalendar } from '@/components/SeasonCalendar';

export const metadata = {
  title: 'Season Date Calendar | Umhlanga Accommodation',
  description: 'View seasonal date ranges and minimum stays for Umhlanga Accommodation properties.',
};

export default function SeasonCalendarPage() {
  return (
    <main>
      <section style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container--narrow">
          <h1 className="display-lg" style={{ marginBottom: '0.5rem' }}>Season Date Calendar</h1>
          <p className="body-lg" style={{ color: 'var(--mid-grey)', marginBottom: '2rem' }}>
            Seasonal date ranges and minimum stays for all properties.
          </p>
          <SeasonCalendar alwaysOpen />
        </div>
      </section>
    </main>
  );
}
