import type { TimelineEntry } from "~/lib/profile";

type TimelineItemProps = {
  entry: TimelineEntry;
};

export function TimelineItem({ entry }: TimelineItemProps) {
  return (
    <div className="timeline-item">
      <div className="t-date">{entry.date}</div>
      <h4>{entry.title}</h4>
      <div className="t-sub">{entry.sub}</div>
      {entry.points?.length ? (
        <ul>
          {entry.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}