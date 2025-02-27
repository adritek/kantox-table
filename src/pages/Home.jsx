export default function Home() {
  return (
    <div>
      <h1>How it was built</h1>
      <p>
        So basically - from the README, there was 2 pages that needed to built
      </p>
      <ul>
        <li>-this one - describing how I built this SPA</li>
        <li>-and a table with output data</li>
      </ul>
      <p>I went with:</p>
      <ul>
        <li>-React and Vite - it is the defaco now-a-days</li>
        <li>
          -React Router DOM - to build out the content and error pages (usage is
          v6)
        </li>
        <li>-React Query - it will grab the data (cache it, or refetch bts)</li>
        <li>
          -Vanilla CSS - it&aposs a little SPA - I like working with it, loading
          a whole library then adding all those classes (Tailwind) just seems
          like overkill - but I get that you use it
        </li>
      </ul>
    </div>
  );
}
