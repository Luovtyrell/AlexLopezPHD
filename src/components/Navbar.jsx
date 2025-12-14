import ThemeToggle from './ThemeToggle';
import { Home, BookOpen, FolderGit2, GraduationCap, Presentation } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Publications', href: '#publications', icon: BookOpen },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Education', href: '#timeline', icon: GraduationCap },
    { name: 'Congresses', href: '#conferences', icon: Presentation },
  ];

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
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="flex items-center gap-2"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="btn btn-ghost text-xl"
        >
          Àlex López, Ph.D.
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-1 px-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="btn btn-sm btn-ghost flex items-center gap-2"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            </li>
          ))}
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
