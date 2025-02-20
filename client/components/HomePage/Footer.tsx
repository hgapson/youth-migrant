import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  const handleMoreStoriesClick = () => {
    navigate('/about-us#testimonies')
  }

  const handleVision = () => {
    navigate('/about-us#vision')
  }

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          {/* About Section */}
          <div className="flex-1">
            <h2 className="mb-4 text-lg font-bold uppercase">Job Link</h2>
            <p className="text-sm text-gray-400">
              Job Link partners with migrants and former refugees to access
              life-changing solutions and transform how the world supports them.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-1 flex-col gap-8 md:flex-row">
            {/* About Us Links */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">About Us</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button onClick={handleVision} className="hover:text-white">
                    Mission & Vision
                  </button>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/about-us" className="hover:text-white">
                    Partners
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleMoreStoriesClick}
                    className="hover:text-white"
                  >
                    Stories
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Job Link. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
