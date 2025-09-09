// src/components/layout/Footer.jsx
import { Facebook, Instagram, Youtube } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [year] = useState(new Date().getFullYear())

  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <h3 className="text-2xl font-bold">NatVital</h3>
            </div>
            <p className="text-green-100 leading-relaxed max-w-sm">
              Productos naturales de la más alta calidad para tu bienestar. 
              Cuidamos tu salud con ingredientes 100% naturales y sostenibles.
            </p>
          </div>

          {/* Quick navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navegación</h4>
            <nav className="flex flex-col space-y-3">
              {["Inicio", "Beneficios", "Productos", "Contacto"].map((item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  className="text-green-100 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200 hover:scale-110 transform"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200 hover:scale-110 transform"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-green-100 text-sm">
              Mantente al día con nuestras últimas novedades y consejos de salud natural.
            </p>
          </div>
        </div>

        {/* Copyright line */}
        <div className="border-t border-green-800 mt-12 pt-8">
          <p className="text-center text-green-200 text-sm">
            © {year} NatVital. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
