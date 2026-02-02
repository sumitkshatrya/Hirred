"use client";

const OPTIONS = [
  {
    id: "planner",
    title: "Hire Event Planner",
    desc: "End-to-end event planning & coordination",
    required: ["Budget", "Event Duration"],
  },
  {
    id: "performer",
    title: "Hire Performer",
    desc: "DJ, Band, Dance group, Live acts",
    required: ["Performance Type", "Language"],
  },
  {
    id: "crew",
    title: "Hire Crew",
    desc: "Sound, lighting, stage, camera & support staff",
    required: ["Crew Type", "Crew Count"],
  },
];

export default function StepTwo({ data, setData, next, back }: any) {
  const selectType = (type: string) => {
    setData({
      ...data,
      hireType: type,
      details: {}, // reset details on change
    });
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        Who do you want to hire?
      </p>

      {OPTIONS.map((opt) => (
        <div
          key={opt.id}
          onClick={() => selectType(opt.id)}
          className={`border rounded-lg p-4 cursor-pointer transition
            ${
              data.hireType === opt.id
                ? "border-black bg-gray-100 dark:bg-neutral-800"
                : "hover:border-gray-400"
            }`}
        >
          <h3 className="font-medium">{opt.title}</h3>
          <p className="text-sm text-gray-500">{opt.desc}</p>

          <p className="text-xs text-gray-400 mt-2">
            Required: {opt.required.join(", ")}
          </p>
        </div>
      ))}

      {/* ACTION BUTTONS */}
      <div className="flex justify-between pt-4">
        <button onClick={back} className="btn-outline">
          Back
        </button>

        <button
          onClick={next}
          disabled={!data.hireType}
          className={`btn ${
            !data.hireType && "opacity-50 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
