export const postRequirement = async (data: any) => {
  const res = await fetch(
    "https://hirred-kj2v.vercel.app",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  return res.json();
};
