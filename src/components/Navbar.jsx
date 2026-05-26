import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/95 border-b border-yellow-500/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="#"
          className="text-3xl font-bold text-yellow-500"
        >
          Barber Elite
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#" className="hover:text-yellow-500 transition">
            Início
          </a>

          <a href="#about" className="hover:text-yellow-500 transition">
            Sobre
          </a>

          <a href="#services" className="hover:text-yellow-500 transition">
            Serviços
          </a>

          <a href="#gallery" className="hover:text-yellow-500 transition">
            Galeria
          </a>

          <a href="#contact" className="hover:text-yellow-500 transition">
            Contato
          </a>
        </nav>

        {/* BOTÃO DESKTOP */}
        <a
          href="https://wa.me/554899197255?text=Olá! Quero agendar um horário na Barber Elite."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-yellow-500 text-black px-7 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Agendar
        </a>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-yellow-500"
          aria-label="Abrir menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-yellow-500/20 px-6 py-8">
          <nav className="flex flex-col gap-6 text-lg">
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Início
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Sobre
            </a>

            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Serviços
            </a>

            <a
              href="#gallery"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Galeria
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Contato
            </a>

            <a
              href="https://wa.me/554899197255?text=Olá! Quero agendar um horário na Barber Elite."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold text-center"
            >
              Agendar horário
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar