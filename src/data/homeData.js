export const HOME_DATA = {
  greeting: "Hola, bienvenido",
  juniorGreeting: "¡Hola, explorador!",
  defaultUserName: "Juan",
  characterCard: {
    title: "Consigue tus personajes de la reserva",
    juniorTitle: "¡Destrabá los 3 regalos secretos!",
    buttonText: "Empezar a jugar",
    juniorButtonText: "¡Ir a buscar QR!",
    totalSteps: 3,
  },
  didYouKnowCard: {
    title: "¿Sabías que...?",
    icon: "🌿",
    description:
      'En la Reserva Villa Cielo, el Molle actúa como un "árbol nodriza": bajo su sombra y protección nacen y crecen orquídeas, bromelias y helechos que no podrían sobrevivir solos en el monte.',
    juniorDescription:
      '¡El árbol Molle es como una "mamá paraguas" del bosque! Debajo de sus ramas cuida a plantitas bebés (como orquídeas y helechos) para que el sol fuerte no las lastime.',
  },
  fireSafety: {
    badgeText: "Riesgo de Incendio: ALTO",
    buttonLabel: "SOS Incendios",
    modalTitle: "Prevención y Emergencias",
    juniorModalTitle: "¡Brigada Contra el Fuego! 🚒",
    riskLevel: "Alto (Temporada Seca)",
    juniorIntro:
      "Si ves humo o fueguito en la reserva, ¡nunca intentes apagarlo solo! Seguí estos 3 pasos de guardaparque:",
    adultIntro:
      "La Reserva Natural Municipal Villa Cielo posee pastizales y monte nativo altamente inflamables. Ante humo o principio de incendio, aplicá el protocolo PAS:",
    juniorSteps: [
      "1. ¡Avisale enseguida a un adulto que esté con vos!",
      "2. Alejate caminando tranquilo en dirección contraria al humo.",
      "3. Pedile a un mayor que llame a los Guardaparques o Bomberos (100).",
    ],
    adultSteps: [
      "1. PROTEGER: Retirate por el sendero marcado en dirección opuesta al viento y al humo.",
      "2. AVISAR: Comunicá inmediatamente la ubicación (posta QR más cercana) a Bomberos (100) o Guardaparques.",
      "3. SOCORRER: Priorizá la evacuación de niños y personas mayores sin exponerte al frente de fuego.",
    ],
    preventionRules: [
      "Prohibido encender fuego o usar calentadores en toda la reserva.",
      "No arrojes colillas de cigarrillos ni botellas/vidrios (efecto lupa).",
      "Llevate todos tus residuos de regreso a casa.",
    ],
    emergencyContacts: [
      { label: "Bomberos Voluntarios", number: "100" },
      { label: "Defensa Civil", number: "103" },
      { label: "Emergencias Policiales", number: "911" },
    ],
  },
  navItems: [
    {
      id: "home",
      label: "Inicio",
      icon: "home",
    },
    {
      id: "scan",
      label: "Escanear QR",
      icon: "scan",
      isPrimary: true,
    },
    {
      id: "library",
      label: "Colección",
      icon: "library",
    },
  ],
};
