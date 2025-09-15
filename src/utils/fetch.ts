export async function getData() {
  const response = await fetch(`${import.meta.env.BASE_URL}data.json`);
  if (!response.ok) {
    throw new Error("Couldn't fetch data");
  }
  const { data } = await response.json();
  return data;
}
