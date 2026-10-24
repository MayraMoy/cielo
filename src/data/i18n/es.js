const es = {
  common: {
    back: 'Volver',
    backHome: 'Volver al inicio',
    close: 'Cerrar',
    continue: 'Continuar',
    retry: 'Volver a intentar',
    cancel: 'Cancelar',
    logout: 'Cerrar sesión',
    logoutConfirm: 'Sí, cerrar sesión',
    logoutTitle: '¿Cerrar sesión?',
    logoutMessage:
      'Vas a volver a la pantalla de inicio. Tu progreso se conserva en este dispositivo.',
  },
  theme: {
    day: 'Día',
    night: 'Noche',
    toLight: 'Cambiar a modo claro',
    toDark: 'Cambiar a modo oscuro',
  },
  a11y: {
    enable: 'Activar texto agrandado y remarcado (A+)',
    disable: 'Desactivar texto agrandado',
    active: 'Modo Lectura Activo (A+)',
    inactive: 'Agrandar y Remarcar Texto (A+)',
  },
  nav: {
    home: 'Inicio',
    scan: 'Escanear QR',
    library: 'Colección',
    ariaNav: 'Navegación principal flotante',
    ariaLibrary: 'Colección y Biblioteca',
  },
  register: {
    languageLabel: 'Idioma',
    title: 'Unite a la comunidad',
    subtitle:
      'Crea tu cuenta para guardar tu avance y explorar la red trófica de la reserva.',
    fullNameLabel: 'Nombre completo',
    ageLabel: '¿Cuántos años tenés?',
    submit: 'Continuar',
    google: 'Inicia Sesion con Google',
    errors: {
      fullNameRequired: 'El nombre completo es requerido',
      fullNameShort: 'El nombre debe tener al menos 2 caracteres',
      ageRequired: 'Ingresa tu edad',
      ageInvalid: 'Ingresa una edad válida',
    },
    googleSoon:
      'Funcionalidad de Iniciar sesión con Google próximamente disponible.',
  },
  profile: {
    title: 'Mi perfil',
    backAria: 'Volver',
    subtitle: 'Datos del explorador',
    nameLabel: 'Nombre',
    ageLabel: 'Edad',
    years: '{n} años',
    undefinedValue: 'Sin definir',
    rankLabel: 'Rango',
    progressTitle: 'Tu progreso',
    cardsLabel: 'Fichas desbloqueadas',
    giftsLabel: 'Regalos desbloqueados',
    giftsValue: '{n} de 3',
    sessionTitle: 'Sesión',
    sessionDescription:
      'Cerrá tu sesión y volvé a la pantalla de inicio. Tu progreso se conserva en este dispositivo.',
    goRegister: 'Completar registro',
  },
  home: {
    greeting: 'Hola, bienvenido',
    juniorGreeting: '¡Hola, explorador!',
    fireSafetyLabel: 'SOS Incendios',
    fireSafetyAria: 'Prevención de incendios y protocolo de emergencias',
    characterCard: {
      progress: "Regalos desbloqueados",
      count: "{n} de {total}",
      gift: "Regalo {n}",
      locked: "Bloqueado",
      available: "¡Abrir!",
      claimed: "Abierto",
      hint: "Escaneá un QR y completá su desafío para ganar un regalo.",
      juniorHint: "¡Buscá un QR, jugá y ganá un regalo!",
      completeHint: "¡Completaste el recorrido! Abrí tus regalos y descubrí tu colección.",
      lockedHint: "Para abrirlo, escaneá el QR de la estación {n} y completá su desafío.",
      juniorLockedHint: "¡Este regalo te espera! Buscá el QR {n} y ganá el juego.",
      continueButton: "Continuar explorando",
      collectionButton: "Ver mi colección",
      title: "Descubrí tus recompensas",
      juniorTitle: '¡Destrabá los 3 regalos secretos!',
      buttonText: "Escanear mi primer QR",
      juniorButtonText: '¡Ir a buscar QR!',
      unlockedAria: 'Personajes desbloqueados',
      rewardOpenAria: 'Abrir premio {n}',
      rewardOpenedAria: 'Ver premio {n} reclamado',
      rewardLockedAria: 'Premio {n} bloqueado',
    },
    didYouKnowCard: {
      title: '¿Sabías que...?',
      description:
        'El molle es un árbol nodriza: su sombra protege a orquídeas, bromelias y helechos jóvenes del monte.',
      juniorDescription:
        '¡El molle es como un paraguas! Su sombra protege a orquídeas y helechos pequeños del sol fuerte.',
    },
  },
  scan: {
    title: 'Escanear especie',
    subtitle: 'Apuntá la cámara al código QR del cartel',
    backAria: 'Volver al inicio',
    statusScanning: 'Escaneando...',
    statusDetected: '¡QR Detectado!',
    stationOf: 'Estación {current} de {total}',
    cameraToggleTitle: 'Alternar entre foto de simulación y cámara web',
    cameraModeSimulation: 'Simulación',
    cameraModeLive: 'Cámara',
    selectStationAria: 'Seleccionar estación QR del recorrido',
    stationButton: 'Estación {step}: {name}',
    completed: 'Completada',
    triggerScanAria: 'Escanear código QR',
    triggerScanTitle: 'Toca para escanear',
    scanHintJunior: '¡Tocá la cámara para leer el cartel QR!',
    scanHintAdult: 'Presiona para escanear la estación seleccionada',
    discoveredFallback: 'Especie descubierta',
    stationShort: 'Est. {step}/{total}',
    giftAvailable: 'Regalo #{n} disponible',
    playToWinGift: '¡Jugá para ganar tu regalo!',
    answerTrivia: 'Responder Trivia de la Estación',
    playGame: '🎯 ¡Jugar y Ganar Regalo!',
    chooseAnother: 'Elegir otra estación QR',
    scannerScanning: 'Escaneando código QR...',
    scannerSuccess: '¡Código detectado con éxito!',
    scannerIdle: 'Centra el código QR en el visor y presiona la cámara',
    woodenSign: {
      title: 'Conocé más',
      subtitle: 'sobre esta especie',
      description:
        'Escaneá el código QR y descubrí su importancia en nuestro ecosistema.',
      callToAction: '¡Escaneá aquí!',
      scanTitle: 'Presiona para simular escaneo',
    },
    stations: {
      molle: {
        name: 'Árbol Molle',
        stationLabel: 'Estación 1: Monte Nativo',
        tag: 'Árbol Nodriza • Productor',
        description:
          'Árbol protector que da sombra y refugio a orquídeas, bromelias y helechos del monte serrano.',
        juniorDescription:
          '¡El gran Árbol Nodriza! Da sombra y casita a muchas plantas chiquitas y pajaritos.',
        curiosity:
          'Sus frutos dulces y picantes (pimienta rosa) alimentan a decenas de aves locales.',
        juniorCuriosity:
          '¡Sus frutitas rojas parecen confites y a los pájaros les encantan!',
        rewardText:
          'Superá la trivia para ganar el Regalo #1 y nuevas fichas.',
      },
      carpincho: {
        name: 'Carpincho',
        stationLabel: 'Estación 2: Sendero del Humedal',
        tag: 'Herbívoro • Consumidor Primario',
        description:
          'El roedor más grande del mundo habita zonas húmedas. Conecta a los productores con el resto de la red trófica.',
        juniorDescription:
          '¡El gran nadador del humedal! Come pastito cerca del agua y es súper amigable.',
        curiosity:
          'Sus ojos, orejas y nariz están alineados arriba para ver y respirar casi sumergido.',
        juniorCuriosity:
          '¡Puede quedarse bajo el agua dejando solo la nariz como un submarino!',
        rewardText:
          'Superá la trivia para destrabar el Regalo #2 y sumar consumidores.',
      },
      halcon: {
        name: 'Halcón',
        stationLabel: 'Estación 3: Mirador del Cielo',
        tag: 'Ave Rapaz • Consumidor Secundario',
        description:
          'Desde las alturas, regula poblaciones de roedores e insectos, manteniendo sano el ecosistema.',
        juniorDescription:
          '¡El vigilante del bosque! Tiene una vista de superhéroe desde lo alto.',
        curiosity:
          'Su visión es hasta 8 veces más aguda que la humana, detectando presas a metros de distancia.',
        juniorCuriosity:
          '¡Tiene súper zoom natural para ver bichitos desde el cielo!',
        rewardText:
          'Respondé el desafío final para abrir el Regalo #3 y completar la colección.',
      },
    },
  },
  trivia: {
    title: 'Trivia: Redes Tróficas',
    subtitle: 'Pon a prueba tus conocimientos sobre el ecosistema',
    closeAria: 'Cerrar y volver al inicio',
    questionCounter: 'Pregunta {current} de {total}',
    timerAria: 'Tiempo restante para responder',
    timeUp: '¡Se acabó el tiempo! Mirá la respuesta correcta:',
    correctTitle: '¡Respuesta correcta!',
    timeUpTitle: 'Aprendamos juntos:',
    wrongTitle: '¡Casi! Así funciona en la reserva:',
    next: 'Siguiente pregunta →',
    seeResult: 'Ver resultado final',
    completed: {
      unlockedBadge: '{n}/3 Regalos desbloqueados',
      retryTitle: '¡Inténtalo de nuevo!',
      score: 'Acertaste {score} de {total} preguntas.',
      needMore:
        'Necesitas acertar al menos {min} de {total} preguntas para ganar el premio. ¡Vuelve a intentarlo!',
      goOpenGift: '🎁 ¡Ir a abrir mi regalo!',
      seeProgress: 'Ver mi avance en el Inicio',
      retry: 'Volver a intentar',
      repeat: 'Repetir la trivia',
      backHome: 'Volver al inicio',
    },
    reward: {
      title: '¡Excelente trabajo!',
      juniorTitle: '¡Sos un Guardaparque Genial! 🌟',
      subtitle: 'Has completado la trivia de redes tróficas',
      characterUnlocked: 'Nuevo premio desbloqueado',
      message:
        '¡Conocimiento desbloqueado! Ya puedes abrir tu regalo en el Inicio y revisar tus nuevas fichas en la Colección.',
      juniorMessage:
        '¡Ganaste un nuevo regalo! Volvé al Inicio para tocar el paquete sorpresa y ver qué personajes destrabaste.',
    },
    questions: {
      q1: {
        imageAlt: 'Girasoles en el campo',
        question: '¿Qué organismo inicia generalmente una cadena trófica?',
        juniorQuestion:
          '¿Quiénes son los primeros en fabricar energía usando el sol?',
        options: [
          'Consumidor secundario',
          'Descomponedor',
          'Productor (Plantas)',
          'Depredador',
        ],
        explanation:
          'Los productores (como árboles, arbustos y girasoles) capturan la luz solar mediante la fotosíntesis y generan la energía inicial de la red trófica.',
        juniorExplanation:
          '¡Exacto! Las plantas son los Productores: usan la luz del sol y el agua para crear su propia comida y alimentar al bosque.',
      },
      q2: {
        imageAlt: 'Organismos herbívoros',
        question:
          '¿Qué lugar ocupan los herbívoros (como el Carpincho) en la cadena trófica?',
        juniorQuestion:
          'El Carpincho come pasto y hojas. ¿Cómo se llama su grupo?',
        options: [
          'Consumidor primario',
          'Productor secundario',
          'Descomponedor',
          'Depredador tope',
        ],
        explanation:
          'Los herbívoros se alimentan directamente de las plantas (productores), actuando como consumidores primarios.',
        juniorExplanation:
          '¡Muy bien! Como el Carpincho come plantas, es un Consumidor Primario (el primer animalito de la cadena).',
      },
      q3: {
        imageAlt: 'Hongos y bacterias descomponedoras',
        question:
          '¿Qué función vital cumplen los hongos descomponedores y qué cuidado evita incendios?',
        juniorQuestion:
          '¿Qué hacen los hongos del bosque y cómo cuidamos la reserva del fuego?',
        options: [
          'Cazar animales y encender fogatas',
          'Reciclar nutrientes al suelo y nunca hacer fuego ni tirar vidrios',
          'Producir néctar y dejar botellas al sol',
          'Polinizar flores y quemar hojas secas',
        ],
        explanation:
          'Los hongos reciclan la materia orgánica devolviendo nutrientes al suelo. Además, en la reserva está prohibido hacer fuego o dejar vidrios para prevenir incendios forestales.',
        juniorExplanation:
          '¡Genial! Los hongos limpian el bosque convirtiendo hojas secas en tierra fértil, y nosotros cuidamos la reserva sin hacer fuego ni tirar basura.',
      },
    },
  },
  juniorGames: {
    hubTitle: '¡Zona de juegos!',
    hubSubtitle: 'Elegí un juego para completar la estación',
    stationBadge: 'Estación {n}',
    play: 'Jugar',
    back: 'Volver',
    backHome: 'Volver al inicio',
    chooseAnother: 'Elegir otra estación QR',
    memorama: {
      title: 'Memorama de la Reserva',
      short: 'Encontrá las parejas',
      description: '¡Encontrá las parejas de animales de la reserva!',
      moves: 'Jugadas: {n}',
      pairs: 'Pares: {found}/{total}',
      winTitle: '¡Encontraste todos los pares!',
      winMessage: '¡Qué buena memoria! Desbloqueaste el regalo de la estación.',
      ariaCard: 'Carta {n}',
      ariaFlipped: 'Carta {n}: {name}',
      ariaHidden: 'Carta {n} boca abajo',
    },
    comparison: {
      title: '¿Quién es?',
      short: 'Elegí el animal correcto',
      description: 'Mirá las dos fotos y elegí la respuesta correcta.',
      questionCounter: 'Pregunta {current} de {total}',
      correctTitle: '¡Muy bien!',
      wrongTitle: '¡Casi!',
      next: 'Siguiente →',
      seeResult: 'Ver resultado',
      winTitle: '¡Completaste el desafío!',
      winMessage: '¡Sos un gran explorador! Desbloqueaste el regalo.',
      retry: 'Volver a jugar',
      chooseAria: 'Elegir {name}',
      questions: {
        q1: {
          prompt: '¿Cuál de estos fabrica su propio alimento con la luz del sol?',
          optionA: 'Árbol Molle',
          optionB: 'Carpincho',
          correct: 'a',
          explanation:
            'El Molle es un productor: usa la luz del sol para fabricar su comida.',
        },
        q2: {
          prompt: '¿Cuál es el roedor más grande y nada en el humedal?',
          optionA: 'Halcón',
          optionB: 'Carpincho',
          correct: 'b',
          explanation:
            'El Carpincho es el roedor más grande del mundo y vive cerca del agua.',
        },
        q3: {
          prompt: '¿Cuál vuela muy alto y tiene vista de superhéroe?',
          optionA: 'Halcón',
          optionB: 'Árbol Molle',
          correct: 'a',
          explanation:
            'El Halcón observa todo desde el cielo con su vista súper aguda.',
        },
      },
    },
    completed: {
      unlockedBadge: '¡Regalo desbloqueado!',
      message:
        'Volvé al Inicio para abrir tu regalo o mirá tus nuevas fichas en la Colección.',
      goHome: '🎁 ¡Ir a abrir mi regalo!',
      seeCollection: 'Ver en Colección',
    },
  },
  library: {
    guest: 'Explorador Invitado',
    cardsCount: '{n}/{total} fichas',
    register: '• Registrarme',
    ranks: {
      master: 'Guardaparque Maestro',
      wetland: 'Explorador del Humedal',
      starter: 'Explorador Inicial',
      curious: 'Visitante Curioso',
    },
    tabs: {
      fichas: 'Fichas ({n}/{total})',
      network: 'Red trófica',
      sectionsAria: 'Secciones de la biblioteca',
    },
    fichas: {
      lockedTitle: '{name} está bloqueada',
      goQr: 'Ir a QR',
      openCard: '{name}, abrir ficha',
      lockedHintAria: '{name}, bloqueada (toca para ver pista)',
    },
    card: {
      helpsForest: '¿Cómo ayuda al bosque?',
      contributesNetwork: '¿Qué aporta a la red trófica?',
      eats: 'Se alimenta de...',
      closeAria: 'Cerrar ficha',
      category: {
        productor: 'Productor',
        consumidor: 'Consumidor',
      },
    },
    rewards: {
      r1: {
        name: 'Árbol Molle y Aves del Monte',
        badge: 'Premio 1 de 3 • Estación 1',
        description:
          '¡Desbloqueaste las especies del bosque nativo que crecen y se refugian junto al árbol Molle!',
        unlockedSpecies: [
          'Árbol Molle',
          'Ave insectívora',
          'Arbusto serrano',
        ],
      },
      r2: {
        name: 'Carpincho y Arbusto Frutal',
        badge: 'Premio 2 de 3 • Estación 2',
        description:
          '¡Desbloqueaste a los habitantes del humedal y sus plantas favoritas!',
        unlockedSpecies: ['Carpincho', 'Arbusto frutal'],
      },
      r3: {
        name: 'Halcón y Pájaro Carpintero',
        badge: 'Premio 3 de 3 • Estación 3',
        description:
          '¡Completaste las 3 estaciones! Ya tienes todas las aves y guardianes de Villa Cielo.',
        unlockedSpecies: ['Halcón', 'Carpintero'],
      },
    },
    rewardModal: {
      newSheets: 'Fichas nuevas:',
      viewCollection: 'Ver en Colección',
      continue: 'Continuar',
      closeAria: 'Cerrar premio',
    },
    trophic: {
      title: 'Red trófica',
      instruction: 'Tocá un organismo para explorar sus conexiones con la red.',
      instructionJunior:
        'Tocá un ser vivo para ver cómo se conecta con los demás.',
      layers: {
        tertiary: 'Consumidores terciarios',
        secondary: 'Consumidores secundarios',
        primary: 'Consumidores primarios',
        producer: 'Productores',
      },
      organism: 'Organismo',
      feedsOn: 'Se alimenta de:',
      foodOf: 'Es alimento de:',
      close: 'Cerrar',
      closeAria: 'Cerrar información del organismo',
      exploreAria: 'Explorar conexiones de {name}',
      groupAria: 'Red trófica: las flechas conectan alimentos y consumidores',
      nodes: {
        molle: 'Árbol Molle',
        'fruiting-shrub': 'Arbusto frutal',
        'wetland-plants': 'Pastos y plantas acuáticas',
        insects: 'Insectos y larvas',
        carpincho: 'Carpincho',
        'ave-insectivora': 'Ave insectívora',
        carpintero: 'Pájaro carpintero',
        'small-prey': 'Roedores y reptiles',
        halcon: 'Halcón',
      },
    },
    cards: {
      molle: {
        name: 'Árbol Molle',
        unlockHint: 'Desbloqueada desde el inicio de tu recorrido.',
        description:
          'Árbol nativo de copa frondosa, hojas aromáticas y ramas colgantes, fundamental como refugio de biodiversidad.',
        juniorDescription:
          'Es el gran árbol guardián de la reserva. Con sus ramas largas hace una sombrilla gigante para cuidar a otras plantas y pájaros.',
        contribution:
          'Actúa como árbol nodriza: su sombra protege a plantas jóvenes y sus frutos alimentan a la fauna silvestre.',
        juniorContribution:
          'Les da casa y comida a los pajaritos y protege del sol fuerte a las plantitas bebés.',
        diet: 'Produce su propio alimento mediante fotosíntesis utilizando luz solar, agua y nutrientes del suelo.',
        juniorDiet:
          '¡Fabrica su propia comida usando la energía del sol, agua de lluvia y tierra fértil!',
      },
      'ave-insectivora': {
        name: 'Ave insectívora',
        unlockHint:
          'Escaneá la Estación 1 (Árbol Molle) y superá la trivia para desbloquearla.',
        description:
          'Ave de pico fuerte y estilizado que busca insectos y larvas entre la corteza de los árboles.',
        juniorDescription:
          'Un pajarito súper curioso que recorre las ramas buscando bichitos escondidos en la corteza.',
        contribution:
          'Controla naturalmente las poblaciones de insectos, favoreciendo la salud de los árboles del bosque.',
        juniorContribution:
          'Cuida a los árboles comiéndose los insectos que podrían lastimar sus hojas.',
        diet: 'Se alimenta principalmente de insectos, semillas y larvas que encuentra en los troncos.',
        juniorDiet: 'Come bichitos pequeños, orugas y semillas de los árboles.',
      },
      'arbusto-serrano': {
        name: 'Arbusto serrano',
        unlockHint:
          'Escaneá la Estación 1 (Árbol Molle) y superá la trivia para desbloquearlo.',
        description:
          'Planta leñosa autóctona que florece en las laderas serranas, protegiendo los suelos de la erosión.',
        juniorDescription:
          'Una planta bajita y tupida que funciona como escondite secreto para animalitos pequeños.',
        contribution:
          'Aporta refugio y alimento a insectos polinizadores, aves y pequeños mamíferos.',
        juniorContribution:
          'Es el refugio favorito de mariposas, grillos y pajaritos cuando quieren descansar.',
        diet: 'Produce su propio alimento usando luz solar, agua y minerales del suelo.',
        juniorDiet:
          'Usa el sol y el agua de la tierra para crecer verde y fuerte.',
      },
      carpincho: {
        name: 'Carpincho',
        unlockHint:
          'Escaneá la Estación 2 (Sendero del Humedal) en el lector QR para desbloquearlo.',
        description:
          'El roedor más grande del mundo; vive cerca del agua y suele desplazarse en grupos familiares.',
        juniorDescription:
          '¡El roedor más grande y simpático! Le encanta nadar en familia y tomar sol en la orilla.',
        contribution:
          'Transfiere la energía de las plantas a los carnívoros y mantiene cortos los pastizales ribereños.',
        juniorContribution:
          'Corta el pasto de forma natural y ayuda a que crezcan nuevas plantitas cerca del agua.',
        diet: 'Es herbívoro: come pastos, plantas acuáticas y frutos silvestres.',
        juniorDiet:
          'Es vegetariano: come pastito tierno, hierbas y plantas del agua.',
      },
      'arbusto-frutal': {
        name: 'Arbusto frutal',
        unlockHint:
          'Escaneá la Estación 2 (Sendero del Humedal) en el lector QR para desbloquearlo.',
        description:
          'Arbusto nativo con frutos redondeados y dulces, muy codiciados por aves y mamíferos de la reserva.',
        juniorDescription:
          '¡El supermercado natural del bosque! Da frutitas dulces que alimentan a aves y mamíferos.',
        contribution:
          'Sus flores y frutos alimentan a decenas de organismos y sostienen la red trófica del humedal.',
        juniorContribution:
          'Sus frutas dan mucha energía a los animales que pasean por la reserva.',
        diet: 'Produce su propio alimento mediante fotosíntesis a partir de energía solar.',
        juniorDiet: 'Crece gracias a la energía del sol y los minerales del suelo.',
      },
      halcon: {
        name: 'Halcón',
        unlockHint:
          'Escaneá la Estación 3 (Mirador del Cielo) en el lector QR para desbloquearlo.',
        description:
          'Ave rapaz que observa el entorno desde las alturas y ayuda a mantener el equilibrio natural.',
        juniorDescription:
          'El guardián del cielo: vuela rapidísimo y tiene una vista increíble desde las alturas.',
        contribution:
          'Regula las poblaciones de roedores y reptiles, ocupando el nivel de consumidor secundario.',
        juniorContribution:
          'Mantiene el equilibrio del ecosistema en lo más alto de la cadena alimentaria.',
        diet: 'Se alimenta de pequeños animales, como roedores, reptiles y pequeñas aves.',
        juniorDiet:
          'Es carnívoro: se alimenta de otros animales más pequeños del monte.',
      },
      carpintero: {
        name: 'Pájaro Carpintero',
        unlockHint:
          'Escaneá la Estación 3 (Mirador del Cielo) en el lector QR para desbloquearlo.',
        description:
          'Ave de plumaje llamativo y pico cincelador que busca larvas e insectos en troncos secos.',
        juniorDescription:
          '¡El constructor del bosque! Golpea los troncos "toc-toc" con su pico fuerte para hacer huequitos.',
        contribution:
          'Consume insectos de la madera y crea cavidades que luego sirven de nido a otras especies.',
        juniorContribution:
          'Los huequitos que hace en los árboles después sirven como casita para otros pájaros.',
        diet: 'Se alimenta de insectos xilófagos y larvas que habitan dentro de la madera.',
        juniorDiet:
          'Come larvas, hormigas y bichitos que viven dentro de los troncos.',
      },
      espinillo: {
        name: 'Espinillo',
        unlockHint:
          'Escaneá la Estación 3 (Mirador del Cielo) en el lector QR para desbloquearlo.',
        description:
          'Árbol o arbusto espinoso característico del monte cordobés, famoso por sus flores aromáticas doradas.',
        juniorDescription:
          'Tiene ramitas con espinas y pompones amarillos con un perfume riquísimo que atrae abejas.',
        contribution:
          'Fija nitrógeno al suelo enriqueciéndolo y brinda refugio impenetrable a aves pequeñas.',
        juniorContribution:
          'Mejora la tierra del monte y sus espinas protegen los nidos de los pájaros pequeños.',
        diet: 'Produce su propio alimento a partir del sol y fija nutrientes atmosféricos al suelo.',
        juniorDiet:
          'Toma luz del sol y ayuda a enriquecer la tierra de la reserva.',
      },
    },
  },
  fireSafety: {
    buttonLabel: 'SOS Incendios',
    modalTitle: 'Prevención y Emergencias',
    juniorModalTitle: '¡Brigada Contra el Fuego! 🚒',
    juniorIntro:
      'Si ves humo o fuego, alejate. No intentes apagarlo y avisá a un adulto.',
    adultIntro:
      'El fuego puede avanzar rápido en el monte. No intentes apagarlo: alejate y avisá.',
    juniorSteps: [
      'Alejate del humo y del fuego.',
      'Avisá a un adulto y llamen a Bomberos (100).',
      'Si es seguro, ayudá a otras personas a alejarse.',
    ],
    adultSteps: [
      'Proteger: Alejate del fuego y del humo por un camino seguro.',
      'Avisar: Llamá a Bomberos (100) e indicá la estación QR más cercana.',
      'Socorrer: Ayudá a otras personas solo si no te acercás al fuego.',
    ],
    preventionRules: [
      'No enciendas fuego ni uses calentadores.',
      'No tires colillas ni vidrios.',
      'Llevate tus residuos.',
    ],
    emergencyContacts: [
      { label: 'Bomberos Voluntarios', number: '100' },
      { label: 'Defensa Civil', number: '103' },
      { label: 'Emergencias Policiales', number: '911' },
    ],
    anteIncendio: 'Ante un incendio',
    protocolTitle: 'Qué hacer paso a paso',
    preventionTitle: 'Cuidado de la Reserva',
    contactsTitle: 'Líneas de emergencia',
    contactsIntro: 'Tocá un contacto para iniciar una llamada directa.',
    footer: 'Cuidar la reserva es responsabilidad de todos.',
  },
};

export default es;
