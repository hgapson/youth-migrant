import logo from '../public/logo.jpg'
import '../main.scss'

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={logo}
        alt="Logo"
        className="h-24 w-40 object-contain md:h-28 md:w-48 lg:h-32 lg:w-56"
      />
    </div>
  )
}

export default Logo
