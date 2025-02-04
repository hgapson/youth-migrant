import logo from '../public/image.jpg'
import '../main.scss'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Logo"
          className="h-24 w-40 object-contain md:h-28 md:w-48 lg:h-32 lg:w-56"
        />
      </div>
    </Link>
  )
}

export default Logo
