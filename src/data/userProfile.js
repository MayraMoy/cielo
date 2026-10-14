export const USER_STORAGE_KEY = 'cielo_user';

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
  const user = getStoredUser();
  if (user?.age && Number.isFinite(user.age)) {
    return user.age <= 12 ? 'junior' : 'adult';
  }
  return 'adult';
}
