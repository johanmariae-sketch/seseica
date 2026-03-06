import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Cog, Droplets, CircleDot, Gauge, Pipette, ArrowRight, ChevronRight, Wrench } from "lucide-react"

const products = [
  {
    icon: Droplets,
    title: "Bombas Centrífugas",
    desc: "Componentes clave para petróleo, gas, procesamiento químico, generación de energía y recursos hídricos.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
    details: [
      "Bombas centrífugas de proceso y transferencia",
      "Bombas sumergibles y de pozo profundo",
      "Bombas dosificadoras de alta precisión",
      "Repuestos y kits de reparación originales",
      "Servicio técnico especializado en campo",
    ],
    specs: { presión: "Hasta 400 bar", temperatura: "-80°C a +450°C", materiales: "Acero inox, hierro fundido, duplex" },
    brands: "Flowserve, Grundfos, KSB",
  },
  {
    icon: Cog,
    title: "Sellos Mecánicos",
    desc: "Sellos estándar, cartucho, fuelle metálico, mezcladores, compresores y barrera de gas.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=80",
    details: [
      "Sellos de cartucho para instalación simplificada",
      "Sellos de fuelle metálico para alta temperatura",
      "Sellos para mezcladores y agitadores industriales",
      "Sistemas de barrera y soporte API Plan",
      "Reparación y mantenimiento preventivo",
    ],
    specs: { presión: "Hasta 450 bar", temperatura: "-200°C a +400°C", materiales: "Carburo de silicio, carbón, PTFE" },
    brands: "John Crane, Burgmann, Flowserve",
  },
  {
    icon: CircleDot,
    title: "Empaquetaduras",
    desc: "Empaquetaduras trenzadas y de alta tecnología para válvulas y equipos rotativos.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&q=80",
    details: [
      "Empaquetaduras de grafito expandido",
      "Empaquetaduras de PTFE y fibra sintética",
      "Anillos de sellado para bombas y válvulas",
      "Empaquetaduras con inhibidores de corrosión",
      "Disponibles en rollos y anillos precortados",
    ],
    specs: { presión: "Hasta 700 bar", temperatura: "-240°C a +650°C", materiales: "Grafito, PTFE, GFRE, Kevlar" },
    brands: "Garlock, Chesterton, Palmetto",
  },
  {
    icon: Gauge,
    title: "Juntas Espirometálicas",
    desc: "Juntas de sellado para conexiones bridadas en condiciones de alta presión y temperatura.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80",
    details: [
      "Juntas espirometálicas con anillo interior y exterior",
      "Fabricadas según normas ASME B16.20",
      "Materiales: acero inoxidable 304/316, grafito, PTFE",
      "Para presiones hasta 2500 PSI y clase 150-2500",
      "Disponibles en todas las medidas ANSI/DIN",
    ],
    specs: { presión: "Hasta 2500 PSI", temperatura: "-200°C a +1000°C", materiales: "SS 304/316, grafito, PTFE" },
    brands: "Flexitallic, Garlock",
  },
  {
    icon: Pipette,
    title: "Sellos Hidráulicos",
    desc: "Sellos hidráulicos y neumáticos para cilindros, pistones y sistemas de alta presión.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=900&q=80",
    details: [
      "Sellos de pistón y vástago simple y doble efecto",
      "Anillos guía y bandas de desgaste",
      "Sellos limpiadores y anti-polvo",
      "Kits completos para cilindros hidráulicos",
      "Materiales: NBR, Viton, poliuretano, PTFE",
    ],
    specs: { presión: "Hasta 700 bar", temperatura: "-40°C a +200°C", materiales: "NBR, Viton, PU, PTFE" },
    brands: "Parker, Freudenberg, Trelleborg",
  },
  {
    icon: Wrench,
    title: "Compensadores",
    desc: "Compensadores de caucho STENFLEX para absorción de movimiento, vibración y ruido en tuberías.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80",
    details: [
      "Compensadores de caucho tipo fuelle simple y doble",
      "Juntas de expansión metálicas y de tela",
      "Absorción de vibraciones y desalineamientos",
      "Aislamiento acústico en sistemas de tuberías",
      "Resistentes a presiones y temperaturas elevadas",
    ],
    specs: { presión: "Hasta 25 bar", temperatura: "-30°C a +130°C", materiales: "EPDM, NBR, Viton, acero" },
    brands: "STENFLEX",
  },
]

export default function Productos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)

  return (
    <section id="productos" className="py-24 px-6 md:px-12 bg-white relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block bg-[#C41E24] px-10 py-3 mb-6">
            <span className="text-white font-heading font-bold text-sm tracking-widest uppercase">Nuestros Productos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 font-heading">
            Soluciones Industriales
          </h2>
          <p className="text-[#64748b] mt-4 max-w-2xl mx-auto text-lg">
            Ofrecemos una amplia gama de productos de sellado y transferencia de fluidos
            de las marcas más reconocidas a nivel mundial.
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-[#C41E24]/40 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                <div className="absolute top-4 left-4 p-2 rounded-xl bg-[#C41E24]/90 shadow-md">
                  <product.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-[#1e3a5f] font-semibold text-lg font-heading group-hover:text-[#C41E24] transition-colors">
                  {product.title}
                </h3>
                <p className="text-[#64748b] text-sm mt-2 leading-relaxed">{product.desc}</p>
                <button
                  onClick={() => setSelectedProduct(i)}
                  className="mt-4 flex items-center gap-2 text-[#C41E24] text-sm font-semibold cursor-pointer hover:gap-3 transition-all duration-200"
                >
                  Ver Detalles <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-screen detail view */}
        <AnimatePresence>
          {selectedProduct !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-white overflow-y-auto"
            >
              {/* Top bar with back button */}
              <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="flex items-center gap-2 text-[#1e3a5f] font-semibold text-sm hover:text-[#C41E24] transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Volver a Productos
                  </button>
                  <img src="/logo-seseica.png" alt="SESEICA" className="h-8 w-auto" />
                </div>
              </div>

              {/* Hero image */}
              <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                  src={products[selectedProduct].detailImage}
                  alt={products[selectedProduct].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-[#C41E24]">
                        {(() => { const Icon = products[selectedProduct].icon; return <Icon className="w-5 h-5 text-white" /> })()}
                      </div>
                      <span className="text-white/70 text-sm font-medium tracking-wider uppercase">Producto</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-heading">
                      {products[selectedProduct].title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Main content */}
                  <div className="lg:col-span-2">
                    <p className="text-[#334155] text-lg leading-relaxed mb-8">
                      {products[selectedProduct].desc}
                    </p>

                    <h3 className="text-[#1e3a5f] font-heading font-bold text-xl mb-4">Características</h3>
                    <ul className="space-y-3 mb-8">
                      {products[selectedProduct].details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-3 text-[#334155]">
                          <div className="w-6 h-6 rounded-full bg-[#C41E24]/10 flex items-center justify-center shrink-0 mt-0.5">
                            <ArrowRight className="w-3 h-3 text-[#C41E24]" />
                          </div>
                          <span className="text-base">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href="#contacto"
                      onClick={() => setSelectedProduct(null)}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#C41E24] text-white font-semibold text-base hover:bg-[#a5181e] transition-colors cursor-pointer shadow-lg"
                    >
                      Solicitar Cotización <ChevronRight className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Specs */}
                    <div className="bg-[#f1f5f9] rounded-2xl p-6">
                      <h4 className="text-[#1e3a5f] font-heading font-bold text-sm mb-4 uppercase tracking-wider">Especificaciones</h4>
                      <div className="space-y-4">
                        {Object.entries(products[selectedProduct].specs).map(([key, val]) => (
                          <div key={key} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                            <p className="text-[#94a3b8] text-xs uppercase tracking-wider font-semibold">{key}</p>
                            <p className="text-[#1e3a5f] font-bold text-sm mt-1">{val}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Brands */}
                    <div className="bg-[#1e3a5f] rounded-2xl p-6">
                      <h4 className="text-white font-heading font-bold text-sm mb-3 uppercase tracking-wider">Marcas Disponibles</h4>
                      <p className="text-white/80 text-sm leading-relaxed">{products[selectedProduct].brands}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
