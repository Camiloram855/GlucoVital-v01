// src/components/sections/RegistrationSection.jsx
import RegistrationFormDos from "../RegistrationFormDos"

export default function RegistrationSectionDos() {
  return (
    <section className="py-20 px-4 bg-emerald-50">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-lg text-gray-600 mb-12">
          Déjanos tus datos para asegurar tu descuento y recibir más información.
        </p>
        <RegistrationFormDos />
      </div>
    </section>
  )
}
