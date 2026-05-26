import { motion } from 'framer-motion'

function Gallery() {
  const images = [
    '/images/corte1.jpg',
    '/images/corte2.jpg',
    '/images/corte3.jpg',
    '/images/corte4.jpg',
    '/images/corte5.jpg',
    '/images/corte6.jpg',
  ]

  return (
    <section id="gallery" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-yellow-500 uppercase tracking-[4px] text-sm">
            Galeria
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Cortes, estilos e acabamento premium.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group h-72 rounded-3xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500 transition"
            >
              <img
                src={image}
                alt={`Corte masculino premium ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Gallery