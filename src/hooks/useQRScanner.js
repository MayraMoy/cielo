import { useState, useEffect, useRef, useCallback } from 'react';
import { SCAN_DATA } from '../data/scanData';

export function useQRScanner(onScanSuccess) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'scanning' | 'success'
  const [cameraMode, setCameraMode] = useState('simulation'); // 'simulation' | 'live'
  const [scannedData, setScannedData] = useState(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Reproducir un pitido sutil de escáner exitoso (Web Audio API)
  const playBeep = useCallback(() => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime); // Nota La5 (880Hz)
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.18);
      }
    } catch {
      // Ignorar si el navegador bloquea audio sin interacción previa
    }
  }, []);

  // Función para disparar la detección del código QR solo al hacer clic en la cámara
  const triggerScan = useCallback(() => {
    if (status === 'scanning' || status === 'success') return;
    setStatus('scanning');

    // Simula lectura activa del QR por 900ms con láser y efecto visual
    setTimeout(() => {
      playBeep();
      setStatus('success');
      setScannedData(SCAN_DATA.discoveredSpecies);
      if (onScanSuccess) {
        onScanSuccess(SCAN_DATA.discoveredSpecies);
      }
    }, 900);
  }, [status, playBeep, onScanSuccess]);

  // Manejo de cámara real (Webcam / Celular)
  useEffect(() => {
    if (cameraMode === 'live') {
      navigator.mediaDevices?.getUserMedia?.({
        video: { facingMode: 'environment' },
        audio: false,
      })
        .then((stream) => {
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.warn('No se pudo acceder a la cámara en vivo:', err);
          setCameraMode('simulation');
        });
    } else {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      }
    }

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, [cameraMode]);

  // Reiniciar escáner si fuera necesario
  const resetScan = () => {
    setScannedData(null);
    setStatus('idle');
  };

  const toggleCameraMode = () => {
    setCameraMode((prev) => (prev === 'simulation' ? 'live' : 'simulation'));
  };

  return {
    status,
    scannedData,
    cameraMode,
    videoRef,
    triggerScan,
    resetScan,
    toggleCameraMode,
  };
}
