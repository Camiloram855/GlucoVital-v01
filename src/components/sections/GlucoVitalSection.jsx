// src/components/sections/GlucoVitalSection.jsx

// Importamos imágenes desde src/img/img_section
import canelaImg from "../../img/img_section/canela.jpg"
import moringaImg from "../../img/img_section/moringa.jpg"
import curcumaImg from "../../img/img_section/curcuma.jpg"
import teVerdeImg from "../../img/img_section/te_verde.jpg"

import aguaImg from "../../img/img_section/vida_saludable2.jpg"
import constanciaImg from "../../img/img_section/tiempo.jpg"
import habitosImg from "../../img/img_section/vida_saludable.jpg"

const GlucoVitalSection = () => {
  const ingredients = [
    {
      name: "Canela",
      image: canelaImg,
      description:
        "Ayuda a regular los niveles de glucosa en sangre y mejora la sensibilidad a la insulina, favoreciendo un metabolismo saludable de los azúcares.",
    },
    {
      name: "Moringa",
      image: moringaImg,
      description:
        "Rica en antioxidantes y compuestos bioactivos que apoyan la función metabólica y ayudan a mantener niveles estables de energía.",
    },
    {
      name: "Cúrcuma",
      image: curcumaImg,
      description:
        "Potente antiinflamatorio natural que mejora la función celular y apoya el metabolismo de grasas y carbohidratos de manera eficiente.",
    },
    {
      name: "Té Verde",
      image: teVerdeImg,
      description:
        "Contiene catequinas y EGCG que aceleran el metabolismo, promueven la quema de grasas y ayudan a mantener un peso saludable.",
    },
  ]

  const instructions = [
    {
      title: "Tómalo con agua",
      icon: aguaImg,
      description:
        "Ingiere una cápsula dos veces al día, una por la mañana y otra por la noche, acompañada de un vaso de agua.",
    },
    {
      title: "Sé constante",
      icon: constanciaImg,
      description:
        "Es fundamental tomarlo de manera regular y en un horario fijo para asegurar que los efectos sean consistentes.",
    },
    {
      title: "Combínalo con hábitos saludables",
      icon: habitosImg,
      description:
        "Acompaña GlucoVital con una alimentación equilibrada y una rutina de ejercicio que ayude a mantener tu bienestar general.",
    },
  ]

  return (
    <section id="glucovital" className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título principal */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 tracking-wide">
            LA FÓRMULA NATURAL DE GLUCOVITAL
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo sus ingredientes naturales soportan el metabolismo de grasas y azúcares para mantener niveles
            saludables de glucosa
          </p>
        </div>

        {/* Ingredientes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg bg-white p-2">
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">{ingredient.name}</h3>
              <p className="text-gray-700 leading-relaxed text-sm px-2">{ingredient.description}</p>
            </div>
          ))}
        </div>

        {/* Instrucciones */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 tracking-wide">CÓMO TOMAR GLUCOVITAL</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Sigue estos consejos para aprovechar al máximo sus beneficios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructions.map((instruction, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 shadow-md">
                  <img
                    src={instruction.icon}
                    alt={instruction.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-4">{instruction.title}</h3>
                <p className="text-gray-700 leading-relaxed">{instruction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GlucoVitalSection
