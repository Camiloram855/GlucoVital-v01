import { Button } from "../ui/button"
// Importa la imagen desde tu carpeta local
import productoImg from "../../img/NatVital-5.png"

export default function DescriptionSection() {
  return (
    <section id="descripcion" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen del producto */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img
                src={productoImg} // ahora usa la importación
                alt="Frasco de NatVital - Producto natural para el bienestar"
                className="w-[500px] h-[500px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Contenido de texto */}
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Descubre GlucoVital
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                <span className="font-semibold text-green-600">GlucoVital</span> es un suplemento{" "}
                <span className="font-semibold text-green-600">100% natural</span> diseñado para 
                apoyar tu bienestar integral. Elaborado con ingredientes de la más alta calidad,
                combina la sabiduría ancestral con los avances de la ciencia moderna.
              </p>

              <p>
                Nuestro compromiso con tu <span className="font-semibold text-green-600">salud</span>{" "}
                se refleja en cada cápsula. Los extractos botánicos presentes en NatVital han sido
                utilizados durante siglos por sus propiedades beneficiosas, y ahora los tienes en
                una fórmula concentrada y estandarizada.
              </p>

              <p>
                Siente una nueva ola de <span className="font-semibold text-green-600">energía</span>{" "}
                y vitalidad mientras cuidas tu cuerpo de forma natural. NatVital no solo favorece
                el equilibrio metabólico, también contribuye a tu sensación de{" "}
                <span className="font-semibold text-green-600">bienestar</span>.
              </p>

              <p>
                Únete a miles de personas que ya disfrutan los beneficios de NatVital. Tu camino
                hacia un estilo de vida más <span className="font-semibold text-green-600">saludable</span>{" "}
                y equilibrado empieza aquí, con la confianza que solo un producto{" "}
                <span className="font-semibold text-green-600">100% natural</span> puede darte.
              </p>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Comprar ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
