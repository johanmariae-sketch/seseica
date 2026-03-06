import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-[#060a12] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src="/logo-seseica.png" alt="SESEICA" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Soluciones integrales en sellado industrial y transferencia de fluidos
              para la industria dominicana desde 1998.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-heading">Productos</h4>
            <ul className="space-y-2">
              {["Sellos Mecanicos", "Bombas Centrifugas", "O-Rings", "Juntas", "Compensadores"].map((item) => (
                <li key={item}>
                  <a href="#productos" className="text-white/40 text-sm hover:text-[#C41E24] transition-colors cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-heading">Empresa</h4>
            <ul className="space-y-2">
              {["Historia", "Marcas", "Contacto"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/40 text-sm hover:text-[#C41E24] transition-colors cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} SESEICA S.R.L. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Santo Domingo, República Dominicana
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
