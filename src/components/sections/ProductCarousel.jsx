import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import imagenProducto1 from "../../img/NatVital-1.jpeg"
import imagenProducto2 from "../../img/NatVital-2.jpeg"
import imagenProducto3 from "../../img/NatVital-3.jpeg"
import fondoGluco from "../../img/fondo-gluco.png"

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const products = [
    {
      id: 1,
      name: "NatVital 500mg",
      description: "Fórmula avanzada diseñada para apoyar el control natural del azúcar.",
      image: imagenProducto1,
    },
    {
      id: 2,
      name: "NatVital 1000mg",
      description: "Doble concentración para quienes buscan un soporte metabólico más fuerte.",
      image: imagenProducto2,
    },
    {
      id: 3,
      name: "NatVital Plus",
      description: "Máxima potencia con ingredientes premium para mayor equilibrio y bienestar.",
      image: imagenProducto3,
    },
  ]

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1))
  }

  const product = products[currentIndex]

  return (
    <section
      className="w-full py-24 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${fondoGluco})`,
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center backdrop-blur-md bg-white/50 p-12 rounded-3xl shadow-xl border border-white/40">
        
        {/* TÍTULO */}
        <h2 className="text-5xl font-extrabold text-green-800 drop-shadow-sm mb-10 tracking-tight">
          Presentaciones Disponibles
        </h2>

        {/* CARRUSEL */}
        <div className="relative w-full max-w-3xl">
          
          {/* Tarjeta */}
          <div className="">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[420px] object-contain mx-auto mb-6 drop-shadow-lg"
            />

            <h3 className="text-3xl font-bold text-green-700 mb-2">{product.name}</h3>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto mb-6">
              {product.description}
            </p>

            <button
              className="bg-green-600 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow hover:bg-green-700 active:scale-95 transition"
              onClick={() => {
                const el = document.getElementById("registro")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Comprar Ahora
            </button>
          </div>

          {/* Botones */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-16 transform -translate-y-1/2 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 active:scale-95 transition"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-16 transform -translate-y-1/2 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 active:scale-95 transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex gap-4 mt-10">
          {products.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-green-700 scale-110 shadow"
                  : "bg-gray-400 opacity-60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
