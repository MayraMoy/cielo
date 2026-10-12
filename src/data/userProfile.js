export const USER_STORAGE_KEY = 'cielo_user';
export const MODE_OVERRIDE_KEY = 'cielo_experience_mode';

export function getStoredUser() {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      return {
        fullName: parsed.fullName?.trim() || '',
        age: parsed.age ? Number(parsed.age) : null,
      };
    }
    return null;
  } catch {
    return null;
  }
}

export function getExperienceMode() {
  try {
    const override = localStorage.getItem(MODE_OVERRIDE_KEY);
    if (override === 'junior' || override === 'adult') {
      return override;
    }
  } catch {
    // Ignore storage errors
  }

  const user = getStoredUser();
  if (user?.age && Number.isFinite(user.age)) {
    return user.age <= 12 ? 'junior' : 'adult';
  }

  return 'adult';
}

export function setExperienceModeOverride(mode) {
  try {
    if (mode === 'junior' || mode === 'adult') {
      localStorage.setItem(MODE_OVERRIDE_KEY, mode);
      window.dispatchEvent(new Event('cielo-mode-change'));
    } else {
      localStorage.removeItem(MODE_OVERRIDE_KEY);
      window.dispatchEvent(new Event('cielo-mode-change'));
    }
  } catch {
    // Ignore storage errors
  }
}
