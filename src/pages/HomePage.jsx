export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">How it was built</h1>
      <p>So basically - from the README, there was 2 pages that needed to built</p>
      <ul className="list-disc list-inside">
        <li>this one - describing how I built this SPA</li>
        <li>and a table with output data</li>
      </ul>
      <p>I went with:</p>
      <ul className="list-disc list-inside">
        <li>React and Vite - it is the defaco now-a-days</li>
        <li>
          React Router DOM - to build out the content and error pages. Updated to v7
        </li>
        <li>React Query - it will grab the data (cache it, or refetch)</li>
        <li>Tailwind CSS - because it&#39;s the flavour of the month</li>
        <li>Responsive tables (block level), and ARIA approved!</li>
      </ul>
    </>
  );
}
