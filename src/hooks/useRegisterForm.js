import { useState } from 'react';
import { useLanguage } from './useLanguage';

export function useRegisterForm(onSubmitSuccess) {
  const { t } = useLanguage();
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
      newErrors.fullName = t('register.errors.fullNameRequired');
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = t('register.errors.fullNameShort');
    }

    if (!formData.age) {
      newErrors.age = t('register.errors.ageRequired');
    } else {
      const ageNum = parseInt(formData.age, 10);
      if (isNaN(ageNum) || ageNum <= 0 || ageNum > 120) {
        newErrors.age = t('register.errors.ageInvalid');
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
    alert(t('register.googleSoon'));
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
