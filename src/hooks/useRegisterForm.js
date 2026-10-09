import { useState } from 'react';

export function useRegisterForm(onSubmitSuccess) {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es requerido';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!formData.age) {
      newErrors.age = 'Ingresa tu edad';
    } else {
      const ageNum = parseInt(formData.age, 10);
      if (isNaN(ageNum) || ageNum <= 0 || ageNum > 120) {
        newErrors.age = 'Ingresa una edad válida';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      if (onSubmitSuccess) {
        onSubmitSuccess(formData);
      }
    }
  };

  const handleGoogleLogin = () => {
    console.log('Iniciar sesión con Google clickeado (sin implementar backend)');
    alert('Funcionalidad de Iniciar sesión con Google próximamente disponible.');
  };

  return {
    formData,
    errors,
    isSubmitted,
    handleChange,
    handleSubmit,
    handleGoogleLogin,
  };
}
