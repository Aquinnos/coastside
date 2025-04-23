import { useEffect } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-70 z-40 md:hidden transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-amber-50 z-50 transform transition-transform duration-300 ease-in-out md:hidden
                   ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold text-black">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-amber-100 transition-colors"
              aria-label="Close menu"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1">
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="block py-2 px-4 hover:bg-amber-300 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/rooms"
                  className="block py-2 px-4 hover:bg-amber-300 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  Rooms
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="block py-2 px-4 hover:bg-amber-300 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 px-4 hover:bg-amber-300 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 px-4 hover:bg-amber-300 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="mt-auto pt-6 border-t border-amber-200">
            <button
              type="button"
              className="w-full bg-amber-200 text-black py-2 px-4 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
