import ThemeToggle from './ThemeToggle';
import { Home } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100/70 backdrop-blur-xl border-b border-base-300/50 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a className="flex items-center gap-2"><Home className="w-4 h-4" /> Home</a></li>
            <li>
              <a>Proyectos</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Àlex López, Ph.D.</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className="flex items-center gap-2"><Home className="w-4 h-4" /> Home</a></li>
          <li>
            <details>
              <summary>Projects</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a></a></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="mr-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar
