import imgMaria from "../../img/reseñas/image1.png"
import imgCarlos from "../../img/reseñas/image2.png"
import imgAna from "../../img/reseñas/image3.jpg"
import imgLuis from "../../img/reseñas/image4.jpg"
import imgCarmen from "../../img/reseñas/image5.jpg"
import imgRoberto from "../../img/reseñas/image6.jpg"


const ReviewsSection = () => {
  // Datos de ejemplo para las reseñas
  const reviews = [
    {
      id: 1,
      name: "María González",
      rating: 5,
      comment:
        "Excelente servicio, superó todas mis expectativas. El equipo fue muy profesional y atento a todos los detalles.",
      avatar: imgMaria,
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      rating: 5,
      comment: "Muy satisfecho con la calidad del trabajo. Definitivamente recomendaría sus servicios a otros.",
      avatar: imgCarlos,
    },
    {
      id: 3,
      name: "Ana Martínez",
      rating: 4,
      comment:
        "Gran experiencia de principio a fin. El proceso fue muy fluido y el resultado final fue exactamente lo que esperaba.",
      avatar: imgAna,
    },
    {
      id: 4,
      name: "Luis Fernández",
      rating: 5,
      comment: "Increíble atención al cliente y resultados de alta calidad. Sin duda volveré a trabajar con ellos.",
      avatar: imgLuis,
    },
    {
      id: 5,
      name: "Carmen López",
      rating: 4,
      comment:
        "Muy profesionales y eficientes. El proyecto se completó en tiempo y forma, cumpliendo con todas nuestras expectativas.",
      avatar: imgCarmen,
    },
    {
      id: 6,
      name: "Roberto Silva",
      rating: 5,
      comment:
        "Excepcional calidad y servicio. El equipo demostró gran expertise y dedicación en cada etapa del proyecto.",
      avatar: imgRoberto,
    },
  ]

  // Componente para renderizar las estrellas
  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Título centrado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre por qué miles de clientes confían en nosotros para sus proyectos más importantes
          </p>
        </div>

        {/* Cuadrícula de reseñas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Header con foto y nombre */}
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={`Foto de ${review.name}`}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-100"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{review.name}</h3>
                  <StarRating rating={review.rating} />
                </div>
              </div>

              {/* Comentario */}
              <p className="text-gray-700 leading-relaxed text-sm">"{review.comment}"</p>
            </div>
          ))}
        </div>

        {/* Call to action opcional */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¿Quieres ser parte de nuestros clientes satisfechos?</p>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
