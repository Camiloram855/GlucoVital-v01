import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import imagenProducto1 from "../../img/NatVital-1.jpeg"
import imagenProducto2 from "../../img/NatVital-2.jpeg"
import imagenProducto3 from "../../img/NatVital-3.jpeg"

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const products = [
    {
      id: 1,
      name: "NatVital 500mg",
      description: "Glucovital con 20 cápsulas de 500mg.",
      image: imagenProducto1,
    },
    {
      id: 2,
      name: "NatVital 1000mg",
      description: "Glucovitalx3 con 60 cápsulas de 500mg.",
      image: imagenProducto2,
    },
    {
      id: 3,
      name: "NatVital Plus",
      description: "GlucovitalX4 con 80 cápsulas de 500mg.",
      image: imagenProducto3,
    },
  ]

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === products.length - 1 ? 0 : prev + 1
    )
  }

  const product = products[currentIndex]

  return (
    <section className="w-full bg-white py-16 px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center px-6">
        <h2 className="text-4xl font-bold text-green-700 mb-12">
          Presentaciones del Producto
        </h2>

        <div className="relative w-full max-w-2xl">
          {/* Tarjeta del producto */}
          <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[450px] object-contain mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <button
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition"
              onClick={() => {
                const el = document.getElementById("registro")
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Comprar ahora
            </button>
          </div>

          {/* Botones navegación */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow hover:bg-green-700 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow hover:bg-green-700 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicadores (dots) */}
        <div className="flex gap-3 mt-6">
          {products.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? "bg-green-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
