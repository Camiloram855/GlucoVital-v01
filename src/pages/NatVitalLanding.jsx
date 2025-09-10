// src/pages/NatVitalLanding.jsx
import HeroSection from "../components/sections/HeroSection"
import BenefitsSection from "../components/sections/BenefitsSection"
import CountdownSection from "../components/sections/CountdownSection"
import RegistrationSection from "../components/sections/RegistrationSection"
import RegistrationSectionDos from "../components/sections/RegistrationSectionDos"
import ProductCarousel from "../components/sections/ProductCarousel"
import Footer from "../components/layout/Footer"   // 👈 Importación del Footer
import DescriptionSection from "../components/sections/DescriptionSection"
import DescriptionSectionDos from "../components/sections/DescriptionSectionDos"
import RibbonButton from "../components/ui/RibbonButton"
import GlucoVitalSection from "../components/sections/GlucoVitalSection"
import FaqSection from "../components/sections/FaqSection"

export default function NatVitalLanding() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <RegistrationSectionDos />
        <ProductCarousel />
        <GlucoVitalSection />
        <DescriptionSection />
        <BenefitsSection />
        <CountdownSection />
        <DescriptionSectionDos />
        <RegistrationSection />
        <FaqSection />

      </main>
      <Footer /> {/* 👈 Footer agregado */}
      <RibbonButton />
    </div>
  )
}
