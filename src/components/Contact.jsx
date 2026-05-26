import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-yellow-500 uppercase tracking-[4px] text-sm">
            Contato
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Agende seu horário agora.
          </h2>

          <p className="text-zinc-400 mt-5 leading-relaxed">
            Entre em contato pelo WhatsApp e garanta seu atendimento premium na Barber Elite.
          </p>

          <div className="space-y-5 mt-8">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-yellow-500 text-xl" />

              <span className="text-zinc-300">
                Rua Principal, 123 — Palhoça, SC
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-yellow-500 text-xl" />

              <span className="text-zinc-300">
                (48) 99999-9999
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaClock className="text-yellow-500 text-xl" />

              <span className="text-zinc-300">
                Segunda a sábado — 09h às 20h
              </span>
            </div>
          </div>

          <a
            href="https://wa.me/554899197255?text=Olá! Quero agendar um horário na Barber Elite."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar horário pelo WhatsApp"
            className="inline-block mt-10 bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Chamar no WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="h-[400px] rounded-3xl bg-zinc-800 border border-yellow-500/20 flex items-center justify-center"
        >
          <span className="text-zinc-500">
            Mapa / Localização
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact