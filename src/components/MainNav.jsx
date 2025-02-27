import { NavLink } from 'react-router-dom';

export default function MainNav() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Orders</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
