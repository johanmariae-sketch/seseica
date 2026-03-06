import { I18nProvider } from "@/i18n"
import Header from "@/components/ui/Header"
import Hero from "@/components/ui/hero"
import Historia from "@/components/sections/Historia"
import Productos from "@/components/sections/Productos"
import Marcas from "@/components/sections/Marcas"
import Contacto from "@/components/sections/Contacto"
import Footer from "@/components/sections/Footer"

function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen w-full">
        <Header />
        <Hero />
        <Historia />
        <Productos />
        <Marcas />
        <Contacto />
        <Footer />
      </div>
    </I18nProvider>
  )
}

export default App
