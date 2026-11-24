import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, CircleAlert, CircleUserRound } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const COPY = {
  es: {
    signInTitle: 'Inicia sesión',
    signInSubtitle:
      'Usa tu cuenta de Google para continuar en Reserva Villa Cielo y guardar tu progreso.',
    emailLabel: 'Correo electrónico o teléfono',
    forgotEmail: '¿Has olvidado tu correo electrónico?',
    emailErrorEmpty: 'Introduce una dirección de correo electrónico o un número de teléfono',
    emailErrorInvalid: 'Introduce una dirección de correo electrónico válida',
    backToApp: 'Volver a Reserva Villa Cielo',
    next: 'Siguiente',
    welcomeTitle: 'Te damos la bienvenida',
    passwordLabel: 'Introduce tu contraseña',
    showPassword: 'Mostrar contraseña',
    passwordErrorEmpty: 'Introduce una contraseña',
    forgotPassword: '¿Has olvidado tu contraseña?',
    demoHint: 'Simulación de acceso: ingresá cualquier correo y contraseña para continuar.',
    signingIn: 'Verificando cuenta…',
  },
  en: {
    signInTitle: 'Sign in',
    signInSubtitle:
      'Use your Google Account to continue to Reserva Villa Cielo and save your progress.',
    emailLabel: 'Email or phone',
    forgotEmail: 'Forgot email?',
    emailErrorEmpty: 'Enter an email or phone number',
    emailErrorInvalid: 'Enter a valid email address',
    backToApp: 'Back to Reserva Villa Cielo',
    next: 'Next',
    welcomeTitle: 'Welcome',
    passwordLabel: 'Enter your password',
    showPassword: 'Show password',
    passwordErrorEmpty: 'Enter a password',
    forgotPassword: 'Forgot password?',
    demoHint: 'Simulated sign-in: enter any email and password to continue.',
    signingIn: 'Signing in…',
  },
  pt: {
    signInTitle: 'Fazer login',
    signInSubtitle:
      'Use sua Conta do Google para continuar na Reserva Villa Cielo e salvar seu progresso.',
    emailLabel: 'E-mail ou telefone',
    forgotEmail: 'Esqueceu seu e-mail?',
    emailErrorEmpty: 'Digite um e-mail ou número de telefone',
    emailErrorInvalid: 'Digite um endereço de e-mail válido',
    backToApp: 'Voltar para Reserva Villa Cielo',
    next: 'Avançar',
    welcomeTitle: 'Bem-vindo',
    passwordLabel: 'Digite sua senha',
    showPassword: 'Mostrar senha',
    passwordErrorEmpty: 'Digite uma senha',
    forgotPassword: 'Esqueceu a senha?',
    demoHint: 'Simulação de login: digite qualquer e-mail e senha para continuar.',
    signingIn: 'Verificando conta…',
  },
};

function GoogleWordmark() {
  return (
    <svg
      viewBox="0 0 272 92"
      className="h-[26px] w-auto select-none"
      role="img"
      aria-label="Google"
    >
      <path
        fill="#4285F4"
        d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      />
      <path
        fill="#EA4335"
        d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      />
      <path
        fill="#FBBC05"
        d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
      />
      <path fill="#4285F4" d="M225 3v65h-9.5V3h9.5z" />
      <path
        fill="#34A853"
        d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
      />
      <path
        fill="#EA4335"
        d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
      />
    </svg>
  );
}

function nameFromEmail(email) {
  const localPart = email.split('@')[0] || '';
  const lettersOnly = localPart.replace(/[^a-zA-ZÀ-ÿ]/g, '').slice(0, 5);

  if (!lettersOnly) return 'Explorador';

  return (
    lettersOnly.charAt(0).toUpperCase() + lettersOnly.slice(1).toLowerCase()
  );
}

export function GoogleAuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useLanguage();
  const copy = COPY[lang] || COPY.es;

  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [hint, setHint] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailNext = (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setError(copy.emailErrorEmpty);
      return;
    }
    if (!trimmed.includes('@') || !trimmed.includes('.')) {
      setError(copy.emailErrorInvalid);
      return;
    }
    setError('');
    setHint('');
    setStep('password');
  };

  const handlePasswordNext = (e) => {
    e.preventDefault();
    if (!password.trim()) {
      setError(copy.passwordErrorEmpty);
      return;
    }
    setError('');
    setHint('');
    setIsSubmitting(true);

    const draftName = location.state?.fullName?.trim();
    const draftAge = location.state?.age;
    const resolvedName = draftName || nameFromEmail(email.trim());
    const resolvedAge = draftAge ? Number(draftAge) : 24;

    window.setTimeout(() => {
      const userPayload = {
        fullName: resolvedName,
        age: resolvedAge,
        email: email.trim(),
        authProvider: 'google',
      };
      try {
        localStorage.setItem('cielo_user', JSON.stringify(userPayload));
      } catch (err) {
        console.error('Error al guardar usuario de Google:', err);
      }
      navigate('/home', {
        replace: true,
        state: { userName: resolvedName, age: resolvedAge },
      });
    }, 550);
  };

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between bg-white text-[#202124] px-6 pt-8 pb-7 font-sans">
      {/* Barra superior de progreso estilo Google */}
      {isSubmitting && (
        <div
          role="status"
          aria-label={copy.signingIn}
          className="absolute inset-x-0 top-0 h-1 overflow-hidden bg-[#E8F0FE]"
        >
          <div className="h-full w-2/3 animate-pulse bg-[#1A73E8]" />
        </div>
      )}

      {step === 'email' ? (
        <form
          onSubmit={handleEmailNext}
          noValidate
          className="flex flex-1 flex-col justify-between"
        >
          <div>
            <div className="flex flex-col items-center text-center">
              <GoogleWordmark />
              <h1 className="mt-4 text-[24px] font-normal tracking-tight text-[#202124]">
                {copy.signInTitle}
              </h1>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#202124] max-w-[310px]">
                {copy.signInSubtitle}
              </p>
            </div>

            <div className="mt-8">
              <div className="relative">
                <input
                  id="google-email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder=" "
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'google-email-error' : undefined}
                  className={`peer w-full rounded-[4px] border bg-white px-3.5 py-3.5 text-[15px] text-[#202124] outline-none transition-colors ${
                    error
                      ? 'border-[#D93025] focus:border-2 focus:border-[#D93025]'
                      : 'border-[#747775] focus:border-2 focus:border-[#1A73E8]'
                  }`}
                />
                <label
                  htmlFor="google-email"
                  className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-[15px] transition-all peer-focus:top-0 peer-focus:text-[12px] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[12px] ${
                    error
                      ? 'text-[#D93025]'
                      : 'text-[#5F6368] peer-focus:text-[#1A73E8]'
                  }`}
                >
                  {copy.emailLabel}
                </label>
              </div>

              {error && (
                <p
                  id="google-email-error"
                  role="alert"
                  className="mt-2 flex items-start gap-1.5 text-[12px] text-[#D93025]"
                >
                  <CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{error}</span>
                </p>
              )}

              <button
                type="button"
                onClick={() => setHint(copy.demoHint)}
                className="mt-2.5 text-[13.5px] font-medium text-[#1A73E8] hover:underline cursor-pointer"
              >
                {copy.forgotEmail}
              </button>

              {hint && (
                <p
                  role="status"
                  className="mt-3 rounded-lg bg-[#F1F3F4] px-3 py-2 text-[12.5px] text-[#3C4043]"
                >
                  {hint}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="inline-flex min-h-10 items-center rounded-md px-2 text-[13.5px] font-medium text-[#1A73E8] hover:bg-[#F6FAFE] cursor-pointer"
            >
              {copy.backToApp}
            </button>
            <button
              type="submit"
              className="inline-flex min-h-10 items-center justify-center rounded-[4px] bg-[#1A73E8] px-6 py-2 text-[14px] font-medium text-white shadow-xs hover:bg-[#1765CC] active:scale-[0.99] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A73E8]"
            >
              {copy.next}
            </button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={handlePasswordNext}
          noValidate
          className="flex flex-1 flex-col justify-between"
        >
          <div>
            <div className="flex flex-col items-center text-center">
              <GoogleWordmark />
              <h1 className="mt-4 text-[24px] font-normal tracking-tight text-[#202124]">
                {copy.welcomeTitle}
              </h1>

              <button
                type="button"
                onClick={() => {
                  setError('');
                  setHint('');
                  setStep('email');
                }}
                className="mt-3 inline-flex max-w-full items-center gap-2 rounded-full border border-[#DADCE0] bg-white px-3 py-1 text-[13.5px] font-medium text-[#3C4043] hover:bg-[#F8F9FA] cursor-pointer"
              >
                <CircleUserRound className="h-4 w-4 shrink-0 text-[#5F6368]" aria-hidden="true" />
                <span className="truncate">{email.trim()}</span>
                <ChevronDown className="h-3.5 w-3.5 shrink-0 text-[#5F6368]" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-8">
              <div className="relative">
                <input
                  id="google-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  autoFocus
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder=" "
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'google-password-error' : undefined}
                  className={`peer w-full rounded-[4px] border bg-white px-3.5 py-3.5 text-[15px] text-[#202124] outline-none transition-colors ${
                    error
                      ? 'border-[#D93025] focus:border-2 focus:border-[#D93025]'
                      : 'border-[#747775] focus:border-2 focus:border-[#1A73E8]'
                  }`}
                />
                <label
                  htmlFor="google-password"
                  className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-[15px] transition-all peer-focus:top-0 peer-focus:text-[12px] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[12px] ${
                    error
                      ? 'text-[#D93025]'
                      : 'text-[#5F6368] peer-focus:text-[#1A73E8]'
                  }`}
                >
                  {copy.passwordLabel}
                </label>
              </div>

              {error && (
                <p
                  id="google-password-error"
                  role="alert"
                  className="mt-2 flex items-start gap-1.5 text-[12px] text-[#D93025]"
                >
                  <CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{error}</span>
                </p>
              )}

              <label className="mt-3.5 inline-flex items-center gap-3 text-[14px] text-[#202124] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                  className="h-4 w-4 rounded-[2px] border-[#5F6368] accent-[#1A73E8] cursor-pointer"
                />
                <span>{copy.showPassword}</span>
              </label>

              {hint && (
                <p
                  role="status"
                  className="mt-3 rounded-lg bg-[#F1F3F4] px-3 py-2 text-[12.5px] text-[#3C4043]"
                >
                  {hint}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setHint(copy.demoHint)}
              className="inline-flex min-h-10 items-center rounded-md px-1 text-[13.5px] font-medium text-[#1A73E8] hover:underline cursor-pointer"
            >
              {copy.forgotPassword}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-10 items-center justify-center rounded-[4px] bg-[#1A73E8] px-6 py-2 text-[14px] font-medium text-white shadow-xs hover:bg-[#1765CC] disabled:opacity-70 active:scale-[0.99] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A73E8]"
            >
              {copy.next}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
