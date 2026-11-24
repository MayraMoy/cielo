export const REGISTER_DATA = {
  reserveLabel: "Reserva Natural",
  welcomePrefix: "Bienvenido a",
  title: "Reserva Villa Cielo",
  subtitle: "Explorá nuestra fauna, flora y red trófica.",
  fields: {
    fullName: {
      label: "Nombre completo",
      name: "fullName",
      placeholder: "Ej: Sofía Martínez",
      type: "text",
    },
    age: {
      label: "¿Cuántos años tenés?",
      name: "age",
      placeholder: "Ej: 24",
      helper: "Adaptamos los juegos y trivias a tu edad.",
      juniorHint: "Modo Junior: juegos visuales y pistas guiadas.",
      adultHint: "Modo Explorador: trivias y red trófica completa.",
      type: "number",
      min: 1,
      max: 120,
    }
  },
  submitButtonText: "Comenzar a explorar",
  dividerText: "o",
  googleLoginText: "Continuar con Google",
  googleHelperText: "Opcional: guardá y recuperá tu progreso.",
};
