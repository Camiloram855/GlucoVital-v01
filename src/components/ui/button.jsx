export function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md 
                  hover:bg-emerald-700 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  )
}

  