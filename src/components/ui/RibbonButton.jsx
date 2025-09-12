// src/components/ui/RibbonDiagonal.jsx
export default function RibbonDiagonal() {
    return (
      <a
        href="#hero" // 🔹 ahora llevo esto al formulario
        className="fixed bottom-0 right-0 z-50"
      >
        <div
          className="bg-blue-600 text-white font-semibold px-20 py-9 shadow-lg
                     hover:bg-blue-700 transition-transform duration-300"
          style={{
            transform: "translate(36%, 15%) rotate(-45deg)", // 🔹 ángulo diagonal
          }}
        >
          GlucoVital
        </div>
      </a>
    )
  }
  