import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"

const brands = [
  { name: "John Crane", specialty: "Sellos mecánicos y sistemas de filtración", logo: "JC" },
  { name: "Flowserve", specialty: "Bombas, sellos y válvulas industriales", logo: "FS" },
  { name: "STENFLEX", specialty: "Compensadores de caucho y juntas de expansion", logo: "SF" },
  { name: "Garlock", specialty: "Sellos, empaquetaduras y juntas", logo: "GK" },
  { name: "Burgmann", specialty: "Sellos mecánicos de precisión", logo: "BG" },
  { name: "Grundfos", specialty: "Bombas y soluciones de agua", logo: "GF" },
  { name: "KSB", specialty: "Bombas centrífugas y válvulas", logo: "KS" },
  { name: "Flexitallic", specialty: "Juntas espirometalicas y sellado", logo: "FX" },
]

export default function Marcas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="marcas" className="py-24 px-6 md:px-12 bg-[#1e3a5f] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#C41E24] font-semibold text-sm tracking-widest uppercase">Nuestras Marcas</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 font-heading">
            Marcas de Clase Mundial
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
            Representamos y distribuimos las marcas más prestigiosas en sellado industrial
            y transferencia de fluidos a nivel mundial.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              className="group relative p-6 rounded-2xl bg-white/10 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 cursor-pointer text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
            >
              <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C41E24] transition-all duration-300">
                <span className="text-white font-bold text-lg font-heading">{brand.logo}</span>
              </div>
              <h3 className="text-white font-semibold text-sm font-heading">{brand.name}</h3>
              <p className="text-white/50 text-xs mt-1 leading-relaxed">{brand.specialty}</p>
              <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-[#C41E24] transition-colors absolute top-4 right-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
