import mascot from "../../img/mascota.png"

export default function FloatingMascot() {
  return (
    <div
      className="fixed bottom-6 right-6 z- cursor-pointer transition-transform hover:scale-"
    >
      <img
        src={mascot}
        alt="Mascota GlucoVital"
        className="w-24 h-auto drop-shadow-xl"
      />
    </div>
  )
}
