import { useState } from "react"
import { Phone, User, CheckCircle, Banknote } from "lucide-react"

// Reutilizamos tus componentes simples
const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-300 ${className}`}
  >
    {children}
  </button>
)

const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${className}`}
  />
)

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-md p-6 ${className}`}>
    {children}
  </div>
)

export default function RegistrationForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="text-center">
          <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Registro Exitoso!</h2>
          <p className="text-gray-600">Gracias por registrarte. Te contactaremos pronto.</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-emerald-50">
      <div className="w-full max-w-md space-y-6">
        {/* Formulario de Registro */}
        <Card>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Registro Rápido</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700 flex items-center gap-2">
                <User className="w-4 h-4" /> Nombre completo
              </label>
              <Input
                type="text"
                placeholder="Ingresa tu nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 flex items-center gap-2">
                <Phone className="w-4 h-4" /> Número de teléfono
              </label>
              <Input
                type="tel"
                placeholder="Ej: 310 456 7890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Registrando..." : "Registrarse Ahora"}
            </Button>
          </form>
        </Card>

        {/* Pago contra entrega */}
        <Card className="bg-emerald-50 border border-emerald-200">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <Banknote className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Pago Contra Entrega</h3>
              <p className="text-sm text-gray-600">
                Paga cuando recibas tu pedido. <span className="font-medium">Sin costos adicionales</span>.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
