import { useCallback, useEffect, useState } from 'react';
import { useLanguage } from './useLanguage';
import { getCompletedStations } from '../data/rewardProgress';

export function useQRScanner() {
  const { content } = useLanguage();
  const { stations, discoveredSpecies } = content.scan;
  const [status, setStatus] = useState('scanning');
  const [scannedData, setScannedData] = useState(null);
  const [completedStations, setCompletedStations] = useState(getCompletedStations);
  useEffect(() => {
    if (status !== 'scanning') return undefined;

    const completed = getCompletedStations();
    const nextStation = stations.find((station) => !completed.includes(station.step));
    const timer = setTimeout(() => {
      setScannedData(nextStation || discoveredSpecies);
      try {
        localStorage.setItem('cielo_last_scanned_station', JSON.stringify(nextStation || discoveredSpecies));
      } catch {
        // Scanning still works if browser storage is unavailable.
      }
      setCompletedStations(completed);
      setStatus('success');
    }, 1800);

    return () => clearTimeout(timer);
  }, [status, stations, discoveredSpecies]);

  const resetScan = useCallback(() => {
    setScannedData(null);
    setStatus('idle');
  }, []);

  return {
    status,
    scannedData,
    stations,
    completedStations,
    resetScan,
  };
}
