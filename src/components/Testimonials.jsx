import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { testimonials } from '../data/testimonials'

function Testimonials() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-yellow-500 uppercase tracking-[4px] text-sm">
            Depoimentos
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            O que nossos clientes dizem.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-950 border border-yellow-500/20 rounded-3xl p-6"
            >
              <div className="flex gap-1 text-yellow-500 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-zinc-300 leading-relaxed">
                “{item.comment}”
              </p>

              <h3 className="mt-6 font-bold text-yellow-500">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials