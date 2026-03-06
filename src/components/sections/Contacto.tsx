import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useLang } from "@/i18n"

export default function Contacto() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const { t } = useLang()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contacto" className="py-24 px-6 md:px-12 bg-[#f8fafc] relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#C41E24] font-semibold text-sm tracking-widest uppercase">{t("Contacto", "Contact")}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 font-heading">
            {t("Hablemos de su Proyecto", "Let's Talk About Your Project")}
          </h2>
          <p className="text-[#64748b] mt-4 max-w-2xl mx-auto text-lg">
            {t("Estamos listos para ayudarle con sus necesidades de sellado y transferencia de fluidos.", "We are ready to help you with your sealing and fluid transfer needs.")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { icon: MapPin, title: t("Dirección", "Address"), text: "Calle Central, #10 Altos de Arroyo Hondo II, Santo Domingo, República Dominicana" },
              { icon: Phone, title: t("Teléfono", "Phone"), text: "+1 (809) 000-0000" },
              { icon: Mail, title: "Email", text: "info@seseica.com" },
              { icon: Clock, title: t("Horario", "Hours"), text: t("Lunes a Viernes: 8:00 AM - 5:00 PM", "Monday to Friday: 8:00 AM - 5:00 PM") },
            ].map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <div className="p-3 rounded-lg bg-[#C41E24]/10 border border-[#C41E24]/20">
                  <Icon className="w-5 h-5 text-[#C41E24]" />
                </div>
                <div>
                  <h4 className="text-[#1e3a5f] font-semibold text-sm">{title}</h4>
                  <p className="text-[#64748b] text-sm mt-1">{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-[#334155] text-sm mb-1 block font-medium">{t("Nombre", "Name")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-[#1e3a5f] text-sm placeholder-gray-400 focus:outline-none focus:border-[#C41E24]/50 focus:ring-1 focus:ring-[#C41E24]/20 transition-colors"
                  placeholder={t("Su nombre", "Your name")}
                />
              </div>
              <div>
                <label htmlFor="email" className="text-[#334155] text-sm mb-1 block font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-[#1e3a5f] text-sm placeholder-gray-400 focus:outline-none focus:border-[#C41E24]/50 focus:ring-1 focus:ring-[#C41E24]/20 transition-colors"
                  placeholder={t("su@email.com", "your@email.com")}
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="text-[#334155] text-sm mb-1 block font-medium">{t("Teléfono", "Phone")}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-[#1e3a5f] text-sm placeholder-gray-400 focus:outline-none focus:border-[#C41E24]/50 focus:ring-1 focus:ring-[#C41E24]/20 transition-colors"
                placeholder="+1 (809) 000-0000"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-[#334155] text-sm mb-1 block font-medium">{t("Mensaje", "Message")}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-[#1e3a5f] text-sm placeholder-gray-400 focus:outline-none focus:border-[#C41E24]/50 focus:ring-1 focus:ring-[#C41E24]/20 transition-colors resize-none"
                placeholder={t("Describa su necesidad...", "Describe your needs...")}
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-8 py-4 rounded-xl bg-[#C41E24] text-white font-semibold text-sm transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:bg-[#a5181e] flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-4 h-4" /> {t("Enviar Mensaje", "Send Message")}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
