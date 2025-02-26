import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="center">
      <h1>404</h1>
      <h2>
        Cannot find the page your looking for, click lil-dude to go back home
      </h2>
      <p id="lil-dude">
        <Link to="/">🤷‍♂️</Link>
      </p>
    </div>
  );
}
