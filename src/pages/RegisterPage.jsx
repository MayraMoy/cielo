import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import arbolHero from '../assets/arbol.jpg';
import { LanguageSelector } from '../components/common/LanguageSelector';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useRegisterForm } from '../hooks/useRegisterForm';
import { useLanguage } from '../hooks/useLanguage';
import { useAccessibility } from '../hooks/useAccessibility';

export function RegisterPage() {
  const navigate = useNavigate();
  const { t, content } = useLanguage();
  const { isLargeText, toggleLargeText } = useAccessibility();
  const REGISTER_DATA = content.register;

  const handleSuccess = (data) => {
    try {
      localStorage.setItem('cielo_user', JSON.stringify(data));
    } catch (e) {
      console.error('Error al guardar usuario en localStorage:', e);
    }
    navigate('/home', { state: { userName: data.fullName, age: data.age } });
  };

  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
  } = useRegisterForm(handleSuccess);

  const handleGoogleContinue = () => {
    navigate('/auth/google', {
      state: { fullName: formData.fullName, age: formData.age },
    });
  };

  return (
    <div className="w-full flex-1 flex flex-col bg-[var(--app-surface)]">
      {/* Cabecera botánica full-bleed con foto real de la reserva */}
      <section className="relative w-full min-h-[192px] overflow-hidden flex flex-col justify-between px-5 pt-3.5 pb-9">
        <img
          src={arbolHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#111907]/72 via-[#172209]/72 to-[#0E1505]/95"
        />

        {/* Controles de accesibilidad e idioma sobre el hero */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={toggleLargeText}
            aria-pressed={isLargeText}
            aria-label={isLargeText ? t('a11y.disable') : t('a11y.enable')}
            title={isLargeText ? t('a11y.active') : t('a11y.inactive')}
            className={`inline-flex h-11 min-w-11 items-center justify-center rounded-xl border px-2.5 text-[12.5px] font-extrabold tracking-tight transition-colors active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              isLargeText
                ? 'border-white bg-white text-[#232A0F]'
                : 'border-white/30 bg-black/55 text-white hover:bg-black/70'
            }`}
          >
            A+
          </button>
          <LanguageSelector variant="overlay" />
        </div>

        {/* Título con protagonismo en Villa Cielo */}
        <header className="relative z-10 mt-5">
          <h1 className="flex flex-col text-white">
            <span className="text-[15px] font-medium text-white/85 leading-tight mb-0.5">
              Reserva
            </span>
            <span className="text-[36px] font-extrabold leading-[1.02] tracking-[-0.03em]">
              Villa Cielo
            </span>
          </h1>
        </header>
      </section>

      {/* Hoja principal continua sobre el hero */}
      <main className="relative z-20 -mt-5 flex-1 flex flex-col rounded-t-[26px] bg-[var(--app-surface)] px-6 pt-5 pb-6">
        <form onSubmit={handleSubmit} noValidate>
          <Input
            label={REGISTER_DATA.fields.fullName.label}
            name={REGISTER_DATA.fields.fullName.name}
            type={REGISTER_DATA.fields.fullName.type}
            placeholder={REGISTER_DATA.fields.fullName.placeholder}
            autoComplete="name"
            required
            aria-required="true"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            containerClassName="mb-4"
          />

          <Input
            label={REGISTER_DATA.fields.age.label}
            name={REGISTER_DATA.fields.age.name}
            type={REGISTER_DATA.fields.age.type}
            inputMode="numeric"
            min={REGISTER_DATA.fields.age.min}
            max={REGISTER_DATA.fields.age.max}
            placeholder={REGISTER_DATA.fields.age.placeholder}
            helperText={REGISTER_DATA.fields.age.helper}
            required
            aria-required="true"
            value={formData.age}
            onChange={handleChange}
            error={errors.age}
            containerClassName="mb-5"
          />

          <Button
            type="submit"
            variant="primary"
            className="rounded-2xl py-3.5 bg-[var(--brand-olive)] hover:bg-[var(--brand-olive-hover)] shadow-[0_6px_14px_rgba(69,78,24,0.22)]"
          >
            <span>{REGISTER_DATA.submitButtonText}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </form>

        {/* Separador y acceso opcional con Google */}
        <div className="my-5 flex items-center gap-3" aria-hidden="true">
          <div className="h-px flex-1 bg-[#D2D8CA] dark:bg-[#3A4333]" />
          <span className="text-[12.5px] font-medium text-[#555B4B] dark:text-[#A9B19D]">
            {REGISTER_DATA.dividerText}
          </span>
          <div className="h-px flex-1 bg-[#D2D8CA] dark:bg-[#3A4333]" />
        </div>

        <Button
          type="button"
          variant="google"
          onClick={handleGoogleContinue}
          aria-describedby="google-helper"
          className="rounded-2xl py-3"
        >
          {REGISTER_DATA.googleLoginText}
        </Button>

        <p
          id="google-helper"
          className="mt-2 text-center text-[12.5px] text-[#555B4B] dark:text-[#A9B19D]"
        >
          {REGISTER_DATA.googleHelperText}
        </p>
      </main>
    </div>
  );
}
