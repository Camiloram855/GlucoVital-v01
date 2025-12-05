"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqData = [
  {
    question: "¿Cómo funciona el proceso de compra?",
    answer: `¡Comprar en nuestra tienda es muy fácil! 
    Primero, Lee nuestro articulo, los testimonos y las presentaciones del producto para asegurarte de que es lo que necesitas.
    Segundo, ingresa tu nombre completo, y teléfono de contacto en el formulario de compra.
    Tercero, un especialista se comunicará contigo para confirmar tu pedido y enviarlo.`,
  },
  {
    question: "¿Cómo funcionan los envíos?",
    answer: `Hacemos envíos a todo el país. En ciudades principales de 1-3 días hábiles, y no hacemos envios a veredas o fincas
    pero si tienes una direccion alternativa lo podemos gestionar para que te llegue y llamen antes de 3-7 días hábiles
    Todos los pedidos incluyen número de guía para seguimiento.`,
  },
  {
    question: "¿Cómo se realizan los pagos?",
    answer: `Aceptamos Pago contra entrega en todas las ciudades, tambien tarjeta de credito o debito a través de nuestra pasarela segura.`,
  },
  {
    question: "¿Aceptan tarjetas de crédito?",
    answer: `Sí, aceptamos Visa, Mastercard, Nequi, Daviplata y PSE.`,
  },
]

export default function FaqSection() {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
          Preguntas Frecuentes
        </h1>
        <p className="text-gray-600 text-lg text-green-800">
          Antes de contactarnos, por favor lee las siguientes respuestas con cuidado:
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openItems.includes(index)

          return (
            <div
              key={index}
              className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "bg-pink-50 border-2 border-pink-400" : "bg-white border border-gray-200"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
              >
                <span className="font-bold text-green-800 text-lg pr-4">
                  {item.question}
                </span>
                {isOpen ? (
                  <Minus className="w-5 h-5 text-pink-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4 pt-2">
                  <div className="bg-pink-100 rounded-md p-4 border-l-4 border-pink-400">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Contact Link */}
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          ¿No encontraste la respuesta que buscabas?{" "}
          <a
            href="#contact"
            className="text-pink-500 hover:text-pink-600 font-medium underline transition-colors duration-200"
          >
            Contáctanos aquí
          </a>
        </p>
      </div>
    </div>
  )
}
