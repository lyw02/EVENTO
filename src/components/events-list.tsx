import { EventoEvent } from "@/lib/types";
import EventCard from "@/components/event-card";

type EventsListProps = {
  city: string;
};

export default async function EventsList({ city }: EventsListProps) {
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEvent[] = await res.json();

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
