import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
       <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="h-[380px] rounded-3xl overflow-hidden border border-yellow-500/20"
>
  <img
    src="/images/barber-about.jpg"
    alt="Interior moderno de uma barbearia premium"
    className="w-full h-full object-cover"
  />
</motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-yellow-500 uppercase tracking-[4px] text-sm">
            Sobre nós
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Tradição, elegância e cuidado masculino.
          </h2>

          <p className="text-zinc-300 mt-6 leading-relaxed">
            A Barber Elite nasceu para oferecer uma experiência completa em
            estética masculina. Unimos técnicas modernas, atendimento premium e
            um ambiente sofisticado para transformar cada visita em um momento
            único.
          </p>

          <p className="text-zinc-400 mt-4 leading-relaxed">
            Aqui, cada corte é feito com precisão, cada detalhe importa e cada
            cliente recebe atenção personalizada.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default About