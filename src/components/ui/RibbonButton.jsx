import mascot from "../../img/mascota.png"

export default function FloatingMascot() {
  return (
    <div
      className="fixed bottom-0 right-0 mr-2 mb-2 z-50 cursor-pointer transition-transform hover:scale-105"
    >
      <img
        src={mascot}
        alt="Mascota GlucoVital"
        className="w-18 h-auto drop-shadow-xl"
      />
    </div>
  )
}
