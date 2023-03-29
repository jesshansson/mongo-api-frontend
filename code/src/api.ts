export async function fetchData() {
  const response = await fetch('https://project-mongo-api-fkbbu5sbga-lz.a.run.app');
  const data = await response.json();
  return data;
}
