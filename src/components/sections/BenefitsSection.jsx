// src/components/sections/BenefitsSection.jsx
import { Leaf, Shield, Heart } from "lucide-react"

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-md ${className}`}>{children}</div>
)

export default function BenefitsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Beneficios Naturales Comprobados
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">100% Natural</h3>
            <p className="text-gray-600">
              Ingredientes puros extraídos directamente de la naturaleza, sin químicos ni aditivos artificiales.
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Calidad Garantizada</h3>
            <p className="text-gray-600">
              Certificado por laboratorios internacionales con los más altos estándares de calidad y pureza.
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Bienestar Integral</h3>
            <p className="text-gray-600">
              Mejora tu energía, fortalece tu sistema inmune y optimiza tu salud de manera natural.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
