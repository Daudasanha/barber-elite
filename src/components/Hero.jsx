import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black px-6 pt-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-500 uppercase tracking-[4px] text-sm">
            Barbearia Premium
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
            Estilo, precisão e atitude em cada corte.
          </h1>

          <p className="text-zinc-300 mt-6 max-w-xl text-lg">
            Uma experiência premium para homens que valorizam aparência,
            confiança e atendimento de alto nível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#contact"
              className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold text-center hover:bg-yellow-400 transition"
            >
              Agendar horário
            </a>

            <a
              href="#services"
              className="border border-yellow-500 text-yellow-500 px-8 py-3 rounded-full font-semibold text-center hover:bg-yellow-500 hover:text-black transition"
            >
              Ver serviços
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full h-[420px] rounded-3xl overflow-hidden border border-yellow-500/30 shadow-2xl">
  <img
    src="/images/barber-main.jpg"
    alt="Barbeiro realizando corte masculino premium"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/30"></div>
</div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero