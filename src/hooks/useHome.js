import { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from './useLanguage';
import { getUnlockedCharacters, getOpenedRewards, markRewardAsOpened } from '../data/rewardProgress';

export function useHome() {
  const location = useLocation();
  const navigate = useNavigate();
  const { content } = useLanguage();
  const [activeTab, setActiveTab] = useState('home');
  const [unlockedCharacters] = useState(getUnlockedCharacters);
  const [openedRewards, setOpenedRewards] = useState(getOpenedRewards);
  const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);
  const [selectedRewardIndex, setSelectedRewardIndex] = useState(0);
  const [lockedRewardIndex, setLockedRewardIndex] = useState(null);

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

    return content.home.defaultUserName;
  }, [location.state, content]);

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
    if (!Number.isInteger(index) || index < 0 || index >= content.home.characterCard.totalSteps) return;
    if (index >= unlockedCharacters) {
      setLockedRewardIndex(index);
      return;
    }
    setLockedRewardIndex(null);
    const updated = markRewardAsOpened(index);
    setOpenedRewards([...updated]);
    setSelectedRewardIndex(index);
    setIsRewardModalOpen(true);
  };

  const handleCloseReward = () => {
    setIsRewardModalOpen(false);
  };

  const handleOpenFireSafety = () => {
    navigate('/fire-safety');
  };

  const handleGoToRegister = () => {
    navigate('/register');
  };

  return {
    userName,
    activeTab,
    unlockedCharacters,
    openedRewards,
    isRewardModalOpen,
    selectedRewardIndex,
    lockedRewardIndex,
    handleDismissLockedReward: () => setLockedRewardIndex(null),
    handleTabChange,
    handleStartGame,
    handleScanQR,
    handleOpenLibrary,
    handleOpenReward,
    handleCloseReward,
    handleOpenFireSafety,
    handleGoToRegister,
  };
}
