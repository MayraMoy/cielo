export const REWARD_PROGRESS_KEY = 'cielo_unlocked_characters';
export const COMPLETED_STATIONS_KEY = 'cielo_completed_stations';

export function getUnlockedCharacters() {
  try {
    const stored = Number(localStorage.getItem(REWARD_PROGRESS_KEY));
    return Number.isInteger(stored) && stored > 0 ? Math.min(stored, 3) : 0;
  } catch (error) {
    console.error('Error al leer el progreso de personajes:', error);
    return 0;
  }
}

export function getCompletedStations() {
  try {
    const raw = localStorage.getItem(COMPLETED_STATIONS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function unlockCharacterByStation(stationStep = 1) {
  try {
    const currentUnlocked = getUnlockedCharacters();
    const completed = getCompletedStations();
    const stepNum = Number(stationStep) || 1;

    if (!completed.includes(stepNum)) {
      completed.push(stepNum);
      localStorage.setItem(COMPLETED_STATIONS_KEY, JSON.stringify(completed));
    }

    const nextCount = Math.min(3, Math.max(currentUnlocked, stepNum, completed.length));
    localStorage.setItem(REWARD_PROGRESS_KEY, String(nextCount));
    return nextCount;
  } catch (error) {
    console.error('Error al guardar el personaje desbloqueado:', error);
    return getUnlockedCharacters();
  }
}

export function unlockFirstCharacter() {
  return unlockCharacterByStation(1);
}

export const OPENED_REWARDS_KEY = 'cielo_opened_rewards';

export function getOpenedRewards() {
  try {
    const raw = localStorage.getItem(OPENED_REWARDS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function markRewardAsOpened(rewardIndex = 0) {
  try {
    const opened = getOpenedRewards();
    const idx = Number(rewardIndex);
    if (!opened.includes(idx)) {
      opened.push(idx);
      localStorage.setItem(OPENED_REWARDS_KEY, JSON.stringify(opened));
    }
    return opened;
  } catch (error) {
    console.error('Error al guardar regalo abierto:', error);
    return getOpenedRewards();
  }
}
