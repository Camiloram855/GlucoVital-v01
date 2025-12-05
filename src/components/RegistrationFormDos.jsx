"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import {
  Phone,
  User,
  Shield,
  Truck,
  CreditCard,
} from "lucide-react"

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
    }

    try {
      await emailjs.send(
        "service_tign351",
        "template_cn0c8eg",
        templateParams,
        "kK2OReJJQoRu00rfG"
      )

      setSuccess(true)
      setFormData({ name: "", phone: "" })
    } catch (error) {
      console.error("Error enviando email:", error)
      setSuccess(false)
    }

    setLoading(false)
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* 👉 PRIMERO EL FORMULARIO */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8 shadow-md order-1 md:order-none">

          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2">
              ¡OFERTA 50% OFF!
            </h3>
            <p className="text-gray-600 mb-4">
              Activa ahora el precio especial antes de que la promoción cierre.
            </p>

            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-lg text-gray-500 line-through animate-[zoom_1.5s_ease-in-out_infinite]">
                $278000
              </span>
              <span className="text-3xl font-bold text-green-600 animate-[zoom_1.5s_ease-in-out_infinite]">
                $119000
              </span>
            </div>
          </div>

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
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-200 hover:scale-105 transform"
            >
              {loading ? "Enviando..." : "¡PÍDELO AHORA!"}
            </button>
          </form>

          {success === true && (
            <p className="mt-4 text-green-600 font-semibold">
              ✅ Tus datos fueron enviados.
            </p>
          )}
        </div>

        {/* 👉 DESPUÉS LOS PASOS */}
        <div className="space-y-8 order-2 md:order-none">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            “Regístrate hoy y asegura tu promoción de{" "}
            <span className="text-green-600">GlucoVital</span>”
          </h2>

          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">PASO 1</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Déjanos tus datos</strong> y activa tu precio promocional antes de que se agote. Solo toma unos segundos.
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
                  <strong>Recibe una llamada rápida</strong> de nuestro especialista experto para ayudarte a elegir la mejor opción para tu salud.
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
                  <strong>Recibe tu pedido sin riesgos</strong>, paga solo cuando llegue y empieza a mejorar tu bienestar desde el primer día.
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
              <p className="text-xs text-gray-600 font-medium">Compra <br /> Segura</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Truck className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-xs text-gray-600 font-medium">Envíos <br /> Rápidos</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <CreditCard className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-xs text-gray-600 font-medium">Contra <br /> Reembolso</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
