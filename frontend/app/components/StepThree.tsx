"use client";

const CREW_TYPES = [
  "Sound",
  "Lighting",
  "Stage Setup",
  "Camera / Video",
  "Security",
  "Electrician",
];

export default function StepThree({ data, setData, submit, back }: any) {
  const details = data.details || {};
  const duration = Number(details.duration || 1);
  const perDayBudget = Number(details.perDayBudget || 0);
  const totalBudget = perDayBudget * duration;

  const updateDetails = (newFields: any) => {
    setData({
      ...data,
      details: {
        ...details,
        ...newFields,
        totalBudget:
          (newFields.perDayBudget ?? perDayBudget) *
          (newFields.duration ?? duration),
      },
    });
  };

  const toggleCrewType = (type: string) => {
    const existing = details.crewTypes || [];
    const updated = existing.includes(type)
      ? existing.filter((t: string) => t !== type)
      : [...existing, type];

    updateDetails({ crewTypes: updated });
  };

  const isInvalid =
    !details.perDayBudget ||
    !details.duration ||
    (data.hireType === "crew" &&
      (!details.crewTypes?.length || !details.crewCount));

  return (
    <div className="space-y-4">
      {/* COMMON FIELDS (Planner / Performer / Crew) */}
      <input
        type="number"
        placeholder="Budget per day"
        className="input"
        onChange={(e) =>
          updateDetails({ perDayBudget: Number(e.target.value) })
        }
      />

      <input
        type="number"
        min={1}
        placeholder="Event Duration (days)"
        className="input"
        onChange={(e) =>
          updateDetails({ duration: Number(e.target.value) })
        }
      />

      {/* Auto Calculated Total */}
      {perDayBudget > 0 && duration > 0 && (
        <div className="text-sm bg-gray-100 dark:bg-neutral-800 p-3 rounded">
          Total Budget:{" "}
          <span className="font-semibold">₹{totalBudget}</span>
        </div>
      )}

      {/* PLANNER */}
      {data.hireType === "planner" && (
        <p className="text-xs text-gray-500">
          Budget will be calculated for the full event duration.
        </p>
      )}

      {/* PERFORMER */}
      {data.hireType === "performer" && (
        <>
          <input
            placeholder="Performance Type (DJ / Band / Dance)"
            className="input"
            onChange={(e) =>
              updateDetails({ performance: e.target.value })
            }
          />
          <input
            placeholder="Preferred Language"
            className="input"
            onChange={(e) =>
              updateDetails({ language: e.target.value })
            }
          />
        </>
      )}

      {/* CREW */}
      {data.hireType === "crew" && (
        <>
          <div>
            <p className="text-sm font-medium mb-2">Crew Types Needed</p>
            <div className="grid grid-cols-2 gap-2">
              {CREW_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => toggleCrewType(type)}
                  className={`border rounded px-3 py-2 text-sm transition
                    ${
                      details.crewTypes?.includes(type)
                        ? "bg-black text-white"
                        : "hover:bg-gray-100 dark:hover:bg-neutral-800"
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <input
            type="number"
            min={1}
            placeholder="Total Crew Count"
            className="input"
            onChange={(e) =>
              updateDetails({ crewCount: Number(e.target.value) })
            }
          />

          <input
            placeholder="Equipment Required (optional)"
            className="input"
            onChange={(e) =>
              updateDetails({ equipment: e.target.value })
            }
          />
        </>
      )}

      {/* ACTIONS */}
      <div className="flex justify-between pt-4">
        <button onClick={back} className="btn-outline">
          Back
        </button>

        <button
          type="button"
          onClick={submit}
          className="btn"
          disabled={isInvalid}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
