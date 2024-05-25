export async function Hygraph(query, variables) {
  const response = await fetch(import.meta.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });
  return response;
}
