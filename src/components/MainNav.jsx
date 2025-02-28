import { NavLink } from 'react-router-dom';

export default function MainNav() {
  return (
    <>
      <header className="bg-gray-700 text-yellow-50 p-5">
        <nav className="max-w-6xl mx-auto flex items-center">
          <div className="text-xl font-bold">Adrian Rogers</div>
          <ul className="flex space-x-6 ml-8">
            <li>
              <NavLink to="/" className="hover:text-gray-300">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/orders" className="hover:text-gray-300">
                Orders
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
