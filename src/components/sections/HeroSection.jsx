// src/components/sections/HeroSection.jsx
import { Button } from "../ui/button"
import fondo from "../../img/imagen_de_fondo.jpeg"

export default function HeroSection() {
  return (
<section
  id="hero"
  className="relative flex items-center justify-center h-[75vh] md:h-[85vh]"
  style={{
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
    backgroundPosition: "top center", // 👈 muestra mejor el contenido superior de la imagen
    backgroundRepeat: "no-repeat",
  }}
>

      {/* Overlay para dar contraste al texto */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
          Descubre el Poder de
          <span className="text-emerald-300 block">GlucoVital</span>
        </h1>

        <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
          GlucoVital te ofrece la fórmula natural más pura para mejorar tu salud y bienestar de forma integral.
        </p>

        <Button
          className="px-8 py-4 text-lg rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-700"
          onClick={() => {
            const el = document.getElementById("registro")
            if (el) {
              el.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          Comprar Ahora
        </Button>
      </div>
    </section>
  )
}
