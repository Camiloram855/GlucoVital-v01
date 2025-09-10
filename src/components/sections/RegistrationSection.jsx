// src/components/sections/RegistrationSection.jsx
import RegistrationForm from "../RegistrationForm"

export default function RegistrationSection() {
  return (
    <section id="registro" className="py-20 px-4 bg-emerald-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Regístrate Ahora
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Déjanos tus datos para asegurar tu descuento y recibir más información.
        </p>
        <RegistrationForm />
      </div>
    </section>
  )
}
