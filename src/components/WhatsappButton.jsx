import { FaWhatsapp } from 'react-icons/fa'

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/554899197255?text=Olá! Quero agendar um horário na Barber Elite."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar Barber Elite no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsappButton