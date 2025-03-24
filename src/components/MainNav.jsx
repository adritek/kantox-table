import { NavLink } from 'react-router';

export default function MainNav() {
  return (
    <header className="bg-gray-700 text-yellow-50 p-5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">Orders Made</div>
        <ul className="flex space-x-6 ml-8">
          <li>
            <NavLink to="/" end className="hover:text-gray-300">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="orders" className="hover:text-gray-300">
              Orders
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
