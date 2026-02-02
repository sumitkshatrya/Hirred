export const postRequirement = async (data: any) => {
  const res = await fetch(
    "https://localhost:5000",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  return res.json();
};
