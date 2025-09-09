// src/components/sections/HeroSection.jsx
import { Button } from "../ui/button"

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Descubre el Poder de
          <span className="text-emerald-600 block">GucoVital</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          GlucoVital te ofrece la fórmula natural más pura para mejorar tu salud y bienestar de forma integral.
        </p>
        <Button className="px-8 py-4 text-lg rounded-full shadow-lg">
          Comprar Ahora
        </Button>
      </div>
    </section>
  )
}
