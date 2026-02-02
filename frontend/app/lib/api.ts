export const postRequirement = async (data: any) => {
  const res = await fetch(
    "https://hirring-app-60mw.onrender.com/api/requirements",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  return res.json();
};
