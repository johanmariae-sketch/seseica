import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Users, Globe, Award } from "lucide-react"

const milestones = [
  { year: "1998", title: "Fundación", desc: "SESEICA S.R.L. nace en Santo Domingo con la misión de proveer soluciones de sellado industrial." },
  { year: "2005", title: "Expansión", desc: "Ampliación de líneas de productos y alianzas con marcas internacionales de primer nivel." },
  { year: "2015", title: "Consolidación", desc: "Nos convertimos en referente del sellado industrial en la República Dominicana." },
  { year: "2024", title: "Innovación", desc: "Incorporación de nuevas tecnologías y servicios de reparación avanzada." },
]

const stats = [
  { icon: Building2, value: "+25", label: "Años de experiencia" },
  { icon: Users, value: "+200", label: "Clientes industriales" },
  { icon: Globe, value: "+10", label: "Marcas representadas" },
  { icon: Award, value: "100%", label: "Compromiso de calidad" },
]

export default function Historia() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="historia" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-transparent to-[#f8fafc] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#C41E24] font-semibold text-sm tracking-widest uppercase">Nuestra Historia</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 font-heading">
            Más de 25 años en la industria
          </h2>
          <p className="text-[#64748b] mt-4 max-w-2xl mx-auto text-lg">
            Fundada en noviembre de 1998, SESEICA S.R.L. se dedica a proveer todos los productos
            y servicios necesarios para el sellado y la transferencia de fluidos a las industrias
            productivas de la República Dominicana.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              className="relative p-6 rounded-2xl bg-[#f1f5f9] border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C41E24]/30 to-transparent group-hover:via-[#C41E24]/60 transition-all" />
              <span className="text-[#C41E24] font-bold text-3xl font-heading">{m.year}</span>
              <h3 className="text-[#1e3a5f] font-semibold text-lg mt-2">{m.title}</h3>
              <p className="text-[#64748b] text-sm mt-2 leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
            >
              <Icon className="w-8 h-8 text-[#C41E24] mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-[#1e3a5f] font-heading">{value}</p>
              <p className="text-[#64748b] text-sm mt-1">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
