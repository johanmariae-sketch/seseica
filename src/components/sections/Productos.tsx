import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Cog, Droplets, CircleDot, Gauge, Pipette, ArrowRight, ChevronRight, Wrench } from "lucide-react"

type SubProduct = {
  name: string
  desc: string
}

type Product = {
  icon: typeof Cog
  title: string
  desc: string
  image: string
  detailImage: string
  fullDesc: string
  subProducts: SubProduct[]
  specs: Record<string, string>
  brands: string
}

const products: Product[] = [
  {
    icon: Droplets,
    title: "Bombas Centrífugas",
    desc: "Componentes clave para petróleo, gas, procesamiento químico, generación de energía y recursos hídricos.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
    fullDesc: "Las bombas y los sistemas de Flowserve son componentes clave en los sectores de petróleo y gas, procesamiento de químicos e hidrocarburos, generación de energía y recursos hídricos a nivel mundial, además del mercado industrial y de procesamiento en general.",
    subProducts: [
      { name: "Byron Jackson", desc: "Fundada en 1872. Ofrece bombas sumergibles de aceite, nucleares, de voluta, entre rodamientos, en voladizo y verticales, y un expansor de generador por turbina criogénico líquido." },
      { name: "Durco", desc: "Fundada en 1912. Reconocida como marca innovadora de control de flujo, cuya cartera integral de productos de bombas y válvulas está diseñada para manejar las aplicaciones más difíciles y exigentes." },
      { name: "Flowserve", desc: "Fundada en 1997. Líder mundial reconocido en el suministro de bombas, válvulas, sellos, automatización y servicios para los sectores de energía, petróleo, gas, químicos y otros." },
      { name: "IDP", desc: "Fundada en 1871. Ofrece bombas con partición radial, bombas de alimentación principal para submarinos de propulsión nuclear, las bombas de alimentación de calderas más grandes del mundo y bombas de tubería impulsadas por motores de turbina de gas." },
      { name: "INNOMAG", desc: "Fundada en 1998. Las bombas de accionamiento magnético con revestimiento de fluoropolímero Innomag se utilizan en los sectores de procesos químicos y generales." },
      { name: "Lawrence Pumps", desc: "Fundada en 1935. Fabricante principal de bombas centrífugas para servicios de lodos abrasivos y líquidos tóxicos. Se utilizan siempre que las duras condiciones de servicio requieren un equipo de bombeo robusto y de alta ingeniería." },
      { name: "Pleuger", desc: "Fundada en 1929. Ofrece la línea más completa del mundo de bombas sumergibles con motores y sistemas llenos de agua para aplicaciones de agua. También ofrece propulsores azimutales para entornos oceánicos." },
      { name: "SIHI", desc: "Fundada en 1920. Los sistemas, compresores y bombas de líquido y vacío SIHI mejoran y fortalecen la posición de Flowserve como proveedor líder mundial de bombas y sistemas para procesos químicos." },
      { name: "TKL", desc: "Fundada en 1875. Proveedor líder de bombas centrífugas que ofrece amplios conocimientos prácticos, experiencia y tecnología. Sus productos avanzados brindan la mejor y más rentable solución para sus necesidades de bombeo." },
      { name: "Worthington", desc: "Fundada en 1845. Ofrece bombas de proceso industrial, entre rodamientos, de lodos en voladizo, de eje de transmisión vertical, de manejo de sólidos, multietapa, API 610, alternativas, de engranajes rotativos y de turbina vertical." },
      { name: "Scienco", desc: "Las bombas de transferencia de químicos más fiables en el sector agrícola. De una bomba a otra y de un químico a otro, las bombas Scienco brindan rendimiento y fiabilidad." },
    ],
    specs: { presión: "Hasta 400 bar", temperatura: "-80°C a +450°C", materiales: "Acero inox, hierro fundido, duplex" },
    brands: "Flowserve (Byron Jackson, Durco, IDP, INNOMAG, Lawrence Pumps, Pleuger, SIHI, TKL, Worthington, Scienco), Grundfos, KSB",
  },
  {
    icon: Cog,
    title: "Sellos Mecánicos",
    desc: "Sellos estándar, cartucho, fuelle metálico, mezcladores, compresores y barrera de gas.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=80",
    fullDesc: "Flowserve proporciona soluciones de sellado como recurso único para mejorar el funcionamiento de los equipos rotativos de los usuarios finales. En colaboración con nuestros clientes bajo la modalidad de alianza, hemos elevado los niveles de eficiencia operativa a estándares de primera línea.",
    subProducts: [
      { name: "Sellos de Cartucho Estándar", desc: "Diseño compacto de cartucho para instalación simplificada. Ideales para aplicaciones generales de bombeo industrial." },
      { name: "Sellos de Empuje", desc: "Sellos mecánicos de empuje para aplicaciones de alta presión y condiciones severas de operación." },
      { name: "Sellos de Fuelle Metálico", desc: "Sellos con fuelle metálico para alta temperatura y aplicaciones donde se requiere compensación automática del desgaste." },
      { name: "Sellos de Mezclador", desc: "Diseñados específicamente para mezcladores y agitadores industriales con movimiento axial y radial." },
      { name: "Sellos de OEM y Servicios Especiales", desc: "Soluciones personalizadas para fabricantes de equipos originales y aplicaciones de servicio especial." },
      { name: "Sellos para Lodo", desc: "Sellos robustos diseñados para manejar fluidos con alto contenido de sólidos y partículas abrasivas." },
      { name: "Sellos y Sistemas de Compresores", desc: "Sistemas de sellado para compresores de gas con tecnología de barrera y contención." },
      { name: "Sellos de Barrera y Contención de Gas", desc: "Tecnología avanzada de sellado con gas para aplicaciones de cero emisiones y contención de gases peligrosos." },
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
    fullDesc: "Ofrecemos una amplia gama de empaquetaduras de alta tecnología para válvulas, bombas y equipos rotativos. Cada estilo está diseñado para condiciones específicas de servicio, temperatura y presión.",
    subProducts: [
      { name: "Estilo 1100 TCP", desc: "Trenzado de grafito flexible expandido puro. Es autolubricante, químicamente inerte y termoconductor." },
      { name: "Estilo 1152K", desc: "Fibra Syntex con cada hebra impregnada con dispersión de PTFE tanto antes como después del trenzado. El empaque terminado también tiene un lubricante de rodaje." },
      { name: "Estilo 3165", desc: "Una mezcla especial de fibra de PTFE rellena de grafito con excelente conductividad térmica, resistencia química y abrasiva. 3165 es flexible y maleable y no se endurecerá, hinchará ni se volverá quebradizo." },
      { name: "Estilo 1162IB", desc: "Fibra Syntex impregnada con dispersión de PTFE y lubricante de rodaje." },
      { name: "Estilo 1190", desc: "Fibras de filamento Kynol especiales tratadas con PTFE en su totalidad y un lubricante de rodaje para asistir en el arranque." },
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
    fullDesc: "Las juntas espirometálicas Flexitallic son reconocidas mundialmente por su calidad y rendimiento en aplicaciones de alta presión y temperatura. Fabricadas según normas ASME B16.20.",
    subProducts: [
      { name: "Estilo CG", desc: "Proporciona resistencia radial adicional para evitar que la junta se reviente y actúa como un tope de compresión. Una junta de uso general adecuada para usar con bridas de cara plana y cara elevada." },
      { name: "Juntas con Anillo Interior", desc: "Diseñadas con anillo interior para prevenir la erosión del relleno y proporcionar una superficie de sellado adicional." },
      { name: "Juntas con Anillo Exterior", desc: "El anillo exterior actúa como guía de centrado y tope de compresión para una instalación precisa." },
      { name: "Juntas para Alta Temperatura", desc: "Fabricadas con materiales especiales para soportar temperaturas extremas hasta +1000°C." },
      { name: "Juntas según Normas ASME/ANSI", desc: "Disponibles en todas las medidas estándar ANSI/DIN para clases de presión 150 a 2500." },
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
    fullDesc: "Ofrecemos una línea completa de sellos hidráulicos y neumáticos para todo tipo de cilindros y sistemas de alta presión. Nuestros sellos están diseñados para condiciones extremas de operación.",
    subProducts: [
      { name: "Sellos de Pistón", desc: "Sellos de pistón simple y doble efecto para cilindros hidráulicos de alta presión." },
      { name: "Sellos de Vástago", desc: "Sellos de vástago para prevenir fugas externas en cilindros hidráulicos." },
      { name: "Anillos Guía y Bandas de Desgaste", desc: "Elementos de guía para mantener la alineación correcta del pistón dentro del cilindro." },
      { name: "Sellos Limpiadores", desc: "Sellos limpiadores y anti-polvo para proteger el sistema de contaminantes externos." },
      { name: "Kits de Reparación", desc: "Kits completos de sellos para la reparación y mantenimiento de cilindros hidráulicos." },
    ],
    specs: { presión: "Hasta 700 bar", temperatura: "-40°C a +200°C", materiales: "NBR, Viton, PU, PTFE" },
    brands: "Parker, Freudenberg, Trelleborg",
  },
  {
    icon: Wrench,
    title: "Compensadores",
    desc: "Compensadores STENFLEX para absorción de movimiento, vibración y ruido en tuberías.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80",
    fullDesc: "Las uniones de tuberías STENFLEX® abarcan desde caucho hasta acero. Los compensadores se utilizan en grupos, máquinas, bombas y sistemas de tuberías para la absorción de movimientos y para la amortiguación de oscilaciones y ruidos. Su funcionamiento es seguro y a la vez económico.",
    subProducts: [
      { name: "Compensadores de Caucho", desc: "Los compensadores de caucho STENFLEX® se utilizan en grupos, máquinas, bombas y sistemas de tuberías para la absorción de movimientos y para la amortiguación de oscilaciones y ruidos. Su funcionamiento es seguro y a la vez económico." },
      { name: "Compensadores PTFE", desc: "Los compensadores PTFE STENFLEX® son especialmente adecuados para medios agresivos. PTFE es casi incombustible y universalmente resistente a casi todos los productos químicos y disolventes." },
      { name: "Compensadores de Acero", desc: "Los compensadores de acero STENFLEX® se utilizan en la construcción de máquinas, grupos y tuberías como uniones flexibles. Destacan por su gran resistencia a la presión y la temperatura, su probada estabilidad de vacío y su buena resistencia a los medios." },
      { name: "Articulaciones Giratorias", desc: "Las articulaciones giratorias STENFLEX® son adecuadas para medios líquidos y gaseosos. Con una alta resistencia a la presión y la temperatura, se utilizan como elementos de uniones de tuberías giratorios incluso en condiciones de servicio extremas." },
      { name: "Uniones de Tubo", desc: "Las uniones de tubo STENFLEX® se utilizan principalmente para interrumpir las transmisiones de sonido no deseadas y para amortiguar las vibraciones de las tuberías en bombas, válvulas de control, máquinas y aparatos." },
      { name: "Elementos de Caucho-Metal", desc: "Los elementos de caucho-metal de STENFLEX® se utilizan como elementos amortiguadores en máquinas, dispositivos de medición, motores, bombas y aparatos. Evitan la transmisión de vibraciones y ruidos, y garantizan un aislamiento óptimo del sonido propagado por estructuras sólidas." },
    ],
    specs: { presión: "Hasta 25 bar", temperatura: "-30°C a +130°C", materiales: "EPDM, NBR, Viton, PTFE, acero" },
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
                {/* Full description */}
                <p className="text-[#334155] text-lg leading-relaxed mb-10 max-w-4xl">
                  {products[selectedProduct].fullDesc}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Main content - Sub products */}
                  <div className="lg:col-span-2">
                    <h3 className="text-[#1e3a5f] font-heading font-bold text-xl mb-6">
                      Línea de Productos
                    </h3>

                    <div className="space-y-4">
                      {products[selectedProduct].subProducts.map((sub, j) => (
                        <div
                          key={j}
                          className="p-5 rounded-xl bg-[#f8fafc] border border-gray-100 hover:border-[#1e3a5f]/20 hover:shadow-sm transition-all duration-200"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-[#C41E24]/10 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-[#C41E24] font-bold text-xs">{j + 1}</span>
                            </div>
                            <div>
                              <h4 className="text-[#1e3a5f] font-heading font-semibold text-base">{sub.name}</h4>
                              <p className="text-[#64748b] text-sm mt-1 leading-relaxed">{sub.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href="#contacto"
                      onClick={() => setSelectedProduct(null)}
                      className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#C41E24] text-white font-semibold text-base hover:bg-[#a5181e] transition-colors cursor-pointer shadow-lg"
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

                    {/* Product count */}
                    <div className="bg-[#C41E24]/5 border border-[#C41E24]/20 rounded-2xl p-6 text-center">
                      <p className="text-[#C41E24] font-heading font-bold text-3xl">{products[selectedProduct].subProducts.length}</p>
                      <p className="text-[#64748b] text-sm mt-1">Líneas de producto disponibles</p>
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
