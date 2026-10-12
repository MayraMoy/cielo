const STATIONS = [
  {
    step: 1,
    id: "molle",
    stationLabel: "Posta 1: Monte Nativo",
    name: "Molle",
    scientificName: "Schinus areira",
    tag: "Árbol Nodriza • Productor",
    reserve: "Reserva Villa Cielo",
    description:
      "Bajo la sombra y protección del Molle nacen y crecen orquídeas, bromelias y helechos que no podrían sobrevivir solos en el monte serrano.",
    juniorDescription:
      "¡Encontraste al gran Molle! Es un árbol súper protector que les da sombra y casita a muchas plantas chiquitas y pajaritos.",
    curiosity:
      "Sus frutos dulces y picantes son conocidos como pimienta rosa y alimentan a decenas de aves de la región.",
    juniorCuriosity:
      "¡Sus frutitas rojas parecen confites y a los pájaros de la reserva les encantan!",
    rewardText:
      "¡Superá la trivia de la Posta 1 para destrabar el Regalo #1 y nuevas fichas de flora y aves!",
    totalSteps: 3,
  },
  {
    step: 2,
    id: "carpincho",
    stationLabel: "Posta 2: Sendero del Humedal",
    name: "Carpincho",
    scientificName: "Hydrochoerus hydrochaeris",
    tag: "Herbívoro • Consumidor Primario",
    reserve: "Reserva Villa Cielo",
    description:
      "El roedor más grande del mundo habita las zonas bajas cercanas al agua. Al alimentarse de pastos y plantas acuáticas, conecta a los productores con el resto de la red trófica.",
    juniorDescription:
      "¡Descubriste la huella del Carpincho! Es un animal súper amigable que nada genial y come pastito cerca del agua.",
    curiosity:
      "Sus ojos, orejas y nariz están alineados en la parte alta de su cabeza para poder ver y respirar mientras nada casi sumergido.",
    juniorCuriosity:
      "¡Puede quedarse abajo del agua dejando solo la nariz y los ojos afuera como si fuera un submarino!",
    rewardText:
      "¡Superá la trivia de la Posta 2 para destrabar el Regalo #2 y sumar los consumidores a tu colección!",
    totalSteps: 3,
  },
  {
    step: 3,
    id: "halcon",
    stationLabel: "Posta 3: Mirador del Cielo",
    name: "Halcón",
    scientificName: "Falco sparverius",
    tag: "Ave Rapaz • Consumidor Secundario",
    reserve: "Reserva Villa Cielo",
    description:
      "Desde las copas más altas y barrancas de la reserva, el Halcón regula las poblaciones de roedores, insectos y pequeñas aves, manteniendo sano el ecosistema.",
    juniorDescription:
      "¡Llegaste al mirador del Halcón! Tiene una vista de superhéroe para vigilar todo el bosque desde arriba de los árboles.",
    curiosity:
      "Su visión es hasta 8 veces más aguda que la del ser humano, permitiéndole detectar presas a cientos de metros.",
    juniorCuriosity:
      "¡Sus ojos tienen un súper zoom natural: puede ver un bichito en el pasto desde lo más alto del cielo!",
    rewardText:
      "¡Respondé el desafío final de la Posta 3 para abrir el Regalo #3 y completar toda la colección de Villa Cielo!",
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
