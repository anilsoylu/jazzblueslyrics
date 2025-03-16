const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    const yOffset = -70 // Header yüksekliğine göre ayarlayın
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: "smooth" })
  }
}

export default scrollToSection
