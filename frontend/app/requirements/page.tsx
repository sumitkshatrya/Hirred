"use client";
import { useEffect, useState } from "react";

type Requirement = {
  _id: string;
  eventName: string;
  eventType: string;
  hireType: string;
  details?: {
    totalBudget?: number;
    duration?: number;
  };
  createdAt: string;
};

export default function RequirementsPage() {
  const [data, setData] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 useEffect(() => {
    fetch("https://hirred-2khy.onrender.com/api/requirements")
      .then((res) => {
        if (!res.ok) throw new Error("API not found");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">All Requirements</h1>

        {data.length === 0 ? (
        <p>No requirements found</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Event</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Hire</th>
              <th className="border p-2">Budget</th>
              <th className="border p-2">Duration</th>
              <th className="border p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r) => (
              <tr key={r._id} className="text-center">
                <td className="border p-2">{r.eventName}</td>
                <td className="border p-2">{r.eventType}</td>
                <td className="border p-2 capitalize">{r.hireType}</td>
                <td className="border p-2">
                  ₹{r.details?.totalBudget ?? "-"}
                </td>
                <td className="border p-2">
                  {r.details?.duration ?? "-"}
                </td>
                <td className="border p-2">
                  {new Date(r.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}