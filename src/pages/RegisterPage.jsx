import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/common/Logo';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useRegisterForm } from '../hooks/useRegisterForm';
import { REGISTER_DATA } from '../data/registerData';

export function RegisterPage() {
  const navigate = useNavigate();

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
    handleGoogleLogin,
  } = useRegisterForm(handleSuccess);

  return (
    <div className="w-full flex-1 flex items-center justify-center p-3 py-6">
      <Card className="max-w-[340px] p-6 shadow-sm">
        <div>
          {/* Header: Logo + Title + Subtitle */}
          <div className="flex flex-col items-center text-center mb-7">
            <Logo className="w-16 h-16 mb-4" />
            <h1 className="text-[26px] font-semibold text-[#1A1C16] dark:text-[#F4F6ED] tracking-tight mb-2">
              {REGISTER_DATA.title}
            </h1>
            <p className="text-[14px] leading-relaxed text-[#666B5A] dark:text-[#B8BFAC] max-w-[320px]">
              {REGISTER_DATA.subtitle}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            <Input
              label={REGISTER_DATA.fields.fullName.label}
              name={REGISTER_DATA.fields.fullName.name}
              type={REGISTER_DATA.fields.fullName.type}
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              containerClassName="mb-5"
            />

            <Input
              label={REGISTER_DATA.fields.age.label}
              name={REGISTER_DATA.fields.age.name}
              type={REGISTER_DATA.fields.age.type}
              value={formData.age}
              onChange={handleChange}
              error={errors.age}
              className="w-20"
              containerClassName="mb-7"
            />

            <Button type="submit" variant="primary" className="mb-4">
              {REGISTER_DATA.submitButtonText}
            </Button>

            <div className="flex justify-center">
              <Button
                type="button"
                variant="google"
                onClick={handleGoogleLogin}
              >
                {REGISTER_DATA.googleLoginText}
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}
