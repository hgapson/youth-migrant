import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function NavLinks() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false) // Close the menu on large screens
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Initial check

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="relative flex items-center">
      {/* Toggle Button for Mobile */}
      {!isDesktop && (
        <button
          onClick={toggleMenu}
          className="mr-4 text-white focus:outline-none md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      )}

      {/* Mobile Menu */}
      {!isDesktop && isMenuOpen && (
        <div className="absolute right-0 top-12 z-50 w-48 rounded-lg bg-blue-950 shadow-lg">
          <ul className="flex flex-col items-start space-y-2 px-2 py-4 text-sm">
            <li>
              <Link
                to="/"
                className="font-semibold text-white hover:text-blue-500"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="font-semibold text-white hover:text-blue-500"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/our-programs"
                className="font-semibold text-white hover:text-blue-500"
                onClick={toggleMenu}
              >
                Our Programs
              </Link>
            </li>
            <li>
              <Link
                to="/our-partners"
                className="font-semibold text-white hover:text-blue-500"
                onClick={toggleMenu}
              >
                Our Partners
              </Link>
            </li>
            <li>
              <Link
                to="/get-involved"
                className="font-semibold text-white hover:text-blue-500"
                onClick={toggleMenu}
              >
                Get Involved
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-semibold text-white hover:text-blue-500"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      {isDesktop && (
        <div className="ml-auto flex space-x-6 text-base">
          <Link to="/" className="font-semibold text-white hover:text-blue-500">
            Home
          </Link>
          <Link
            to="/about-us"
            className="font-semibold text-white hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="/our-programs"
            className="font-semibold text-white hover:text-blue-500"
          >
            Programs
          </Link>
          <Link
            to="/our-partners"
            className="font-semibold text-white hover:text-blue-500"
          >
            Partners
          </Link>
          <Link
            to="/get-involved"
            className="font-semibold text-white hover:text-blue-500"
          >
            Get Involved
          </Link>
          <Link
            to="/contact"
            className="font-semibold text-white hover:text-blue-500"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}

export default NavLinks
