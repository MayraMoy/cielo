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
      "El molle es un árbol nodriza: su sombra protege a orquídeas, bromelias y helechos jóvenes del monte.",
    juniorDescription:
      "¡El molle es como un paraguas! Su sombra protege a orquídeas y helechos pequeños del sol fuerte.",
  },
  fireSafety: {
    buttonLabel: "SOS Incendios",
    modalTitle: "Prevención y Emergencias",
    juniorModalTitle: "¡Brigada Contra el Fuego! 🚒",
    juniorIntro:
      "Si ves humo o fuego, alejate. No intentes apagarlo y avisá a un adulto.",
    adultIntro:
      "El fuego puede avanzar rápido en el monte. No intentes apagarlo: alejate y avisá.",
    juniorSteps: [
      "Alejate del humo y del fuego.",
      "Avisá a un adulto y llamen a Bomberos (100).",
      "Si es seguro, ayudá a otras personas a alejarse.",
    ],
    adultSteps: [
      "Proteger: Alejate del fuego y del humo por un camino seguro.",
      "Avisar: Llamá a Bomberos (100) e indicá la estación QR más cercana.",
      "Socorrer: Ayudá a otras personas solo si no te acercás al fuego.",
    ],
    preventionRules: [
      "No enciendas fuego ni uses calentadores.",
      "No tires colillas ni vidrios.",
      "Llevate tus residuos.",
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
