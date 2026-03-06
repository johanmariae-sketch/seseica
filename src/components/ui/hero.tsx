import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Shield, Wrench, Droplets, ChevronDown } from "lucide-react"

const SIDE_IMAGES = {
  left: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  right: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let gsap: any
    let ScrollTrigger: any
    let tl: any

    ;(async () => {
      const gsapPkg = await import("gsap")
      gsap = gsapPkg.gsap || gsapPkg.default || gsapPkg
      const stPkg = await import("gsap/ScrollTrigger").catch(() => import("gsap/dist/ScrollTrigger"))
      ScrollTrigger = stPkg.default || (stPkg as any).ScrollTrigger || stPkg
      gsap.registerPlugin(ScrollTrigger)

      const section = sectionRef.current
      const center = centerRef.current
      const left = leftRef.current
      const right = rightRef.current
      const overlay = overlayRef.current
      const text = textRef.current
      if (!section || !center || !left || !right || !overlay || !text) return

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })

      // Text fades out
      tl.to(text, { opacity: 0, y: -80, scale: 0.9, duration: 0.3 }, 0)

      // Side images fade and slide out
      tl.to(left, { x: "-120%", opacity: 0, duration: 0.5 }, 0.1)
      tl.to(right, { x: "120%", opacity: 0, duration: 0.5 }, 0.1)

      // Center image expands to full screen
      tl.to(center, {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        duration: 0.7,
        ease: "power2.out",
      }, 0.15)

      // Dark overlay appears
      tl.to(overlay, { opacity: 0.45, duration: 0.4 }, 0.5)
    })()

    return () => {
      tl?.kill?.()
    }
  }, [])

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">

        {/* 3 Images layout - BEHIND the text */}
        <div className="absolute inset-0 flex items-center justify-center gap-5 px-6 md:px-16 z-0">
          {/* Left image */}
          <div
            ref={leftRef}
            className="hidden md:block w-[22%] h-[55vh] rounded-2xl overflow-hidden shadow-xl shrink-0 opacity-60"
          >
            <img
              src={SIDE_IMAGES.left}
              alt="Maquinaria industrial"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center image */}
          <div
            ref={centerRef}
            className="w-[55vw] md:w-[42vw] h-[50vh] md:h-[62vh] rounded-2xl overflow-hidden shadow-2xl shrink-0 relative"
          >
            <img
              src="/machine-centrifuga.png"
              alt="Máquina de sellado centrífuga SESEICA"
              className="w-full h-full object-cover"
              style={{ animation: "slowPan 20s ease-in-out infinite alternate" }}
            />
            <div
              ref={overlayRef}
              className="absolute inset-0 bg-[#0a0f1a] pointer-events-none"
              style={{ opacity: 0 }}
            />
          </div>

          {/* Right image */}
          <div
            ref={rightRef}
            className="hidden md:block w-[22%] h-[55vh] rounded-2xl overflow-hidden shadow-xl shrink-0 opacity-60"
          >
            <img
              src={SIDE_IMAGES.right}
              alt="Productos industriales"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Hero text - ON TOP with solid white background panel */}
        <div ref={textRef} className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            className="text-center bg-white/90 backdrop-blur-sm px-12 py-10 rounded-3xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* SESEICA in serif font matching original logo typography */}
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black text-[#1e3a5f] tracking-wider leading-none"
              style={{ fontFamily: "var(--font-logo)" }}
            >
              SESEICA
            </h1>
            <p className="text-[#1e3a5f]/80 text-xs md:text-sm tracking-[0.3em] uppercase mt-1 font-medium" style={{ fontFamily: "var(--font-logo)" }}>
              Servicios de Sellado Industrial, SRL
            </p>

            <div className="w-16 h-0.5 bg-gradient-to-r from-[#C41E24] to-[#1e3a5f] mx-auto mt-5 mb-5 rounded-full" />

            <h2 className="text-base md:text-xl font-semibold text-[#334155] tracking-[0.12em] uppercase font-heading">
              Soluciones en Sellado Industrial
            </h2>

            <div className="inline-flex items-center gap-2 mt-5 px-5 py-2 rounded-full bg-[#1e3a5f]/8 border border-[#1e3a5f]/15">
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#C41E24] to-[#1e3a5f]" />
              <span className="text-[#1e3a5f] text-sm font-semibold tracking-wide">Desde 1998 • República Dominicana</span>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mt-7">
              {[
                { icon: Shield, label: "Calidad", value: "Certificada" },
                { icon: Wrench, label: "Experiencia", value: "+25 Años" },
                { icon: Droplets, label: "Productos", value: "+500" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#C41E24]" />
                  <div className="text-left">
                    <p className="text-[#1e3a5f] font-bold text-sm leading-tight">{value}</p>
                    <p className="text-[#94a3b8] text-xs">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 flex flex-col items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-[#94a3b8] text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4 text-[#94a3b8] animate-bounce" />
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes slowPan {
          0% { transform: scale(1.05) translateX(-2%); }
          100% { transform: scale(1.1) translateX(2%); }
        }
      `}</style>
    </section>
  )
}
