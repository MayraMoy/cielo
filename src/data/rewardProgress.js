export const REWARD_PROGRESS_KEY = 'cielo_unlocked_characters';

export function getUnlockedCharacters() {
  try {
    const stored = Number(localStorage.getItem(REWARD_PROGRESS_KEY));
    return Number.isInteger(stored) && stored > 0 ? stored : 0;
  } catch (error) {
    console.error('Error al leer el progreso de personajes:', error);
    return 0;
  }
}

export function unlockFirstCharacter() {
  try {
    const unlockedCharacters = getUnlockedCharacters();
    localStorage.setItem(REWARD_PROGRESS_KEY, String(Math.max(unlockedCharacters, 1)));
  } catch (error) {
    console.error('Error al guardar el personaje desbloqueado:', error);
  }
}
