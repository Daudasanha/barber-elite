import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-yellow-500">
            Barber Elite
          </h2>

          <p className="text-zinc-500 text-sm mt-2">
            Barbearia premium para homens de atitude.
          </p>
        </div>

        <div className="flex items-center gap-5 text-yellow-500 text-xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Barber Elite"
            className="hover:text-yellow-400 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook da Barber Elite"
            className="hover:text-yellow-400 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://wa.me/554899197255?text=Olá! Quero agendar um horário na Barber Elite."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp da Barber Elite"
            className="hover:text-yellow-400 transition"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="text-zinc-600 text-sm">
          © 2026 Barber Elite. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer