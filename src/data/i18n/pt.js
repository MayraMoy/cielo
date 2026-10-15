const pt = {
  common: {
    back: 'Voltar',
    backHome: 'Voltar ao início',
    close: 'Fechar',
    continue: 'Continuar',
    retry: 'Tentar novamente',
    cancel: 'Cancelar',
    logout: 'Sair',
    logoutConfirm: 'Sim, sair',
    logoutTitle: 'Sair da conta?',
    logoutMessage:
      'Você voltará para a tela inicial. Seu progresso é mantido neste dispositivo.',
  },
  theme: {
    day: 'Dia',
    night: 'Noite',
    toLight: 'Mudar para modo claro',
    toDark: 'Mudar para modo escuro',
  },
  a11y: {
    enable: 'Ativar texto maior e em negrito (A+)',
    disable: 'Desativar texto maior',
    active: 'Modo Leitura Ativo (A+)',
    inactive: 'Aumentar e Realçar Texto (A+)',
  },
  nav: {
    home: 'Início',
    scan: 'Escanear QR',
    library: 'Coleção',
    ariaNav: 'Navegação principal flutuante',
    ariaLibrary: 'Coleção e Biblioteca',
  },
  register: {
    languageLabel: 'Idioma',
    title: 'Junte-se à comunidade',
    subtitle:
      'Crie sua conta para salvar seu progresso e explorar a teia alimentar da reserva.',
    fullNameLabel: 'Nome completo',
    ageLabel: 'Quantos anos você tem?',
    submit: 'Continuar',
    google: 'Entrar com Google',
    errors: {
      fullNameRequired: 'O nome completo é obrigatório',
      fullNameShort: 'O nome deve ter pelo menos 2 caracteres',
      ageRequired: 'Informe sua idade',
      ageInvalid: 'Informe uma idade válida',
    },
    googleSoon: 'O recurso de login com Google estará disponível em breve.',
  },
  profile: {
    title: 'Meu perfil',
    backAria: 'Voltar',
    subtitle: 'Dados do explorador',
    nameLabel: 'Nome',
    ageLabel: 'Idade',
    years: '{n} anos',
    undefinedValue: 'Não definido',
    rankLabel: 'Nível',
    progressTitle: 'Seu progresso',
    cardsLabel: 'Cartas desbloqueadas',
    giftsLabel: 'Presentes desbloqueados',
    giftsValue: '{n} de 3',
    sessionTitle: 'Sessão',
    sessionDescription:
      'Saia da sua conta e volte para a tela inicial. Seu progresso é mantido neste dispositivo.',
    goRegister: 'Completar cadastro',
  },
  home: {
    greeting: 'Olá, bem-vindo',
    juniorGreeting: 'Olá, explorador!',
    fireSafetyLabel: 'SOS Incêndios',
    fireSafetyAria: 'Prevenção de incêndios e protocolo de emergência',
    characterCard: {
      title: 'Colecione os personagens da reserva',
      juniorTitle: 'Desbloqueie os 3 presentes secretos!',
      buttonText: 'Começar a jogar',
      juniorButtonText: 'Vá procurar QR!',
      unlockedAria: 'Personagens desbloqueados',
      rewardOpenAria: 'Abrir prêmio {n}',
      rewardOpenedAria: 'Ver prêmio {n} resgatado',
      rewardLockedAria: 'Prêmio {n} bloqueado',
    },
    didYouKnowCard: {
      title: 'Você sabia...?',
      description:
        'O molle é uma árvore-berçário: sua sombra protege orquídeas, bromélias e samambaias jovens da mata.',
      juniorDescription:
        'O molle é como um guarda-chuva! Sua sombra protege orquídeas e samambaias pequenas do sol forte.',
    },
  },
  scan: {
    title: 'Escanear espécie',
    subtitle: 'Aponte a câmera para o QR code da placa',
    backAria: 'Voltar ao início',
    statusScanning: 'Escaneando...',
    statusDetected: 'QR Detectado!',
    stationOf: 'Estação {current} de {total}',
    cameraToggleTitle: 'Alternar entre foto de simulação e webcam',
    cameraModeSimulation: 'Simulação',
    cameraModeLive: 'Câmera',
    selectStationAria: 'Selecionar estação QR do percurso',
    stationButton: 'Estação {step}: {name}',
    completed: 'Concluída',
    triggerScanAria: 'Escanear código QR',
    triggerScanTitle: 'Toque para escanear',
    scanHintJunior: 'Toque na câmera para ler a placa QR!',
    scanHintAdult: 'Pressione para escanear a estação selecionada',
    discoveredFallback: 'Espécie descoberta',
    stationShort: 'Est. {step}/{total}',
    giftAvailable: 'Presente #{n} disponível',
    playToWinGift: 'Jogue para ganhar seu presente!',
    answerTrivia: 'Responder a Trivia da Estação',
    playGame: '🎯 Jogar e Ganhar Presente!',
    chooseAnother: 'Escolher outra estação QR',
    scannerScanning: 'Escaneando código QR...',
    scannerSuccess: 'Código detectado com sucesso!',
    scannerIdle: 'Centralize o código QR no visor e pressione a câmera',
    woodenSign: {
      title: 'Saiba mais',
      subtitle: 'sobre esta espécie',
      description:
        'Escaneie o código QR e descubra sua importância no nosso ecossistema.',
      callToAction: 'Escaneie aqui!',
      scanTitle: 'Pressione para simular a leitura',
    },
    stations: {
      molle: {
        name: 'Árvore Molle',
        stationLabel: 'Estação 1: Mata Nativa',
        tag: 'Árvore-Berçário • Produtor',
        description:
          'Árvore protetora que dá sombra e abrigo a orquídeas, bromélias e samambaias da mata serrana.',
        juniorDescription:
          'A grande Árvore-Berçário! Dá sombra e casinha a muitas plantinhas e passarinhos.',
        curiosity:
          'Seus frutos doces e picantes (pimenta-rosa) alimentam dezenas de aves locais.',
        juniorCuriosity:
          'Suas frutinhas vermelhas parecem balas e os pássaros adoram!',
        rewardText: 'Passe a trivia para ganhar o Presente #1 e novas cartas.',
      },
      carpincho: {
        name: 'Capivara',
        stationLabel: 'Estação 2: Trilha da Área Úmida',
        tag: 'Herbívoro • Consumidor Primário',
        description:
          'O maior roedor do mundo vive em áreas úmidas. Conecta os produtores ao restante da teia alimentar.',
        juniorDescription:
          'O grande nadador da área úmida! Come capim perto da água e é super amigável.',
        curiosity:
          'Seus olhos, orelhas e nariz ficam alinhados no topo para ver e respirar quase submerso.',
        juniorCuriosity:
          'Pode ficar embaixo da água deixando só o nariz de fora, como um submarino!',
        rewardText:
          'Passe a trivia para desbloquear o Presente #2 e somar consumidores.',
      },
      halcon: {
        name: 'Falcão',
        stationLabel: 'Estação 3: Mirante do Céu',
        tag: 'Ave de Rapina • Consumidor Secundário',
        description:
          'Do alto, regula populações de roedores e insetos, mantendo o ecossistema saudável.',
        juniorDescription:
          'O vigia da floresta! Tem uma visão de super-herói lá do alto.',
        curiosity:
          'Sua visão é até 8 vezes mais aguçada que a humana, detectando presas a metros de distância.',
        juniorCuriosity:
          'Tem um super zoom natural para ver bichinhos do céu!',
        rewardText:
          'Complete o desafio final para abrir o Presente #3 e completar a coleção.',
      },
    },
  },
  trivia: {
    title: 'Trivia: Teias Alimentares',
    subtitle: 'Teste seus conhecimentos sobre o ecossistema',
    closeAria: 'Fechar e voltar ao início',
    questionCounter: 'Pergunta {current} de {total}',
    timerAria: 'Tempo restante para responder',
    timeUp: 'O tempo acabou! Veja a resposta correta:',
    correctTitle: 'Resposta correta!',
    timeUpTitle: 'Vamos aprender juntos:',
    wrongTitle: 'Quase! Veja como funciona na reserva:',
    next: 'Próxima pergunta →',
    seeResult: 'Ver resultado final',
    completed: {
      unlockedBadge: '{n}/3 Presentes desbloqueados',
      retryTitle: 'Tente novamente!',
      score: 'Você acertou {score} de {total} perguntas.',
      needMore:
        'Você precisa acertar pelo menos {min} de {total} perguntas para ganhar o prêmio. Tente novamente!',
      goOpenGift: '🎁 Ir abrir meu presente!',
      seeProgress: 'Ver meu progresso no Início',
      retry: 'Tentar novamente',
      repeat: 'Jogar a trivia novamente',
      backHome: 'Voltar ao início',
    },
    reward: {
      title: 'Excelente trabalho!',
      juniorTitle: 'Você é um Guarda-Parque Incrível! 🌟',
      subtitle: 'Você completou a trivia das teias alimentares',
      characterUnlocked: 'Novo prêmio desbloqueado',
      message:
        'Conhecimento desbloqueado! Agora você pode abrir seu presente no Início e conferir suas novas cartas na Coleção.',
      juniorMessage:
        'Você ganhou um novo presente! Volte ao Início e toque no pacote surpresa para ver quais personagens desbloqueou.',
    },
    questions: {
      q1: {
        imageAlt: 'Girassóis no campo',
        question: 'Qual organismo geralmente inicia uma cadeia alimentar?',
        juniorQuestion:
          'Quem são os primeiros a fabricar energia usando o sol?',
        options: [
          'Consumidor secundário',
          'Decompositor',
          'Produtor (Plantas)',
          'Predador',
        ],
        explanation:
          'Os produtores (como árvores, arbustos e girassóis) capturam a luz solar por meio da fotossíntese e geram a energia inicial da teia alimentar.',
        juniorExplanation:
          'Exato! As plantas são os Produtores: usam a luz do sol e a água para criar seu próprio alimento e alimentar a floresta.',
      },
      q2: {
        imageAlt: 'Organismos herbívoros',
        question:
          'Que lugar os herbívoros (como a Capivara) ocupam na cadeia alimentar?',
        juniorQuestion:
          'A Capivara come capim e folhas. Como se chama o seu grupo?',
        options: [
          'Consumidor primário',
          'Produtor secundário',
          'Decompositor',
          'Predador de topo',
        ],
        explanation:
          'Os herbívoros se alimentam diretamente das plantas (produtores), atuando como consumidores primários.',
        juniorExplanation:
          'Muito bem! Como a Capivara come plantas, é um Consumidor Primário (o primeiro animalzinho da cadeia).',
      },
      q3: {
        imageAlt: 'Fungos e bactérias decompositoras',
        question:
          'Qual função vital os fungos decompositores cumprem e qual cuidado evita incêndios?',
        juniorQuestion:
          'O que os fungos da floresta fazem e como cuidamos a reserva do fogo?',
        options: [
          'Caçar animais e acender fogueiras',
          'Reciclar nutrientes no solo e nunca fazer fogo nem jogar vidro',
          'Produzir néctar e deixar garrafas ao sol',
          'Polinizar flores e queimar folhas secas',
        ],
        explanation:
          'Os fungos reciclam a matéria orgânica devolvendo nutrientes ao solo. Além disso, é proibido fazer fogo ou deixar vidro na reserva para prevenir incêndios florestais.',
        juniorExplanation:
          'Genial! Os fungos limpam a floresta transformando folhas secas em terra fértil, e nós cuidamos da reserva sem fazer fogo nem jogar lixo.',
      },
    },
  },
  juniorGames: {
    hubTitle: 'Zona de Jogos!',
    hubSubtitle: 'Escolha um jogo para completar a estação',
    stationBadge: 'Estação {n}',
    play: 'Jogar',
    back: 'Voltar',
    backHome: 'Voltar ao início',
    chooseAnother: 'Escolher outra estação QR',
    memorama: {
      title: 'Memória da Reserva',
      short: 'Encontre os pares',
      description: 'Encontre os pares de animais da reserva!',
      moves: 'Jogadas: {n}',
      pairs: 'Pares: {found}/{total}',
      winTitle: 'Você encontrou todos os pares!',
      winMessage: 'Que memória boa! Você desbloqueou o presente da estação.',
      ariaCard: 'Carta {n}',
      ariaFlipped: 'Carta {n}: {name}',
      ariaHidden: 'Carta {n} virada para baixo',
    },
    comparison: {
      title: 'Quem é?',
      short: 'Escolha o animal correto',
      description: 'Olhe as duas fotos e escolha a resposta correta.',
      questionCounter: 'Pergunta {current} de {total}',
      correctTitle: 'Muito bem!',
      wrongTitle: 'Quase!',
      next: 'Próxima →',
      seeResult: 'Ver resultado',
      winTitle: 'Você completou o desafio!',
      winMessage: 'Você é um grande explorador! Desbloqueou o presente.',
      retry: 'Jogar novamente',
      chooseAria: 'Escolher {name}',
      questions: {
        q1: {
          prompt: 'Qual destes fabrica seu próprio alimento com a luz do sol?',
          optionA: 'Árvore Molle',
          optionB: 'Capivara',
          correct: 'a',
          explanation:
            'O Molle é um produtor: usa a luz do sol para fabricar seu alimento.',
        },
        q2: {
          prompt: 'Qual é o maior roedor e nada na área úmida?',
          optionA: 'Falcão',
          optionB: 'Capivara',
          correct: 'b',
          explanation:
            'A Capivara é o maior roedor do mundo e vive perto da água.',
        },
        q3: {
          prompt: 'Qual voa bem alto e tem visão de super-herói?',
          optionA: 'Falcão',
          optionB: 'Árvore Molle',
          correct: 'a',
          explanation:
            'O Falcão observa tudo do céu com sua visão super aguçada.',
        },
      },
    },
    completed: {
      unlockedBadge: 'Presente desbloqueado!',
      message:
        'Volte ao Início para abrir seu presente ou veja suas novas cartas na Coleção.',
      goHome: '🎁 Ir abrir meu presente!',
      seeCollection: 'Ver na Coleção',
    },
  },
  library: {
    guest: 'Explorador Convidado',
    cardsCount: '{n}/{total} cartas',
    register: '• Cadastrar-me',
    ranks: {
      master: 'Guarda-Parque Mestre',
      wetland: 'Explorador da Área Úmida',
      starter: 'Explorador Iniciante',
      curious: 'Visitante Curioso',
    },
    tabs: {
      fichas: 'Cartas ({n}/{total})',
      network: 'Teia alimentar',
      sectionsAria: 'Seções da biblioteca',
    },
    fichas: {
      lockedTitle: '{name} está bloqueada',
      goQr: 'Ir ao QR',
      openCard: '{name}, abrir carta',
      lockedHintAria: '{name}, bloqueada (toque para ver a dica)',
    },
    card: {
      helpsForest: 'Como ela ajuda a floresta?',
      contributesNetwork: 'O que ela contribui para a teia alimentar?',
      eats: 'Alimenta-se de...',
      closeAria: 'Fechar carta',
      category: {
        productor: 'Produtor',
        consumidor: 'Consumidor',
      },
    },
    rewards: {
      r1: {
        name: 'Árvore Molle e Aves da Mata',
        badge: 'Prêmio 1 de 3 • Estação 1',
        description:
          'Você desbloqueou as espécies da mata nativa que crescem e se abrigam junto à árvore Molle!',
        unlockedSpecies: ['Árvore Molle', 'Ave insetívora', 'Arbusto serrano'],
      },
      r2: {
        name: 'Capivara e Arbusto Frutífero',
        badge: 'Prêmio 2 de 3 • Estação 2',
        description:
          'Você desbloqueou os habitantes da área úmida e suas plantas favoritas!',
        unlockedSpecies: ['Capivara', 'Arbusto frutífero'],
      },
      r3: {
        name: 'Falcão e Pica-Pau',
        badge: 'Prêmio 3 de 3 • Estação 3',
        description:
          'Você completou as 3 estações! Agora tem todas as aves e guardiões de Villa Cielo.',
        unlockedSpecies: ['Falcão', 'Pica-Pau'],
      },
    },
    rewardModal: {
      newSheets: 'Cartas novas:',
      viewCollection: 'Ver na Coleção',
      continue: 'Continuar',
      closeAria: 'Fechar prêmio',
    },
    trophic: {
      title: 'Teia alimentar',
      instruction: 'Toque em um organismo para explorar suas conexões na teia.',
      instructionJunior:
        'Toque em um ser vivo para ver como ele se conecta com os outros.',
      layers: {
        tertiary: 'Consumidores terciários',
        secondary: 'Consumidores secundários',
        primary: 'Consumidores primários',
        producer: 'Produtores',
      },
      organism: 'Organismo',
      feedsOn: 'Alimenta-se de:',
      foodOf: 'É alimento de:',
      close: 'Fechar',
      closeAria: 'Fechar informações do organismo',
      exploreAria: 'Explorar conexões de {name}',
      groupAria: 'Teia alimentar: as setas conectam alimentos e consumidores',
      nodes: {
        molle: 'Árvore Molle',
        'fruiting-shrub': 'Arbusto frutífero',
        'wetland-plants': 'Capins e plantas aquáticas',
        insects: 'Insetos e larvas',
        carpincho: 'Capivara',
        'ave-insectivora': 'Ave insetívora',
        carpintero: 'Pica-Pau',
        'small-prey': 'Roedores e répteis',
        halcon: 'Falcão',
      },
    },
    cards: {
      molle: {
        name: 'Árvore Molle',
        unlockHint: 'Desbloqueada desde o início do seu percurso.',
        description:
          'Árvore nativa de copa frondosa, folhas aromáticas e galhos pendentes, fundamental como refúgio da biodiversidade.',
        juniorDescription:
          'É a grande árvore guardiã da reserva. Com seus galhos longos faz um guarda-chuva gigante para cuidar de outras plantas e pássaros.',
        contribution:
          'Atua como árvore-berçário: sua sombra protege plantas jovens e seus frutos alimentam a fauna silvestre.',
        juniorContribution:
          'Dá casa e comida aos passarinhos e protege do sol forte as plantinhas bebês.',
        diet: 'Produz seu próprio alimento por meio da fotossíntese, usando luz solar, água e nutrientes do solo.',
        juniorDiet:
          'Fabrica seu próprio alimento usando a energia do sol, água da chuva e terra fértil!',
      },
      'ave-insectivora': {
        name: 'Ave insetívora',
        unlockHint:
          'Escaneie a Estação 1 (Árvore Molle) e passe a trivia para desbloqueá-la.',
        description:
          'Ave de bico forte e alongado que busca insetos e larvas na casca das árvores.',
        juniorDescription:
          'Um passarinho super curioso que percorre os galhos procurando bichinhos escondidos na casca.',
        contribution:
          'Controla naturalmente as populações de insetos, favorecendo a saúde das árvores da floresta.',
        juniorContribution:
          'Cuida das árvores comendo os insetos que poderiam machucar suas folhas.',
        diet: 'Alimenta-se principalmente de insetos, sementes e larvas que encontra nos troncos.',
        juniorDiet: 'Come bichinhos pequenos, lagartas e sementes das árvores.',
      },
      'arbusto-serrano': {
        name: 'Arbusto serrano',
        unlockHint:
          'Escaneie a Estação 1 (Árvore Molle) e passe a trivia para desbloqueá-lo.',
        description:
          'Planta lenhosa nativa que floresce nas encostas serranas, protegendo o solo da erosão.',
        juniorDescription:
          'Uma planta baixinha e densa que funciona como esconderijo secreto para animais pequenos.',
        contribution:
          'Oferece abrigo e alimento a insetos polinizadores, aves e pequenos mamíferos.',
        juniorContribution:
          'É o abrigo favorito de borboletas, grilos e passarinhos quando querem descansar.',
        diet: 'Produz seu próprio alimento usando luz solar, água e minerais do solo.',
        juniorDiet: 'Usa o sol e a água da terra para crescer verde e forte.',
      },
      carpincho: {
        name: 'Capivara',
        unlockHint:
          'Escaneie a Estação 2 (Trilha da Área Úmida) no leitor QR para desbloqueá-la.',
        description:
          'O maior roedor do mundo; vive perto da água e costuma se deslocar em grupos familiares.',
        juniorDescription:
          'O maior e mais simpático roedor! Adora nadar em família e tomar sol na margem.',
        contribution:
          'Transfere a energia das plantas para os carnívoros e mantém os capinzais ribeirinhos curtos.',
        juniorContribution:
          'Corta o capim de forma natural e ajuda a nascer novas plantinhas perto da água.',
        diet: 'É herbívoro: come capins, plantas aquáticas e frutos silvestres.',
        juniorDiet:
          'É vegetariano: come capim tenro, ervas e plantas da água.',
      },
      'arbusto-frutal': {
        name: 'Arbusto frutífero',
        unlockHint:
          'Escaneie a Estação 2 (Trilha da Área Úmida) no leitor QR para desbloqueá-lo.',
        description:
          'Arbusto nativo com frutos arredondados e doces, muito cobiçados por aves e mamíferos da reserva.',
        juniorDescription:
          'O supermercado natural da floresta! Dá frutinhas doces que alimentam aves e mamíferos.',
        contribution:
          'Suas flores e frutos alimentam dezenas de organismos e sustentam a teia alimentar da área úmida.',
        juniorContribution:
          'Seus frutos dão muita energia aos animais que passeiam pela reserva.',
        diet: 'Produz seu próprio alimento por meio da fotossíntese a partir da energia solar.',
        juniorDiet: 'Cresce graças à energia do sol e aos minerais do solo.',
      },
      halcon: {
        name: 'Falcão',
        unlockHint:
          'Escaneie a Estação 3 (Mirante do Céu) no leitor QR para desbloqueá-lo.',
        description:
          'Ave de rapina que observa o ambiente do alto e ajuda a manter o equilíbrio natural.',
        juniorDescription:
          'O guardião do céu: voa rapidíssimo e tem uma visão incrível lá do alto.',
        contribution:
          'Regula as populações de roedores e répteis, ocupando o nível de consumidor secundário.',
        juniorContribution:
          'Mantém o equilíbrio do ecossistema no topo da cadeia alimentar.',
        diet: 'Alimenta-se de pequenos animais, como roedores, répteis e pequenas aves.',
        juniorDiet:
          'É carnívoro: alimenta-se de outros animais menores da mata.',
      },
      carpintero: {
        name: 'Pica-Pau',
        unlockHint:
          'Escaneie a Estação 3 (Mirante do Céu) no leitor QR para desbloqueá-lo.',
        description:
          'Ave de plumagem chamativa e bico cinzelador que busca larvas e insetos em troncos secos.',
        juniorDescription:
          'O construtor da floresta! Bate nos troncos "toc-toc" com seu bico forte para fazer buraquinhos.',
        contribution:
          'Consome insetos da madeira e cria cavidades que depois servem de ninho a outras espécies.',
        juniorContribution:
          'Os buraquinhos que faz nas árvores depois servem de casinha para outros pássaros.',
        diet: 'Alimenta-se de insetos xilófagos e larvas que vivem dentro da madeira.',
        juniorDiet:
          'Come larvas, formigas e bichinhos que vivem dentro dos troncos.',
      },
      espinillo: {
        name: 'Espinilho',
        unlockHint:
          'Escaneie a Estação 3 (Mirante do Céu) no leitor QR para desbloqueá-lo.',
        description:
          'Árvore ou arbusto espinhoso típico da mata de Córdoba, famoso por suas flores aromáticas douradas.',
        juniorDescription:
          'Tem galhos com espinhos e pompons amarelos com um perfume delicioso que atrai abelhas.',
        contribution:
          'Fixa nitrogênio no solo, enriquecendo-o, e oferece abrigo impenetrável a aves pequenas.',
        juniorContribution:
          'Melhora a terra da mata e seus espinhos protegem os ninhos dos pássaros pequenos.',
        diet: 'Produz seu próprio alimento a partir do sol e fixa nutrientes atmosféricos no solo.',
        juniorDiet:
          'Pega a luz do sol e ajuda a enriquecer a terra da reserva.',
      },
    },
  },
  fireSafety: {
    buttonLabel: 'SOS Incêndios',
    modalTitle: 'Prevenção e Emergências',
    juniorModalTitle: 'Brigada Contra o Fogo! 🚒',
    juniorIntro:
      'Se você vir fumaça ou fogo, afaste-se. Não tente apagar e avise um adulto.',
    adultIntro:
      'O fogo pode avançar rápido na mata. Não tente apagar: afaste-se e avise.',
    juniorSteps: [
      'Afaste-se da fumaça e do fogo.',
      'Avise um adulto e liguem para os Bombeiros (100).',
      'Se for seguro, ajude outras pessoas a se afastarem.',
    ],
    adultSteps: [
      'Proteger: Afaste-se do fogo e da fumaça por um caminho seguro.',
      'Avisar: Ligue para os Bombeiros (100) e informe a estação QR mais próxima.',
      'Socorrer: Ajude outras pessoas só se não se aproximar do fogo.',
    ],
    preventionRules: [
      'Não acenda fogo nem use aquecedores.',
      'Não jogue bitucas nem vidros.',
      'Leve seu lixo com você.',
    ],
    emergencyContacts: [
      { label: 'Bombeiros Voluntários', number: '100' },
      { label: 'Defesa Civil', number: '103' },
      { label: 'Emergências Policiais', number: '911' },
    ],
    anteIncendio: 'Diante de um incêndio',
    protocolTitle: 'O que fazer passo a passo',
    preventionTitle: 'Cuidado com a Reserva',
    contactsTitle: 'Linhas de emergência',
    contactsIntro: 'Toque em um contato para iniciar uma ligação direta.',
    footer: 'Cuidar da reserva é responsabilidade de todos.',
  },
};

export default pt;
