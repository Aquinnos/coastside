import { useState } from 'react';
import Container from './ui/Container';
import Sidebar from './Sidebar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-amber-50 text-black py-4">
      <Container className="p-3">
        <div className="flex justify-around items-center">
          <div>
            <h1 className="uppercase text-amber-300 text-4xl">
              <a href="/">CoastSide</a>
            </h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex flex-row gap-5">
              <li>
                <a href="/" className="hover:text-amber-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/rooms"
                  className="hover:text-amber-300 transition-colors"
                >
                  Rooms
                </a>
              </li>
              <li>
                <a
                  href="events"
                  className="hover:text-amber-300 transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-amber-300 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="contact"
                  className="hover:text-amber-300 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hover:text-amber-300 transition-colors hidden sm:block">
              En
            </button>
            <button
              type="button"
              className="bg-amber-200 text-black px-4 py-2 rounded hover:bg-amber-300 transition-colors hidden sm:block"
            >
              Book
            </button>

            <button
              className="md:hidden"
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};

export default Header;
