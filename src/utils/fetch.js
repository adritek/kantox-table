export async function getData() {
  const response = await fetch("/src/assets/data.json");
  if (!response.ok) {
    throw new Error("Couldn't fetch data");
  }
  const { data } = await response.json();
  return data;
}
