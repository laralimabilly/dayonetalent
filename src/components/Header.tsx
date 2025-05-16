import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import NavLinks from './NavLinks';

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      {/* Header */}
      <header className="relative z-20">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="img/DayOne_Logo_Light.png" alt="Logo Day One" className="max-w-36" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLinks classList='nav-link' />
          </div>
          
          <div className="hidden md:block">
            <button className="btn-primary">Get Started</button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-secondary hover:text-accent"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-dark py-4 border-t border-secondary/10"
          >
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <NavLinks classList='nav-link py-2' />
              <button className="btn-primary self-start mt-4">Get Started</button>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}

export default Header