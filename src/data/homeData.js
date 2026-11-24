export const HOME_DATA = {
  greeting: "Hola, bienvenido",
  juniorGreeting: "¡Hola, explorador!",
  defaultUserName: "Juan",
  characterCard: {
    title: "Conseguí tus personajes de la reserva",
    juniorTitle: "¡Destrabá los 3 regalos secretos!",
    buttonText: "Escanear QR para jugar",
    juniorButtonText: "Escanear QR para jugar",
    totalSteps: 3,
  },
  didYouKnowCard: {
    title: "¿Sabías que...?",
    facts: [
      {
        description:
          "El molle es un árbol nodriza: su sombra protege a orquídeas, bromelias y helechos jóvenes del monte.",
        juniorDescription:
          "¡El molle es como un paraguas! Su sombra protege a orquídeas y helechos pequeños del sol fuerte.",
      },
      {
        description:
          "Los frutos dulces y picantes del molle alimentan a muchas aves de la reserva.",
        juniorDescription:
          "¡A muchos pajaritos les encantan los frutitos rojos del molle!",
      },
      {
        description:
          "El carpincho tiene los ojos, las orejas y la nariz en la parte alta de la cabeza para asomarse mientras nada.",
        juniorDescription:
          "El carpincho puede nadar dejando afuera solo los ojos, las orejas y la nariz.",
      },
      {
        description:
          "Los hongos descomponen hojas y otros restos, y así devuelven nutrientes al suelo.",
        juniorDescription:
          "Los hongos ayudan a convertir las hojas caídas en nutrientes para la tierra.",
      },
    ],
  },
  fireSafety: {
    buttonLabel: "Guía contra incendios",
    modalTitle: "Prevención y Emergencias",
    juniorModalTitle: "¿Ves humo o fuego?",
    juniorIntro:
      "Alejate del humo y del fuego. Avisale a un adulto o guardaparque cercano. No intentes apagarlo.",
    adultIntro:
      "El fuego puede avanzar rápido en el monte. No intentes apagarlo: alejate y avisá.",
    juniorSteps: [
      "Alejate: del humo y del fuego.",
      "Avisá: a un adulto o guardaparque cercano.",
      "Quedate: con esa persona y seguí sus indicaciones.",
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
      { label: "Bomberos Voluntarios", shortLabel: "Bomberos", number: "100" },
      { label: "Defensa Civil", shortLabel: "Defensa Civil", number: "103" },
      { label: "Emergencias Policiales", shortLabel: "Policía", number: "911" },
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
