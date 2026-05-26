import { motion } from 'framer-motion'
import { FaCut, FaCrown } from 'react-icons/fa'
import { services } from '../data/services'

function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-yellow-500 uppercase tracking-[4px] text-sm">
            Serviços
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Serviços para um visual de respeito.
          </h2>

          <p className="text-zinc-400 mt-5">
            Escolha o serviço ideal e tenha uma experiência premium do início ao fim.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-zinc-950 border border-yellow-500/20 rounded-3xl p-6 hover:border-yellow-500 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-yellow-500 text-black flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                {index === 2 ? <FaCrown /> : <FaCut />}
              </div>

              <h3 className="text-xl font-bold">
                {service.title}
              </h3>

              <p className="text-zinc-400 mt-3 text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 text-2xl font-bold text-yellow-500">
                {service.price}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services