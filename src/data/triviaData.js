import girasolesImg from '../assets/girasoles.jpg';
import carpinchoImg from '../assets/carpincho.jpg';
import hongosImg from '../assets/hongos.jpg';

export const TRIVIA_DATA = {
  title: "Trivia: Redes Tróficas",
  subtitle: "Pon a prueba tus conocimientos sobre el ecosistema",
  timePerQuestion: 15, // Segundos para responder cada pregunta
  minimumCorrectAnswers: 2,
  questions: [
    {
      id: 1,
      image: girasolesImg,
      imageAlt: "Girasoles en el campo",
      question: "¿Qué organismo inicia generalmente una cadena trófica?",
      options: [
        "Consumidor secundario",
        "Descomponedor",
        "Productor",
        "Depredador",
      ],
      correctIndex: 2, // "Productor"
      explanation:
        "Los productores (como las plantas y girasoles) capturan la luz solar mediante la fotosíntesis y generan la energía inicial de la red trófica.",
    },
    {
      id: 2,
      image: carpinchoImg,
      imageAlt: "Organismos herbívoros",
      question: "¿Qué lugar ocupan los herbívoros en la cadena trófica?",
      options: [
        "Consumidor primario",
        "Productor secundario",
        "Descomponedor",
        "Depredador tope",
      ],
      correctIndex: 0, // "Consumidor primario"
      explanation:
        "Los herbívoros se alimentan directamente de los productores, actuando como consumidores primarios.",
    },
    {
      id: 3,
      image: hongosImg,
      imageAlt: "Hongos y bacterias descomponedoras",
      question: "¿Qué función vital cumplen los descomponedores en la reserva?",
      options: [
        "Cazar animales enfermos",
        "Reciclar nutrientes al suelo",
        "Producir néctar",
        "Polinizar las flores",
      ],
      correctIndex: 1, // "Reciclar nutrientes al suelo"
      explanation:
        "Los hongos y microorganismos descomponen la materia orgánica muerta, devolviendo minerales esenciales al suelo.",
    },
  ],
  reward: {
    title: "¡Excelente trabajo!",
    subtitle: "Has completado la trivia de redes tróficas",
    characterUnlocked: "1/3 Personajes desbloqueados",
    message: "¡Conocimiento desbloqueado! Ya puedes ver tu avance en el inicio.",
  },
};
