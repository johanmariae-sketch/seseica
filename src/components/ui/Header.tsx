import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Menu, X } from "lucide-react"

const NAV_ITEMS = ["Inicio", "Historia", "Productos", "Marcas", "Contacto"]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-3">
        {/* Logo - original SESEICA logo */}
        <motion.a
          href="#inicio"
          className="cursor-pointer no-underline"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img src="/logo-seseica.png" alt="SESEICA - Servicios de Sellado Industrial, SRL" className="h-12 md:h-14 w-auto" />
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#1e3a5f]/80 hover:text-[#C41E24] text-[15px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#1e3a5f]/5 transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a5f]/30 font-heading tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Cotizar button */}
          <div className="relative hidden sm:flex items-center group">
            <button
              aria-label="Solicitar cotización"
              className="absolute right-0 px-2.5 py-2 rounded-full bg-[#C41E24] text-white font-normal text-xs transition-all duration-300 hover:bg-[#a5181e] cursor-pointer h-10 w-10 flex items-center justify-center -translate-x-10 group-hover:-translate-x-[4.75rem] z-0"
            >
              <ChevronRight className="w-3 h-3" />
            </button>
            <button className="px-6 py-2 rounded-full bg-[#C41E24] text-white font-medium text-sm transition-colors duration-200 hover:bg-[#a5181e] cursor-pointer h-10 flex items-center z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C41E24]/50">
              Cotizar
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[#1e3a5f] hover:bg-[#1e3a5f]/10 transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a5f]/30"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-gray-100"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#1e3a5f]/80 hover:text-[#C41E24] text-base font-medium px-4 py-3 rounded-lg hover:bg-[#1e3a5f]/5 transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-6 py-3 rounded-full bg-[#C41E24] text-white font-medium text-sm text-center transition-colors duration-200 hover:bg-[#a5181e] cursor-pointer"
              >
                Cotizar
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
