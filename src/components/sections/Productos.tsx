import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Cog, Droplets, CircleDot, Gauge, Pipette, ArrowRight, ChevronRight, Wrench } from "lucide-react"
import { useLang } from "@/i18n"

type SubProduct = {
  name: string
  nameEn: string
  desc: string
  descEn: string
  image: string
}

type Product = {
  icon: typeof Cog
  title: string
  titleEn: string
  desc: string
  descEn: string
  image: string
  detailImage: string
  fullDesc: string
  fullDescEn: string
  subProducts: SubProduct[]
  specs: Record<string, string>
  brands: string
}

const products: Product[] = [
  {
    icon: Droplets,
    title: "Bombas Centrífugas",
    titleEn: "Centrifugal Pumps",
    desc: "Componentes clave para petróleo, gas, procesamiento químico, generación de energía y recursos hídricos.",
    descEn: "Key components for oil, gas, chemical processing, power generation and water resources.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
    fullDesc: "Las bombas y los sistemas de Flowserve son componentes clave en los sectores de petróleo y gas, procesamiento de químicos e hidrocarburos, generación de energía y recursos hídricos a nivel mundial.",
    fullDescEn: "Flowserve pumps and systems are key components in the oil and gas, chemical and hydrocarbon processing, power generation and water resources sectors worldwide.",
    subProducts: [
      { name: "Byron Jackson", nameEn: "Byron Jackson", desc: "Fundada en 1872. Ofrece bombas sumergibles de aceite, nucleares, de voluta, entre rodamientos, en voladizo y verticales.", descEn: "Founded in 1872. Offers submersible oil, nuclear, volute, between bearings, overhung and vertical pumps.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80" },
      { name: "Durco", nameEn: "Durco", desc: "Fundada en 1912. Marca innovadora de control de flujo con cartera integral de bombas y válvulas para aplicaciones exigentes.", descEn: "Founded in 1912. Innovative flow control brand with comprehensive pump and valve portfolio for demanding applications.", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80" },
      { name: "Flowserve", nameEn: "Flowserve", desc: "Fundada en 1997. Líder mundial en bombas, válvulas, sellos, automatización y servicios para energía, petróleo, gas y químicos.", descEn: "Founded in 1997. World leader in pumps, valves, seals, automation and services for energy, oil, gas and chemicals.", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80" },
      { name: "IDP", nameEn: "IDP", desc: "Fundada en 1871. Bombas con partición radial, bombas de alimentación nuclear y las bombas de alimentación de calderas más grandes del mundo.", descEn: "Founded in 1871. Radial split pumps, nuclear feed pumps and the world's largest boiler feed pumps.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" },
      { name: "INNOMAG", nameEn: "INNOMAG", desc: "Fundada en 1998. Bombas de accionamiento magnético con revestimiento de fluoropolímero para procesos químicos.", descEn: "Founded in 1998. Magnetic drive pumps with fluoropolymer lining for chemical processes.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80" },
      { name: "Lawrence Pumps", nameEn: "Lawrence Pumps", desc: "Fundada en 1935. Fabricante de bombas centrífugas para lodos abrasivos y líquidos tóxicos.", descEn: "Founded in 1935. Manufacturer of centrifugal pumps for abrasive slurries and toxic liquids.", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80" },
      { name: "Pleuger", nameEn: "Pleuger", desc: "Fundada en 1929. Línea completa de bombas sumergibles con motores llenos de agua y propulsores azimutales.", descEn: "Founded in 1929. Complete line of submersible pumps with water-filled motors and azimuthal thrusters.", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80" },
      { name: "SIHI", nameEn: "SIHI", desc: "Fundada en 1920. Sistemas, compresores y bombas de líquido y vacío para procesos químicos.", descEn: "Founded in 1920. Liquid and vacuum systems, compressors and pumps for chemical processes.", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80" },
      { name: "TKL", nameEn: "TKL", desc: "Fundada en 1875. Proveedor líder de bombas centrífugas con tecnología avanzada y soluciones rentables.", descEn: "Founded in 1875. Leading supplier of centrifugal pumps with advanced technology and cost-effective solutions.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" },
      { name: "Worthington", nameEn: "Worthington", desc: "Fundada en 1845. Bombas de proceso industrial, multietapa, API 610, de engranajes rotativos y de turbina vertical.", descEn: "Founded in 1845. Industrial process pumps, multistage, API 610, rotary gear and vertical turbine.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80" },
    ],
    specs: { presión: "Hasta 400 bar", temperatura: "-80°C a +450°C", materiales: "Acero inox, hierro fundido, duplex" },
    brands: "Flowserve, Grundfos, KSB",
  },
  {
    icon: Cog,
    title: "Sellos Mecánicos",
    titleEn: "Mechanical Seals",
    desc: "Sellos estándar, cartucho, fuelle metálico, mezcladores, compresores y barrera de gas.",
    descEn: "Standard seals, cartridge, metal bellows, mixers, compressors and gas barrier.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=80",
    fullDesc: "Flowserve proporciona soluciones de sellado como recurso único para mejorar el funcionamiento de los equipos rotativos. Nuestra amplia gama incluye sellos de cartucho, empuje, fuelle metálico, mezclador, compresores, barrera de gas y sellos para lodos.",
    fullDescEn: "Flowserve provides sealing solutions as a single source to improve rotating equipment performance. Our wide range includes cartridge, pusher, metal bellows, mixer, compressor, gas barrier and slurry seals.",
    subProducts: [
      { name: "Sellos de Cartucho Estándar", nameEn: "Standard Cartridge Seals", desc: "Diseño compacto para instalación simplificada. Ideales para aplicaciones generales de bombeo industrial.", descEn: "Compact design for simplified installation. Ideal for general industrial pumping.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80" },
      { name: "Sellos de Empuje", nameEn: "Pusher Seals", desc: "Para aplicaciones de alta presión y condiciones severas de operación.", descEn: "For high pressure applications and severe operating conditions.", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80" },
      { name: "Sellos de Fuelle Metálico", nameEn: "Metal Bellows Seals", desc: "Para alta temperatura con compensación automática del desgaste.", descEn: "For high temperature with automatic wear compensation.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" },
      { name: "Sellos de Mezclador", nameEn: "Mixer Seals", desc: "Para mezcladores y agitadores industriales con movimiento axial y radial.", descEn: "For industrial mixers and agitators with axial and radial movement.", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80" },
      { name: "Sellos para Lodo", nameEn: "Slurry Seals", desc: "Robustos para fluidos con alto contenido de sólidos y partículas abrasivas.", descEn: "Robust for fluids with high solids and abrasive particles.", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80" },
      { name: "Sellos de Compresores", nameEn: "Compressor Seals", desc: "Sistemas de sellado para compresores de gas con tecnología de barrera.", descEn: "Sealing systems for gas compressors with barrier technology.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80" },
      { name: "Sellos de Barrera de Gas", nameEn: "Gas Barrier Seals", desc: "Tecnología avanzada para cero emisiones y contención de gases peligrosos.", descEn: "Advanced technology for zero emissions and hazardous gas containment.", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80" },
    ],
    specs: { presión: "Hasta 450 bar", temperatura: "-200°C a +400°C", materiales: "Carburo de silicio, carbón, PTFE" },
    brands: "John Crane, Burgmann, Flowserve",
  },
  {
    icon: CircleDot,
    title: "Empaquetaduras",
    titleEn: "Packings",
    desc: "Empaquetaduras trenzadas y de alta tecnología para válvulas y equipos rotativos.",
    descEn: "Braided and high-technology packings for valves and rotating equipment.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&q=80",
    fullDesc: "Empaquetaduras de alta tecnología para válvulas, bombas y equipos rotativos. Cada estilo diseñado para condiciones específicas de servicio, temperatura y presión.",
    fullDescEn: "High-technology packings for valves, pumps and rotating equipment. Each style designed for specific service, temperature and pressure conditions.",
    subProducts: [
      { name: "Estilo 1100 TCP", nameEn: "Style 1100 TCP", desc: "Grafito flexible expandido puro. Autolubricante, químicamente inerte y termoconductor.", descEn: "Pure expanded flexible graphite. Self-lubricating, chemically inert and thermally conductive.", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80" },
      { name: "Estilo 1152K", nameEn: "Style 1152K", desc: "Fibra Syntex impregnada con PTFE antes y después del trenzado, con lubricante de rodaje.", descEn: "Syntex fiber impregnated with PTFE before and after braiding, with break-in lubricant.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" },
      { name: "Estilo 3165", nameEn: "Style 3165", desc: "Fibra de PTFE rellena de grafito. Excelente conductividad térmica. Flexible, no se endurece.", descEn: "PTFE fiber filled with graphite. Excellent thermal conductivity. Flexible, won't harden.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80" },
      { name: "Estilo 1162IB", nameEn: "Style 1162IB", desc: "Fibra Syntex impregnada con PTFE y lubricante de rodaje.", descEn: "Syntex fiber impregnated with PTFE and break-in lubricant.", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80" },
      { name: "Estilo 1190", nameEn: "Style 1190", desc: "Fibras Kynol tratadas con PTFE y lubricante de rodaje para el arranque.", descEn: "Kynol fibers treated with PTFE and break-in lube for start-up.", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80" },
    ],
    specs: { presión: "Hasta 700 bar", temperatura: "-240°C a +650°C", materiales: "Grafito, PTFE, GFRE, Kevlar" },
    brands: "Garlock, Chesterton, Palmetto",
  },
  {
    icon: Gauge,
    title: "Juntas Espirometálicas",
    titleEn: "Spiral Wound Gaskets",
    desc: "Juntas para conexiones bridadas en alta presión y temperatura.",
    descEn: "Gaskets for flanged connections under high pressure and temperature.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80",
    fullDesc: "Las juntas espirometálicas Flexitallic son reconocidas mundialmente. Fabricadas según ASME B16.20 para alta presión y temperatura.",
    fullDescEn: "Flexitallic spiral wound gaskets are recognized worldwide. Manufactured per ASME B16.20 for high pressure and temperature.",
    subProducts: [
      { name: "Estilo CG", nameEn: "Style CG", desc: "Resistencia radial adicional para evitar reventones. Uso general para bridas de cara plana y elevada.", descEn: "Additional radial strength to prevent blowouts. General purpose for flat and raised face flanges.", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80" },
      { name: "Con Anillo Interior", nameEn: "Inner Ring", desc: "Previene erosión del relleno y proporciona superficie de sellado adicional.", descEn: "Prevents filler erosion and provides additional sealing surface.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" },
      { name: "Con Anillo Exterior", nameEn: "Outer Ring", desc: "Guía de centrado y tope de compresión para instalación precisa.", descEn: "Centering guide and compression stop for precise installation.", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80" },
      { name: "Alta Temperatura", nameEn: "High Temperature", desc: "Materiales especiales para temperaturas extremas hasta +1000°C.", descEn: "Special materials for extreme temperatures up to +1000°C.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80" },
    ],
    specs: { presión: "Hasta 2500 PSI", temperatura: "-200°C a +1000°C", materiales: "SS 304/316, grafito, PTFE" },
    brands: "Flexitallic, Garlock",
  },
  {
    icon: Pipette,
    title: "Sellos Hidráulicos",
    titleEn: "Hydraulic Seals",
    desc: "Sellos hidráulicos y neumáticos para cilindros y sistemas de alta presión.",
    descEn: "Hydraulic and pneumatic seals for cylinders and high-pressure systems.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=900&q=80",
    fullDesc: "Línea completa de sellos hidráulicos y neumáticos para cilindros y sistemas de alta presión en condiciones extremas.",
    fullDescEn: "Complete line of hydraulic and pneumatic seals for cylinders and high-pressure systems under extreme conditions.",
    subProducts: [
      { name: "Sellos de Pistón", nameEn: "Piston Seals", desc: "Simple y doble efecto para cilindros de alta presión.", descEn: "Single and double acting for high-pressure cylinders.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" },
      { name: "Sellos de Vástago", nameEn: "Rod Seals", desc: "Previenen fugas externas en cilindros hidráulicos.", descEn: "Prevent external leaks in hydraulic cylinders.", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80" },
      { name: "Anillos Guía", nameEn: "Guide Rings", desc: "Alineación correcta del pistón dentro del cilindro.", descEn: "Correct piston alignment within the cylinder.", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80" },
      { name: "Sellos Limpiadores", nameEn: "Wiper Seals", desc: "Protección contra contaminantes externos y polvo.", descEn: "Protection against external contaminants and dust.", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80" },
      { name: "Kits de Reparación", nameEn: "Repair Kits", desc: "Kits completos para mantenimiento de cilindros hidráulicos.", descEn: "Complete kits for hydraulic cylinder maintenance.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80" },
    ],
    specs: { presión: "Hasta 700 bar", temperatura: "-40°C a +200°C", materiales: "NBR, Viton, PU, PTFE" },
    brands: "Parker, Freudenberg, Trelleborg",
  },
  {
    icon: Wrench,
    title: "Compensadores",
    titleEn: "Expansion Joints",
    desc: "Compensadores STENFLEX para absorción de movimiento, vibración y ruido.",
    descEn: "STENFLEX expansion joints for movement absorption, vibration and noise.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80",
    fullDesc: "Uniones de tuberías STENFLEX® desde caucho hasta acero. Para máquinas, bombas y sistemas de tuberías: absorción de movimientos y amortiguación de oscilaciones y ruidos.",
    fullDescEn: "STENFLEX® pipe connections from rubber to steel. For machines, pumps and piping systems: movement absorption and vibration and noise dampening.",
    subProducts: [
      { name: "Compensadores de Caucho", nameEn: "Rubber Expansion Joints", desc: "Para absorción de movimientos y amortiguación de oscilaciones. Funcionamiento seguro y económico.", descEn: "For movement absorption and vibration dampening. Safe and economical operation.", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80" },
      { name: "Compensadores PTFE", nameEn: "PTFE Expansion Joints", desc: "Para medios agresivos. PTFE es incombustible y resistente a químicos y disolventes.", descEn: "For aggressive media. PTFE is non-combustible and resistant to chemicals and solvents.", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80" },
      { name: "Compensadores de Acero", nameEn: "Steel Expansion Joints", desc: "Gran resistencia a presión y temperatura, estabilidad de vacío y resistencia a los medios.", descEn: "High pressure and temperature resistance, vacuum stability and media resistance.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" },
      { name: "Articulaciones Giratorias", nameEn: "Swivel Joints", desc: "Para medios líquidos y gaseosos en condiciones de servicio extremas.", descEn: "For liquid and gaseous media under extreme service conditions.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80" },
      { name: "Uniones de Tubo", nameEn: "Pipe Couplings", desc: "Interrumpen transmisiones de sonido y amortiguan vibraciones en tuberías.", descEn: "Interrupt sound transmissions and dampen vibrations in piping.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80" },
      { name: "Elementos Caucho-Metal", nameEn: "Rubber-Metal Elements", desc: "Amortiguadores para máquinas, motores y bombas. Aislamiento óptimo de vibraciones.", descEn: "Damping elements for machines, engines and pumps. Optimal vibration isolation.", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80" },
    ],
    specs: { presión: "Hasta 25 bar", temperatura: "-30°C a +130°C", materiales: "EPDM, NBR, Viton, PTFE, acero" },
    brands: "STENFLEX",
  },
]

export default function Productos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)
  const { lang, t } = useLang()

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
            <span className="text-white font-heading font-bold text-sm tracking-widest uppercase">
              {t("Nuestros Productos", "Our Products")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 font-heading">
            {t("Soluciones Industriales", "Industrial Solutions")}
          </h2>
          <p className="text-[#64748b] mt-4 max-w-2xl mx-auto text-lg">
            {t(
              "Ofrecemos una amplia gama de productos de sellado y transferencia de fluidos de las marcas más reconocidas a nivel mundial.",
              "We offer a wide range of sealing and fluid transfer products from the most recognized brands worldwide."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              onClick={() => setSelectedProduct(i)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-[#C41E24]/40 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={product.image} alt={lang === "es" ? product.title : product.titleEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                <div className="absolute top-4 left-4 p-2 rounded-xl bg-[#C41E24]/90 shadow-md">
                  <product.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[#1e3a5f] font-semibold text-lg font-heading group-hover:text-[#C41E24] transition-colors">
                  {lang === "es" ? product.title : product.titleEn}
                </h3>
                <p className="text-[#64748b] text-sm mt-2 leading-relaxed">{lang === "es" ? product.desc : product.descEn}</p>
                <div className="mt-4 flex items-center gap-2 text-[#C41E24] text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                  {t("Ver Detalles", "View Details")} <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProduct !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-white overflow-y-auto"
            >
              <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
                  <button onClick={() => setSelectedProduct(null)} className="flex items-center gap-2 text-[#1e3a5f] font-semibold text-sm hover:text-[#C41E24] transition-colors cursor-pointer">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    {t("Volver a Productos", "Back to Products")}
                  </button>
                  <img src="/logo-seseica.png" alt="SESEICA" className="h-8 w-auto" />
                </div>
              </div>

              <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <img src={products[selectedProduct].detailImage} alt={lang === "es" ? products[selectedProduct].title : products[selectedProduct].titleEn} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-[#C41E24]">
                        {(() => { const Icon = products[selectedProduct].icon; return <Icon className="w-5 h-5 text-white" /> })()}
                      </div>
                      <span className="text-white/70 text-sm font-medium tracking-wider uppercase">{t("Producto", "Product")}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-heading">
                      {lang === "es" ? products[selectedProduct].title : products[selectedProduct].titleEn}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
                <p className="text-[#334155] text-lg leading-relaxed mb-10 max-w-4xl">
                  {lang === "es" ? products[selectedProduct].fullDesc : products[selectedProduct].fullDescEn}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2">
                    <h3 className="text-[#1e3a5f] font-heading font-bold text-xl mb-6">{t("Línea de Productos", "Product Line")}</h3>
                    <div className="space-y-4">
                      {products[selectedProduct].subProducts.map((sub, j) => (
                        <div key={j} className="flex gap-4 p-4 rounded-xl bg-[#f8fafc] border border-gray-100 hover:border-[#1e3a5f]/20 hover:shadow-sm transition-all duration-200">
                          <div className="w-24 h-24 md:w-32 md:h-28 rounded-lg overflow-hidden shrink-0">
                            <img src={sub.image} alt={lang === "es" ? sub.name : sub.nameEn} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-[#1e3a5f] font-heading font-semibold text-base">{lang === "es" ? sub.name : sub.nameEn}</h4>
                            <p className="text-[#64748b] text-sm mt-1 leading-relaxed">{lang === "es" ? sub.desc : sub.descEn}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a href="#contacto" onClick={() => setSelectedProduct(null)} className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#C41E24] text-white font-semibold text-base hover:bg-[#a5181e] transition-colors cursor-pointer shadow-lg">
                      {t("Solicitar Cotización", "Request Quote")} <ChevronRight className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-[#f1f5f9] rounded-2xl p-6">
                      <h4 className="text-[#1e3a5f] font-heading font-bold text-sm mb-4 uppercase tracking-wider">{t("Especificaciones", "Specifications")}</h4>
                      <div className="space-y-4">
                        {Object.entries(products[selectedProduct].specs).map(([key, val]) => (
                          <div key={key} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                            <p className="text-[#94a3b8] text-xs uppercase tracking-wider font-semibold">{key}</p>
                            <p className="text-[#1e3a5f] font-bold text-sm mt-1">{val}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[#1e3a5f] rounded-2xl p-6">
                      <h4 className="text-white font-heading font-bold text-sm mb-3 uppercase tracking-wider">{t("Marcas Disponibles", "Available Brands")}</h4>
                      <p className="text-white/80 text-sm leading-relaxed">{products[selectedProduct].brands}</p>
                    </div>
                    <div className="bg-[#C41E24]/5 border border-[#C41E24]/20 rounded-2xl p-6 text-center">
                      <p className="text-[#C41E24] font-heading font-bold text-3xl">{products[selectedProduct].subProducts.length}</p>
                      <p className="text-[#64748b] text-sm mt-1">{t("Líneas de producto", "Product lines")}</p>
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
