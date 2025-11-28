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

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })

  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // 🔥 NUEVO handleSubmit — SIN BACKEND — ENVÍA A WHATSAPP
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const message = `
¡Nuevo registro desde la landing GlucoVital!

👤 Nombre: ${formData.name}
📱 Teléfono: ${formData.phone}

Por favor continuar con la atención al cliente.
    `.trim()

    const phoneNumber = "573134203038" // ← WhatsApp en formato internacional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    // abrir WhatsApp
    window.open(url, "_blank")

    setLoading(false)
    setFormData({ name: "", phone: "" })
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
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">PASO 1</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Comparte tus datos:</strong> Ingresa tu nombre y número de teléfono.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">PASO 2</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Habla con nosotros:</strong> Un especialista te contactará.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">PASO 3</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Recibe y paga:</strong> Contra entrega.
                </p>
              </div>
            </div>
          </div>

          {/* Iconos */}
          <div className="flex justify-center md:justify-start gap-8 pt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-xs text-gray-600 font-medium">Compra Segura</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Truck className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-xs text-gray-600 font-medium">Envíos Rápidos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <CreditCard className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-xs text-gray-600 font-medium">Pago Contra Entrega</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha - Formulario */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8 shadow-md">

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ¿CUÁL ES TU NOMBRE?
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
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
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
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
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-200 hover:scale-105"
            >
              {loading ? "Enviando..." : "¡PÍDELO AHORA!"}
            </button>
          </form>

          <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-pink-500 mt-0.5" />
            <p className="text-sm text-gray-600 leading-relaxed">
              Te contactaremos por WhatsApp o llamada después del registro.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
