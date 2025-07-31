import classes from './HomePage.module.css';

export default function Home() {
  return (
    <div className="px-4 md:mx-auto">
      <h1 className="text-3xl font-bold pb-1.5">How I built the Kantox tables</h1>
      <p className="text-lg font-semibold ">
        From the README, there were 2 pages that needed to built.
      </p>
      <ul>
        <li>This one - describing how I built this SPA</li>
        <li>And a table with output data (see Orders)</li>
      </ul>
      <p className="text-lg font-semibold">I went with:</p>
      <ul className={classes.myList}>
        <li>React and Vite</li>
        <li>
          React Router - to build out the content and error pages. Updated to v7
        </li>
        <li>
          React Query - it will grab the data (cache it, or refetch when you flip
          between browser tabs or you can put a time to it)
        </li>
        <li>Tailwind CSS - because Tailwind</li>
        <li>Responsive tables (block level), and ARIA approved!</li>
      </ul>
      <p className="text-lg font-semibold">Future todo (no specific order):</p>
      <ul>
        <li>Migrate to TypeScript</li>
        <li>Clicking reference number displays modal with bank info</li>
        <li>Deploy to github pages (webhooks)</li>
        <li>Use loaders for pre-fetch</li>
      </ul>
    </div>
  );
}
