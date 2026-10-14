const STATIONS = [
  {
    step: 1,
    id: "molle",
    stationLabel: "Estación 1: Monte Nativo",
    name: "Árbol Molle",
    scientificName: "Schinus areira",
    tag: "Árbol Nodriza • Productor",
    reserve: "Reserva Villa Cielo",
    description:
      "Árbol protector que da sombra y refugio a orquídeas, bromelias y helechos del monte serrano.",
    juniorDescription:
      "¡El gran Árbol Nodriza! Da sombra y casita a muchas plantas chiquitas y pajaritos.",
    curiosity:
      "Sus frutos dulces y picantes (pimienta rosa) alimentan a decenas de aves locales.",
    juniorCuriosity:
      "¡Sus frutitas rojas parecen confites y a los pájaros les encantan!",
    rewardText: "Superá la trivia para ganar el Regalo #1 y nuevas fichas.",
    totalSteps: 3,
  },
  {
    step: 2,
    id: "carpincho",
    stationLabel: "Estación 2: Sendero del Humedal",
    name: "Carpincho",
    scientificName: "Hydrochoerus hydrochaeris",
    tag: "Herbívoro • Consumidor Primario",
    reserve: "Reserva Villa Cielo",
    description:
      "El roedor más grande del mundo habita zonas húmedas. Conecta a los productores con el resto de la red trófica.",
    juniorDescription:
      "¡El gran nadador del humedal! Come pastito cerca del agua y es súper amigable.",
    curiosity:
      "Sus ojos, orejas y nariz están alineados arriba para ver y respirar casi sumergido.",
    juniorCuriosity:
      "¡Puede quedarse bajo el agua dejando solo la nariz como un submarino!",
    rewardText: "Superá la trivia para destrabar el Regalo #2 y sumar consumidores.",
    totalSteps: 3,
  },
  {
    step: 3,
    id: "halcon",
    stationLabel: "Estación 3: Mirador del Cielo",
    name: "Halcón",
    scientificName: "Falco sparverius",
    tag: "Ave Rapaz • Consumidor Secundario",
    reserve: "Reserva Villa Cielo",
    description:
      "Desde las alturas, regula poblaciones de roedores e insectos, manteniendo sano el ecosistema.",
    juniorDescription:
      "¡El vigilante del bosque! Tiene una vista de superhéroe desde lo alto.",
    curiosity:
      "Su visión es hasta 8 veces más aguda que la humana, detectando presas a metros de distancia.",
    juniorCuriosity:
      "¡Tiene súper zoom natural para ver bichitos desde el cielo!",
    rewardText: "Respondé el desafío final para abrir el Regalo #3 y completar la colección.",
    totalSteps: 3,
  },
];

export const SCAN_DATA = {
  title: "Escanear especie",
  subtitle: "Apuntá la cámara al código QR del cartel",
  woodenSign: {
    title: "Conocé más",
    subtitle: "sobre esta especie",
    description: "Escaneá el código QR y descubrí su importancia en nuestro ecosistema.",
    callToAction: "¡Escaneá aquí!",
  },
  stations: STATIONS,
  discoveredSpecies: STATIONS[0],
};
