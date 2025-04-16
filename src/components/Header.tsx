import Container from './ui/Container';

const Header = () => {
  return (
    <header className="bg-amber-50 text-black py-4">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="uppercase text-yellow-500 text-4xl">CoastSide</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex flex-row gap-5">
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hover:text-yellow-500 transition-colors">
              En
            </button>
            <button
              type="button"
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
            >
              Book
            </button>
          </div>
          <button className="md:hidden">
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
      </Container>
    </header>
  );
};

export default Header;
