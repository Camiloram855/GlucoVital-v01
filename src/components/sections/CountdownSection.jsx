// src/components/sections/CountdownSection.jsx
import { useState, useEffect } from "react"
import { Clock } from "lucide-react"
import { Button } from "../ui/button"

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 23, seconds: 45 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  
  return (
    <section className="py-20 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">¡Oferta Limitada!</h2>
      <p className="text-xl text-gray-600 mb-12">
        Aprovecha nuestro descuento especial del 40% antes de que se agote
      </p>
      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-12">
        {[
          { label: "Días", value: timeLeft.days },
          { label: "Horas", value: timeLeft.hours },
          { label: "Min", value: timeLeft.minutes },
          { label: "Seg", value: timeLeft.seconds },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <div className="bg-emerald-600 text-white rounded-lg p-4 mb-2">
              <div className="text-2xl md:text-3xl font-bold">{item.value.toString().padStart(2, "0")}</div>
            </div>
            <div className="text-sm text-gray-600 font-medium">{item.label}</div>
          </div>
        ))}
      </div>
      <Button
        className="px-8 py-4 text-lg rounded-full shadow-lg flex items-center mx-auto"
        onClick={() => {
          const el = document.getElementById("registro")
          if (el) {
            el.scrollIntoView({ behavior: "smooth" })
          }
        }}
      >
        <Clock className="w-5 h-5 mr-2" />
        Comprar con Descuento
      </Button>
    </section>
  )
}
