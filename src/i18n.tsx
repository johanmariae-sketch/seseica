import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"

type Lang = "es" | "en"

type I18nContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (es: string, en: string) => string
}

const I18nContext = createContext<I18nContextType>({
  lang: "es",
  setLang: () => {},
  t: (es) => es,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es")
  const t = (es: string, en: string) => (lang === "es" ? es : en)

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useLang() {
  return useContext(I18nContext)
}
