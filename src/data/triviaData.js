import girasolesImg from '../assets/girasoles.jpg';
import carpinchoImg from '../assets/carpincho.jpg';
import hongosImg from '../assets/hongos.jpg';

export const TRIVIA_DATA = {
  title: "Trivia: Redes Tróficas",
  subtitle: "Pon a prueba tus conocimientos sobre el ecosistema",
  timePerQuestion: 15, // Segundos para adultos
  juniorTimePerQuestion: 22, // Más tiempo para niños (como Tomás, 10 años)
  minimumCorrectAnswers: 2,
  questions: [
    {
      id: 1,
      image: girasolesImg,
      imageAlt: "Girasoles en el campo",
      question: "¿Qué organismo inicia generalmente una cadena trófica?",
      juniorQuestion: "¿Quiénes son los primeros en fabricar energía usando el sol?",
      options: [
        "Consumidor secundario",
        "Descomponedor",
        "Productor (Plantas)",
        "Depredador",
      ],
      correctIndex: 2, // "Productor"
      explanation:
        "Los productores (como árboles, arbustos y girasoles) capturan la luz solar mediante la fotosíntesis y generan la energía inicial de la red trófica.",
      juniorExplanation:
        "¡Exacto! Las plantas son los Productores: usan la luz del sol y el agua para crear su propia comida y alimentar al bosque.",
    },
    {
      id: 2,
      image: carpinchoImg,
      imageAlt: "Organismos herbívoros",
      question: "¿Qué lugar ocupan los herbívoros (como el Carpincho) en la cadena trófica?",
      juniorQuestion: "El Carpincho come pasto y hojas. ¿Cómo se llama su grupo?",
      options: [
        "Consumidor primario",
        "Productor secundario",
        "Descomponedor",
        "Depredador tope",
      ],
      correctIndex: 0, // "Consumidor primario"
      explanation:
        "Los herbívoros se alimentan directamente de las plantas (productores), actuando como consumidores primarios.",
      juniorExplanation:
        "¡Muy bien! Como el Carpincho come plantas, es un Consumidor Primario (el primer animalito de la cadena).",
    },
    {
      id: 3,
      image: hongosImg,
      imageAlt: "Hongos y bacterias descomponedoras",
      question: "¿Qué función vital cumplen los hongos descomponedores y qué cuidado evita incendios?",
      juniorQuestion: "¿Qué hacen los hongos del bosque y cómo cuidamos la reserva del fuego?",
      options: [
        "Cazar animales y encender fogatas",
        "Reciclar nutrientes al suelo y nunca hacer fuego ni tirar vidrios",
        "Producir néctar y dejar botellas al sol",
        "Polinizar flores y quemar hojas secas",
      ],
      correctIndex: 1,
      explanation:
        "Los hongos reciclan la materia orgánica devolviendo nutrientes al suelo. Además, en la reserva está prohibido hacer fuego o dejar vidrios para prevenir incendios forestales.",
      juniorExplanation:
        "¡Genial! Los hongos limpian el bosque convirtiendo hojas secas en tierra fértil, y nosotros cuidamos la reserva sin hacer fuego ni tirar basura.",
    },
  ],
  reward: {
    title: "¡Excelente trabajo!",
    juniorTitle: "¡Sos un Guardaparque Genial! 🌟",
    subtitle: "Has completado la trivia de redes tróficas",
    characterUnlocked: "Nuevo premio desbloqueado",
    message: "¡Conocimiento desbloqueado! Ya puedes abrir tu regalo en el Inicio y revisar tus nuevas fichas en la Colección.",
    juniorMessage: "¡Ganaste un nuevo regalo! Volvé al Inicio para tocar el paquete sorpresa y ver qué personajes destrabaste.",
  },
};
