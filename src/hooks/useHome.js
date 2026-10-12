import { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HOME_DATA } from '../data/homeData';
import { getUnlockedCharacters } from '../data/rewardProgress';

export function useHome() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [unlockedCharacters] = useState(getUnlockedCharacters);
  const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);
  const [selectedRewardIndex, setSelectedRewardIndex] = useState(0);
  const [isFireModalOpen, setIsFireModalOpen] = useState(false);

  // Obtiene el nombre del usuario desde location.state, localStorage o el valor por defecto
  const userName = useMemo(() => {
    if (location.state?.userName?.trim()) {
      return location.state.userName.trim();
    }

    try {
      const stored = localStorage.getItem('cielo_user');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.fullName?.trim()) {
          return parsed.fullName.trim();
        }
      }
    } catch {
      // Ignorar errores al parsear localStorage
    }

    return HOME_DATA.defaultUserName;
  }, [location.state]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'scan') {
      navigate('/scan');
    } else if (tabId === 'home') {
      navigate('/home');
    } else if (tabId === 'library') {
      navigate('/library');
    }
  };

  const handleStartGame = () => {
    navigate('/scan');
  };

  const handleScanQR = () => {
    navigate('/scan');
  };

  const handleOpenLibrary = () => {
    navigate('/library');
  };

  const handleOpenReward = (index = 0) => {
    setSelectedRewardIndex(index);
    setIsRewardModalOpen(true);
  };

  const handleCloseReward = () => {
    setIsRewardModalOpen(false);
  };

  const handleOpenFireModal = () => {
    setIsFireModalOpen(true);
  };

  const handleCloseFireModal = () => {
    setIsFireModalOpen(false);
  };

  const handleGoToRegister = () => {
    navigate('/register');
  };

  return {
    userName,
    activeTab,
    unlockedCharacters,
    isRewardModalOpen,
    selectedRewardIndex,
    isFireModalOpen,
    handleTabChange,
    handleStartGame,
    handleScanQR,
    handleOpenLibrary,
    handleOpenReward,
    handleCloseReward,
    handleOpenFireModal,
    handleCloseFireModal,
    handleGoToRegister,
  };
}
