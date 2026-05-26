import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <a href="#" className="text-2xl font-bold text-yellow-500">
          Barber Elite
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li><a href="#home" className="hover:text-yellow-500 transition">Início</a></li>
          <li><a href="#about" className="hover:text-yellow-500 transition">Sobre</a></li>
          <li><a href="#services" className="hover:text-yellow-500 transition">Serviços</a></li>
          <li><a href="#gallery" className="hover:text-yellow-500 transition">Galeria</a></li>
          <li><a href="#contact" className="hover:text-yellow-500 transition">Contato</a></li>
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Agendar
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-yellow-500 text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-yellow-500/20 px-6 py-6">
          <ul className="flex flex-col gap-5 text-sm font-medium">
            <li><a href="#home" className="hover:text-yellow-500 transition">Início</a></li>
            <li><a href="#about" className="hover:text-yellow-500 transition">Sobre</a></li>
            <li><a href="#services" className="hover:text-yellow-500 transition">Serviços</a></li>
            <li><a href="#gallery" className="hover:text-yellow-500 transition">Galeria</a></li>
            <li><a href="#contact" className="hover:text-yellow-500 transition">Contato</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar