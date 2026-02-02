"use client";

const EVENT_PRESETS = [
  { name: "Wedding", type: "Wedding Ceremony" },
  { name: "Birthday Party", type: "Birthday Celebration" },
  { name: "Corporate Event", type: "Corporate / Office Event" },
  { name: "Music Concert", type: "Live Concert" },
  { name: "College Fest", type: "College Festival" },
  { name: "Product Launch", type: "Brand Launch" },
  { name: "Conference", type: "Business Conference" },
  { name: "Private Party", type: "Private Gathering" },
  { name: "Religious Function", type: "Religious Event" },
];

export default function StepOne({ data, setData, next }: any) {
  const canProceed =
    data.eventName && data.eventType && data.date && data.location;

  return (
    <div className="space-y-4">
      {/* Event Name */}
      <input
        placeholder="Event Name"
        className="input"
        value={data.eventName || ""}
        onChange={(e) =>
          setData({ ...data, eventName: e.target.value })
        }
      />

      {/* Quick Event Presets */}
      <div>
        <p className="text-xs text-gray-500 mb-2">Quick select</p>
        <div className="flex flex-wrap gap-2">
          {EVENT_PRESETS.map((event) => (
            <button
              key={event.name}
              type="button"
              onClick={() =>
                setData({
                  ...data,
                  eventName: event.name,
                  eventType: event.type,
                })
              }
              className={`px-3 py-1 rounded-full text-xs border transition
                ${
                  data.eventName === event.name
                    ? "bg-black text-white"
                    : "hover:bg-gray-100 dark:hover:bg-neutral-800"
                }`}
            >
              {event.name}
            </button>
          ))}
        </div>
      </div>

      {/* Event Type */}
      <input
        placeholder="Event Type"
        className="input"
        value={data.eventType || ""}
        onChange={(e) =>
          setData({ ...data, eventType: e.target.value })
        }
      />

      {/* Date */}
      <input
        type="date"
        className="input"
        value={data.date || ""}
        onChange={(e) =>
          setData({ ...data, date: e.target.value })
        }
      />

      {/* Location */}
      <input
        placeholder="Location"
        className="input"
        value={data.location || ""}
        onChange={(e) =>
          setData({ ...data, location: e.target.value })
        }
      />

      {/* Venue */}
      <input
        placeholder="Venue (optional)"
        className="input"
        value={data.venue || ""}
        onChange={(e) =>
          setData({ ...data, venue: e.target.value })
        }
      />

      {/* Next Button */}
      <button
        onClick={next}
        disabled={!canProceed}
        className={`btn w-full ${
          !canProceed && "opacity-50 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </div>
  );
}
