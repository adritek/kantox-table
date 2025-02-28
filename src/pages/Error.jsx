import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="text-center w-2xl mx-auto mt-4">
      <h1 className="text-7xl">404</h1>
      <h2 className="text-6xl">Page not found, click lil-dude to go back home</h2>
      <p id="lil-dude" className="text-5xl">
        <Link to="/" className="text-9xl underline">
          🤷‍♂️
        </Link>
      </p>
    </div>
  );
}
