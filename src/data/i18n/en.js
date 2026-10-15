const en = {
  common: {
    back: 'Back',
    backHome: 'Back to home',
    close: 'Close',
    continue: 'Continue',
    retry: 'Try again',
    cancel: 'Cancel',
    logout: 'Log out',
    logoutConfirm: 'Yes, log out',
    logoutTitle: 'Log out?',
    logoutMessage:
      'You will return to the start screen. Your progress is kept on this device.',
  },
  theme: {
    day: 'Day',
    night: 'Night',
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
  },
  a11y: {
    enable: 'Enable larger, bold text (A+)',
    disable: 'Disable larger text',
    active: 'Reading Mode Active (A+)',
    inactive: 'Enlarge and Bold Text (A+)',
  },
  nav: {
    home: 'Home',
    scan: 'Scan QR',
    library: 'Collection',
    ariaNav: 'Floating main navigation',
    ariaLibrary: 'Collection and Library',
  },
  register: {
    languageLabel: 'Language',
    title: 'Join the community',
    subtitle:
      'Create your account to save your progress and explore the reserve food web.',
    fullNameLabel: 'Full name',
    ageLabel: 'How old are you?',
    submit: 'Continue',
    google: 'Sign in with Google',
    errors: {
      fullNameRequired: 'Full name is required',
      fullNameShort: 'Name must be at least 2 characters long',
      ageRequired: 'Enter your age',
      ageInvalid: 'Enter a valid age',
    },
    googleSoon: 'Google Sign-In feature will be available soon.',
  },
  profile: {
    title: 'My profile',
    backAria: 'Back',
    subtitle: 'Explorer details',
    nameLabel: 'Name',
    ageLabel: 'Age',
    years: '{n} years old',
    undefinedValue: 'Not set',
    rankLabel: 'Rank',
    progressTitle: 'Your progress',
    cardsLabel: 'Unlocked cards',
    giftsLabel: 'Unlocked gifts',
    giftsValue: '{n} of 3',
    sessionTitle: 'Session',
    sessionDescription:
      'Log out and return to the start screen. Your progress is kept on this device.',
    goRegister: 'Complete registration',
  },
  home: {
    greeting: 'Hi, welcome',
    juniorGreeting: 'Hi, explorer!',
    fireSafetyLabel: 'SOS Fires',
    fireSafetyAria: 'Fire prevention and emergency protocol',
    characterCard: {
      title: 'Collect the reserve characters',
      juniorTitle: 'Unlock the 3 secret gifts!',
      buttonText: 'Start playing',
      juniorButtonText: 'Go find QR codes!',
      unlockedAria: 'Unlocked characters',
      rewardOpenAria: 'Open reward {n}',
      rewardOpenedAria: 'View claimed reward {n}',
      rewardLockedAria: 'Reward {n} locked',
    },
    didYouKnowCard: {
      title: 'Did you know...?',
      description:
        'The molle is a nurse tree: its shade protects orchids, bromeliads and young ferns in the forest.',
      juniorDescription:
        'The molle is like an umbrella! Its shade protects orchids and small ferns from the strong sun.',
    },
  },
  scan: {
    title: 'Scan species',
    subtitle: 'Point the camera at the sign QR code',
    backAria: 'Back to home',
    statusScanning: 'Scanning...',
    statusDetected: 'QR Detected!',
    stationOf: 'Station {current} of {total}',
    cameraToggleTitle: 'Switch between simulation photo and webcam',
    cameraModeSimulation: 'Simulation',
    cameraModeLive: 'Camera',
    selectStationAria: 'Select a route QR station',
    stationButton: 'Station {step}: {name}',
    completed: 'Completed',
    triggerScanAria: 'Scan QR code',
    triggerScanTitle: 'Tap to scan',
    scanHintJunior: 'Tap the camera to read the QR sign!',
    scanHintAdult: 'Press to scan the selected station',
    discoveredFallback: 'Species discovered',
    stationShort: 'St. {step}/{total}',
    giftAvailable: 'Gift #{n} available',
    playToWinGift: 'Play to win your gift!',
    answerTrivia: 'Answer the Station Trivia',
    playGame: '🎯 Play and Win a Gift!',
    chooseAnother: 'Choose another QR station',
    scannerScanning: 'Scanning QR code...',
    scannerSuccess: 'QR code detected successfully!',
    scannerIdle: 'Center the QR code in the frame and press the camera',
    woodenSign: {
      title: 'Learn more',
      subtitle: 'about this species',
      description:
        'Scan the QR code and discover its importance in our ecosystem.',
      callToAction: 'Scan here!',
      scanTitle: 'Press to simulate scanning',
    },
    stations: {
      molle: {
        name: 'Molle Tree',
        stationLabel: 'Station 1: Native Forest',
        tag: 'Nurse Tree • Producer',
        description:
          'Protective tree that gives shade and shelter to orchids, bromeliads and ferns of the hillside forest.',
        juniorDescription:
          'The great Nurse Tree! It gives shade and a little home to many tiny plants and birds.',
        curiosity:
          'Its sweet and spicy fruits (pink pepper) feed dozens of local birds.',
        juniorCuriosity:
          'Its little red fruits look like candies and the birds love them!',
        rewardText: 'Beat the trivia to win Gift #1 and new cards.',
      },
      carpincho: {
        name: 'Capybara',
        stationLabel: 'Station 2: Wetland Trail',
        tag: 'Herbivore • Primary Consumer',
        description:
          'The largest rodent in the world lives in wetlands. It links producers with the rest of the food web.',
        juniorDescription:
          'The great wetland swimmer! It eats grass near the water and is super friendly.',
        curiosity:
          'Its eyes, ears and nose are aligned at the top to see and breathe while almost submerged.',
        juniorCuriosity:
          'It can stay underwater leaving only its nose out, like a submarine!',
        rewardText: 'Beat the trivia to unlock Gift #2 and add more consumers.',
      },
      halcon: {
        name: 'Falcon',
        stationLabel: 'Station 3: Sky Viewpoint',
        tag: 'Bird of Prey • Secondary Consumer',
        description:
          'From above, it regulates rodent and insect populations, keeping the ecosystem healthy.',
        juniorDescription:
          'The forest watchman! It has superhero eyesight from up high.',
        curiosity:
          'Its vision is up to 8 times sharper than a human’s, spotting prey from meters away.',
        juniorCuriosity:
          'It has a natural super zoom to see little bugs from the sky!',
        rewardText:
          'Complete the final challenge to open Gift #3 and finish the collection.',
      },
    },
  },
  trivia: {
    title: 'Trivia: Food Webs',
    subtitle: 'Test your knowledge about the ecosystem',
    closeAria: 'Close and go back home',
    questionCounter: 'Question {current} of {total}',
    timerAria: 'Time left to answer',
    timeUp: 'Time is up! Look at the correct answer:',
    correctTitle: 'Correct answer!',
    timeUpTitle: 'Let’s learn together:',
    wrongTitle: 'Almost! Here’s how it works in the reserve:',
    next: 'Next question →',
    seeResult: 'See final result',
    completed: {
      unlockedBadge: '{n}/3 Gifts unlocked',
      retryTitle: 'Try again!',
      score: 'You got {score} of {total} questions right.',
      needMore:
        'You need to get at least {min} of {total} questions right to win the prize. Try again!',
      goOpenGift: '🎁 Go open my gift!',
      seeProgress: 'See my progress on Home',
      retry: 'Try again',
      repeat: 'Play the trivia again',
      backHome: 'Back to home',
    },
    reward: {
      title: 'Great job!',
      juniorTitle: 'You’re an Awesome Ranger! 🌟',
      subtitle: 'You completed the food web trivia',
      characterUnlocked: 'New prize unlocked',
      message:
        'Knowledge unlocked! You can now open your gift on Home and check your new cards in the Collection.',
      juniorMessage:
        'You won a new gift! Go back to Home and tap the surprise box to see which characters you unlocked.',
    },
    questions: {
      q1: {
        imageAlt: 'Sunflowers in a field',
        question: 'Which organism usually starts a food chain?',
        juniorQuestion:
          'Who are the first ones to make energy using the sun?',
        options: ['Secondary consumer', 'Decomposer', 'Producer (Plants)', 'Predator'],
        explanation:
          'Producers (like trees, shrubs and sunflowers) capture sunlight through photosynthesis and generate the initial energy of the food web.',
        juniorExplanation:
          'Exactly! Plants are the Producers: they use sunlight and water to make their own food and feed the forest.',
      },
      q2: {
        imageAlt: 'Herbivorous organisms',
        question:
          'What place do herbivores (like the Capybara) occupy in the food chain?',
        juniorQuestion:
          'The Capybara eats grass and leaves. What is its group called?',
        options: [
          'Primary consumer',
          'Secondary producer',
          'Decomposer',
          'Apex predator',
        ],
        explanation:
          'Herbivores feed directly on plants (producers), acting as primary consumers.',
        juniorExplanation:
          'Well done! Since the Capybara eats plants, it is a Primary Consumer (the first little animal in the chain).',
      },
      q3: {
        imageAlt: 'Decomposing fungi and bacteria',
        question:
          'What vital role do decomposing fungi play and what care prevents fires?',
        juniorQuestion:
          'What do forest fungi do, and how do we protect the reserve from fire?',
        options: [
          'Hunt animals and light campfires',
          'Recycle nutrients into the soil and never make fire or leave glass',
          'Make nectar and leave bottles in the sun',
          'Pollinate flowers and burn dry leaves',
        ],
        explanation:
          'Fungi recycle organic matter, returning nutrients to the soil. Also, making fire or leaving glass is forbidden in the reserve to prevent forest fires.',
        juniorExplanation:
          'Great! Fungi clean the forest by turning dry leaves into fertile soil, and we care for the reserve by not making fire or littering.',
      },
    },
  },
  juniorGames: {
    hubTitle: 'Play Zone!',
    hubSubtitle: 'Pick a game to complete the station',
    stationBadge: 'Station {n}',
    play: 'Play',
    back: 'Back',
    backHome: 'Back to home',
    chooseAnother: 'Choose another QR station',
    memorama: {
      title: 'Reserve Memory',
      short: 'Find the matching pairs',
      description: 'Find the matching pairs of reserve animals!',
      moves: 'Moves: {n}',
      pairs: 'Pairs: {found}/{total}',
      winTitle: 'You found all the pairs!',
      winMessage: 'Great memory! You unlocked the station gift.',
      ariaCard: 'Card {n}',
      ariaFlipped: 'Card {n}: {name}',
      ariaHidden: 'Card {n} face down',
    },
    comparison: {
      title: 'Who is it?',
      short: 'Choose the correct animal',
      description: 'Look at the two photos and choose the correct answer.',
      questionCounter: 'Question {current} of {total}',
      correctTitle: 'Well done!',
      wrongTitle: 'Almost!',
      next: 'Next →',
      seeResult: 'See result',
      winTitle: 'You completed the challenge!',
      winMessage: 'You’re a great explorer! You unlocked the gift.',
      retry: 'Play again',
      chooseAria: 'Choose {name}',
      questions: {
        q1: {
          prompt: 'Which of these makes its own food from sunlight?',
          optionA: 'Molle Tree',
          optionB: 'Capybara',
          correct: 'a',
          explanation:
            'The Molle is a producer: it uses sunlight to make its food.',
        },
        q2: {
          prompt: 'Which is the largest rodent and swims in the wetland?',
          optionA: 'Falcon',
          optionB: 'Capybara',
          correct: 'b',
          explanation:
            'The Capybara is the largest rodent in the world and lives near water.',
        },
        q3: {
          prompt: 'Which flies high and has superhero eyesight?',
          optionA: 'Falcon',
          optionB: 'Molle Tree',
          correct: 'a',
          explanation:
            'The Falcon watches everything from the sky with its super sharp eyes.',
        },
      },
    },
    completed: {
      unlockedBadge: 'Gift unlocked!',
      message:
        'Go back to Home to open your gift or check your new cards in the Collection.',
      goHome: '🎁 Go open my gift!',
      seeCollection: 'View in Collection',
    },
  },
  library: {
    guest: 'Guest Explorer',
    cardsCount: '{n}/{total} cards',
    register: '• Sign up',
    ranks: {
      master: 'Master Ranger',
      wetland: 'Wetland Explorer',
      starter: 'Beginner Explorer',
      curious: 'Curious Visitor',
    },
    tabs: {
      fichas: 'Cards ({n}/{total})',
      network: 'Food web',
      sectionsAria: 'Library sections',
    },
    fichas: {
      lockedTitle: '{name} is locked',
      goQr: 'Go to QR',
      openCard: '{name}, open card',
      lockedHintAria: '{name}, locked (tap for a hint)',
    },
    card: {
      helpsForest: 'How does it help the forest?',
      contributesNetwork: 'What does it contribute to the food web?',
      eats: 'It feeds on...',
      closeAria: 'Close card',
      category: {
        productor: 'Producer',
        consumidor: 'Consumer',
      },
    },
    rewards: {
      r1: {
        name: 'Molle Tree and Forest Birds',
        badge: 'Prize 1 of 3 • Station 1',
        description:
          'You unlocked the native forest species that grow and shelter next to the Molle tree!',
        unlockedSpecies: ['Molle Tree', 'Insectivorous bird', 'Mountain shrub'],
      },
      r2: {
        name: 'Capybara and Fruit Shrub',
        badge: 'Prize 2 of 3 • Station 2',
        description:
          'You unlocked the wetland inhabitants and their favorite plants!',
        unlockedSpecies: ['Capybara', 'Fruit shrub'],
      },
      r3: {
        name: 'Falcon and Woodpecker',
        badge: 'Prize 3 of 3 • Station 3',
        description:
          'You completed all 3 stations! Now you have all the birds and guardians of Villa Cielo.',
        unlockedSpecies: ['Falcon', 'Woodpecker'],
      },
    },
    rewardModal: {
      newSheets: 'New cards:',
      viewCollection: 'View in Collection',
      continue: 'Continue',
      closeAria: 'Close prize',
    },
    trophic: {
      title: 'Food web',
      instruction: 'Tap an organism to explore its connections in the web.',
      instructionJunior: 'Tap a living being to see how it connects with others.',
      layers: {
        tertiary: 'Tertiary consumers',
        secondary: 'Secondary consumers',
        primary: 'Primary consumers',
        producer: 'Producers',
      },
      organism: 'Organism',
      feedsOn: 'Feeds on:',
      foodOf: 'Is food for:',
      close: 'Close',
      closeAria: 'Close organism information',
      exploreAria: 'Explore connections of {name}',
      groupAria: 'Food web: the arrows connect food and consumers',
      nodes: {
        molle: 'Molle Tree',
        'fruiting-shrub': 'Fruit shrub',
        'wetland-plants': 'Grasses and aquatic plants',
        insects: 'Insects and larvae',
        carpincho: 'Capybara',
        'ave-insectivora': 'Insectivorous bird',
        carpintero: 'Woodpecker',
        'small-prey': 'Rodents and reptiles',
        halcon: 'Falcon',
      },
    },
    cards: {
      molle: {
        name: 'Molle Tree',
        unlockHint: 'Unlocked from the start of your route.',
        description:
          'Native tree with a leafy crown, aromatic leaves and hanging branches, essential as a refuge for biodiversity.',
        juniorDescription:
          'It’s the great guardian tree of the reserve. With its long branches it makes a giant umbrella to protect other plants and birds.',
        contribution:
          'Acts as a nurse tree: its shade protects young plants and its fruits feed wildlife.',
        juniorContribution:
          'It gives shelter and food to the little birds and protects baby plants from the strong sun.',
        diet: 'It makes its own food through photosynthesis using sunlight, water and soil nutrients.',
        juniorDiet:
          'It makes its own food using the sun’s energy, rainwater and fertile soil!',
      },
      'ave-insectivora': {
        name: 'Insectivorous bird',
        unlockHint:
          'Scan Station 1 (Molle Tree) and beat the trivia to unlock it.',
        description:
          'Bird with a strong, slender beak that searches for insects and larvae in tree bark.',
        juniorDescription:
          'A super curious little bird that roams the branches looking for bugs hidden in the bark.',
        contribution:
          'Naturally controls insect populations, favoring the health of the forest trees.',
        juniorContribution:
          'It takes care of the trees by eating the insects that could harm their leaves.',
        diet: 'It feeds mainly on insects, seeds and larvae found on trunks.',
        juniorDiet: 'It eats little bugs, caterpillars and tree seeds.',
      },
      'arbusto-serrano': {
        name: 'Mountain shrub',
        unlockHint:
          'Scan Station 1 (Molle Tree) and beat the trivia to unlock it.',
        description:
          'Native woody plant that blooms on hillsides, protecting soils from erosion.',
        juniorDescription:
          'A short, bushy plant that works as a secret hideout for small animals.',
        contribution:
          'Provides shelter and food for pollinating insects, birds and small mammals.',
        juniorContribution:
          'It’s the favorite shelter of butterflies, crickets and birds when they want to rest.',
        diet: 'It makes its own food using sunlight, water and soil minerals.',
        juniorDiet: 'It uses the sun and water from the earth to grow green and strong.',
      },
      carpincho: {
        name: 'Capybara',
        unlockHint:
          'Scan Station 2 (Wetland Trail) on the QR reader to unlock it.',
        description:
          'The largest rodent in the world; it lives near water and usually moves in family groups.',
        juniorDescription:
          'The biggest and friendliest rodent! It loves to swim with its family and sunbathe on the shore.',
        contribution:
          'Transfers plant energy to carnivores and keeps riverside grasslands short.',
        juniorContribution:
          'It trims the grass naturally and helps new little plants grow near the water.',
        diet: 'It’s herbivorous: it eats grasses, aquatic plants and wild fruits.',
        juniorDiet: 'It’s vegetarian: it eats tender grass, herbs and water plants.',
      },
      'arbusto-frutal': {
        name: 'Fruit shrub',
        unlockHint:
          'Scan Station 2 (Wetland Trail) on the QR reader to unlock it.',
        description:
          'Native shrub with round, sweet fruits, highly sought after by the reserve’s birds and mammals.',
        juniorDescription:
          'The natural supermarket of the forest! It gives sweet little fruits that feed birds and mammals.',
        contribution:
          'Its flowers and fruits feed dozens of organisms and sustain the wetland food web.',
        juniorContribution:
          'Its fruits give lots of energy to the animals that roam the reserve.',
        diet: 'It makes its own food through photosynthesis from solar energy.',
        juniorDiet: 'It grows thanks to the sun’s energy and soil minerals.',
      },
      halcon: {
        name: 'Falcon',
        unlockHint:
          'Scan Station 3 (Sky Viewpoint) on the QR reader to unlock it.',
        description:
          'Bird of prey that watches the surroundings from above and helps keep the natural balance.',
        juniorDescription:
          'The guardian of the sky: it flies super fast and has an amazing view from up high.',
        contribution:
          'Regulates rodent and reptile populations, occupying the secondary consumer level.',
        juniorContribution:
          'It keeps the ecosystem balanced at the very top of the food chain.',
        diet: 'It feeds on small animals, such as rodents, reptiles and small birds.',
        juniorDiet: 'It’s carnivorous: it feeds on other, smaller forest animals.',
      },
      carpintero: {
        name: 'Woodpecker',
        unlockHint:
          'Scan Station 3 (Sky Viewpoint) on the QR reader to unlock it.',
        description:
          'Bird with striking plumage and a chisel-like beak that looks for larvae and insects in dry trunks.',
        juniorDescription:
          'The forest builder! It taps the trunks "knock-knock" with its strong beak to make little holes.',
        contribution:
          'Consumes wood insects and creates cavities that later serve as nests for other species.',
        juniorContribution:
          'The little holes it makes in trees later become homes for other birds.',
        diet: 'It feeds on wood-boring insects and larvae that live inside the wood.',
        juniorDiet: 'It eats larvae, ants and bugs that live inside the trunks.',
      },
      espinillo: {
        name: 'Espinillo',
        unlockHint:
          'Scan Station 3 (Sky Viewpoint) on the QR reader to unlock it.',
        description:
          'Spiny tree or shrub typical of the Córdoba forest, famous for its aromatic golden flowers.',
        juniorDescription:
          'It has twigs with thorns and yellow pom-poms with a delicious scent that attracts bees.',
        contribution:
          'Fixes nitrogen into the soil, enriching it, and offers impenetrable shelter to small birds.',
        juniorContribution:
          'It improves the forest soil and its thorns protect the nests of small birds.',
        diet: 'It makes its own food from the sun and fixes atmospheric nutrients into the soil.',
        juniorDiet:
          'It takes sunlight and helps enrich the soil of the reserve.',
      },
    },
  },
  fireSafety: {
    buttonLabel: 'SOS Fires',
    modalTitle: 'Prevention and Emergencies',
    juniorModalTitle: 'Fire Brigade! 🚒',
    juniorIntro:
      'If you see smoke or fire, move away. Don’t try to put it out and tell an adult.',
    adultIntro:
      'Fire can spread fast in the forest. Don’t try to put it out: move away and alert others.',
    juniorSteps: [
      'Move away from the smoke and fire.',
      'Tell an adult and call the Fire Department (100).',
      'If it’s safe, help other people move away.',
    ],
    adultSteps: [
      'Protect: Move away from the fire and smoke along a safe path.',
      'Alert: Call the Fire Department (100) and report the nearest QR station.',
      'Rescue: Help other people only if you don’t get close to the fire.',
    ],
    preventionRules: [
      'Don’t light fires or use heaters.',
      'Don’t throw cigarette butts or glass.',
      'Take your trash with you.',
    ],
    emergencyContacts: [
      { label: 'Volunteer Firefighters', number: '100' },
      { label: 'Civil Defense', number: '103' },
      { label: 'Police Emergencies', number: '911' },
    ],
    anteIncendio: 'In case of fire',
    protocolTitle: 'What to do step by step',
    preventionTitle: 'Caring for the Reserve',
    contactsTitle: 'Emergency lines',
    contactsIntro: 'Tap a contact to start a direct call.',
    footer: 'Caring for the reserve is everyone’s responsibility.',
  },
};

export default en;
