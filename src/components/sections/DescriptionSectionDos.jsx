import productoImg from "../../img/medicamentos.png"

export default function DescriptionSectionDos() {
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
                className="w-[800px] h-[500px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Contenido de texto */}
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              ¿Está cansado de los medicamentos tradicionales? 
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
  La <span className="font-semibold text-black">diabetes</span> y la{" "}
  <span className="font-semibold text-black">hipertensión arterial</span>{" "}
  son condiciones que requieren atención médica constante. Muchos pacientes 
  dependen de medicamentos recetados como <span className="font-semibold text-black">Insulina</span> 
  para controlar la glucosa, <span className="font-semibold text-black">Metformina</span> para regularla, 
  o <span className="font-semibold text-black">Losartán</span> para la presión arterial. 
  Sin embargo, estos fármacos pueden generar efectos secundarios y dependencia 
  si no se administran correctamente, afectando órganos como los riñones, el corazón 
  y el hígado.
</p>

<p>
  El uso prolongado de <span className="font-semibold text-black">Losartán</span> puede provocar mareos, fatiga y desequilibrio electrolítico. 
  La <span className="font-semibold text-black">Insulina</span> puede causar hipoglucemias si se usa de manera incorrecta, 
  y la <span className="font-semibold text-black">Metformina</span> puede afectar la digestión y, en casos raros, la función renal. 
  Por ello, es fundamental el seguimiento médico y no alterar las dosis prescritas.
</p>

<p>
  Entender los riesgos y efectos secundarios de estos medicamentos permite un manejo más seguro 
  de la <span className="font-semibold text-black">diabetes</span> y la{" "}
  <span className="font-semibold text-black">hipertensión arterial</span>, 
  evitando complicaciones graves y asegurando que el tratamiento aporte beneficios reales 
  sin comprometer la salud a largo plazo.
</p>


            </div>

            <div className="pt-4">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
