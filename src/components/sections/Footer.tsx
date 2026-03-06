import { motion } from "framer-motion"
import { useLang } from "@/i18n"

export default function Footer() {
  const { lang, t } = useLang()

  return (
    <footer className="py-12 px-6 md:px-12 bg-[#060a12] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src="/logo-seseica.svg" alt="SESEICA" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              {t("Soluciones integrales en sellado industrial y transferencia de fluidos para la industria dominicana desde 1998.", "Comprehensive solutions in industrial sealing and fluid transfer for the Dominican industry since 1998.")}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-heading">{t("Productos", "Products")}</h4>
            <ul className="space-y-2">
              {[
                { es: "Sellos Mecanicos", en: "Mechanical Seals" },
                { es: "Bombas Centrifugas", en: "Centrifugal Pumps" },
                { es: "O-Rings", en: "O-Rings" },
                { es: "Juntas", en: "Gaskets" },
                { es: "Compensadores", en: "Compensators" },
              ].map((item) => (
                <li key={item.es}>
                  <a href="#productos" className="text-white/40 text-sm hover:text-[#C41E24] transition-colors cursor-pointer">
                    {lang === "es" ? item.es : item.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-heading">{t("Empresa", "Company")}</h4>
            <ul className="space-y-2">
              {[
                { es: "Historia", en: "History", href: "#historia" },
                { es: "Marcas", en: "Brands", href: "#marcas" },
                { es: "Contacto", en: "Contact", href: "#contacto" },
              ].map((item) => (
                <li key={item.es}>
                  <a href={item.href} className="text-white/40 text-sm hover:text-[#C41E24] transition-colors cursor-pointer">
                    {lang === "es" ? item.es : item.en}
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
            &copy; {new Date().getFullYear()} SESEICA S.R.L. {t("Todos los derechos reservados.", "All rights reserved.")}
          </p>
          <p className="text-white/20 text-xs">
            Santo Domingo, República Dominicana
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
