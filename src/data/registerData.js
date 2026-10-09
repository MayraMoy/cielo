export const REGISTER_DATA = {
  title: "Unite a la comunidad",
  subtitle: "Crea tu cuenta para guardar tu avance y explorar la red trófica de la reserva.",
  fields: {
    fullName: {
      label: "Nombre completo",
      name: "fullName",
      placeholder: "",
      type: "text",
    },
    age: {
      label: "¿Cuántos años tenés?",
      name: "age",
      placeholder: "",
      type: "number",
      min: 1,
      max: 120,
    }
  },
  submitButtonText: "Continuar",
  googleLoginText: "Inicia Sesion con Google",
};
