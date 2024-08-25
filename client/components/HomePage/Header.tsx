// src/components/HomePage/Header.tsx

import React, { useEffect, useState } from 'react'
import NavLinks from './Navbar' // Adjust the path as needed
import Logo from './Logo' // Adjust the path as needed
import '../main.scss' // Ensure this path is correct

function Header() {
  const [showHeader, setShowHeader] = useState(true)
  let lastScrollTop = 0

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop > lastScrollTop) {
        // Scroll down
        setShowHeader(false)
      } else {
        // Scroll up
        setShowHeader(true)
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop // For Mobile or negative scrolling
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`header ${showHeader ? 'show' : 'hide'} bg-blue-950 p-2 shadow-md`}
    >
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <NavLinks />
      </div>
    </header>
  )
}

export default Header
