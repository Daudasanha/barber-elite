import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-black to-zinc-900 px-6 pt-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-500 uppercase tracking-[6px] text-sm">
            Barbearia Premium
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-6">
            Estilo, precisão e atitude em cada corte.
          </h1>

          <p className="text-zinc-400 text-lg mt-8 leading-relaxed max-w-xl">
            Uma experiência premium para homens que valorizam aparência,
            confiança e atendimento de alto nível.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">
            <a
              href="https://wa.me/554899197255?text=Olá! Quero agendar um horário na Barber Elite."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition text-center"
            >
              Agendar horário
            </a>

            <a
              href="#services"
              className="border border-yellow-500 text-yellow-500 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition text-center"
            >
              Ver serviços
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="/images/barber-main.jpg"
            alt="Barbearia Premium"
            className="rounded-[30px] shadow-2xl border border-yellow-500/20 w-full"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero