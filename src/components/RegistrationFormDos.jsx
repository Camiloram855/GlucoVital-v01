"use client"

import { useState } from "react"
import {
  Phone,
  User,
  Shield,
  Truck,
  CreditCard,
  AlertCircle,
} from "lucide-react"

export default function RegistrationFormDos() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aquí va la lógica de registro/envío al backend
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Columna Izquierda - Pasos */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            ¿Cómo registrarte en{" "}
            <span className="text-green-600">GlucoVital</span>?
          </h2>

          {/* Pasos */}
          <div className="space-y-6">
            {/* Paso 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">PASO 1</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Comparte tus datos:</strong> Ingresa tu nombre y
                  número de teléfono en el formulario seguro.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">PASO 2</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Habla con nosotros:</strong> Un asesor experto te
                  llamará para confirmar tu pedido y responder cualquier duda.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">PASO 3</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Recibe y paga:</strong> ¡Tu producto llegará rápido!
                  Paga cómodamente al recibirlo.
                </p>
              </div>
            </div>
          </div>

          {/* Íconos de características */}
          <div className="flex justify-center md:justify-start gap-8 pt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-xs text-gray-600 font-medium">
                Compra <br /> Segura
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Truck className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-xs text-gray-600 font-medium">
                Envíos <br /> Rápidos
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <CreditCard className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-xs text-gray-600 font-medium">
                Contra <br /> Reembolso
              </p>
            </div>
          </div>
        </div>

        {/* Columna Derecha - Formulario */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8 shadow-md">
          {/* Oferta */}
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2">
              ¡OFERTA 50% OFF!
            </h3>
            <p className="text-gray-600 mb-4">
              Aprovecha esta rebaja exclusiva:
            </p>

            {/* Precios */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-lg text-gray-500 line-through animate-[zoom_1.5s_ease-in-out_infinite]">
                $238000
              </span>
              <span className="text-3xl font-bold text-green-600 animate-[zoom_1.5s_ease-in-out_infinite]">
                $119000
              </span>
            </div>

            {/* Badge de descuento */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm leading-tight text-center">
                50% <br /> HOY
              </div>
              <p className="text-sm text-gray-600">
                ¡No te lo pierdas! ¡Pocas unidades a este{" "}
                <span className="text-pink-600 font-semibold">
                  precio especial
                </span>
                !
              </p>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ¿CUÁL ES TU NOMBRE?
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ingresa tu nombre"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ¿CUÁL ES TU NÚMERO DE TELÉFONO?
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Ingresa tu teléfono"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-200 hover:scale-105 transform"
            >
              ¡PÍDELO AHORA!
            </button>
          </form>

          {/* Aviso */}
          <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600 leading-relaxed">
              Nuestros expertos asesores te llamarán a la brevedad para confirmar
              tus datos y responder a cualquier pregunta.
            </p>
          </div>
        </div>
      </div>

      {/* Animación personalizada */}
      <style jsx>{`
        @keyframes zoom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }
      `}</style>
    </div>
  )
}
