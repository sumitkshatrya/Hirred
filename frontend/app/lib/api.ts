export const postRequirement = async (data: any) => {
  const res = await fetch(
    "https://hirred-1-phym.onrender.com/api/requirements",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  return res.json();
};
