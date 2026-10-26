import { HOME_DATA } from '../homeData';
import { SCAN_DATA } from '../scanData';
import { TRIVIA_DATA } from '../triviaData';
import { REGISTER_DATA } from '../registerData';
import { LIBRARY_CARDS } from '../library/libraryCards';
import { REWARD_CHARACTERS } from '../library/rewardCharacters';
import { TROPHIC_NETWORK } from '../library/trophicNetwork';
import { getTranslations } from './index';

function buildFireSafety(tr) {
  const fs = tr.fireSafety || {};
  const base = HOME_DATA.fireSafety;
  return {
    buttonLabel: fs.buttonLabel ?? base.buttonLabel,
    modalTitle: fs.modalTitle ?? base.modalTitle,
    juniorModalTitle: fs.juniorModalTitle ?? base.juniorModalTitle,
    juniorIntro: fs.juniorIntro ?? base.juniorIntro,
    adultIntro: fs.adultIntro ?? base.adultIntro,
    juniorSteps: fs.juniorSteps ?? base.juniorSteps,
    adultSteps: fs.adultSteps ?? base.adultSteps,
    preventionRules: fs.preventionRules ?? base.preventionRules,
    emergencyContacts: fs.emergencyContacts ?? base.emergencyContacts,
    anteIncendio: fs.anteIncendio ?? 'Ante un incendio',
    protocolTitle: fs.protocolTitle ?? 'Qué hacer paso a paso',
    preventionTitle: fs.preventionTitle ?? 'Cuidado de la Reserva',
    contactsTitle: fs.contactsTitle ?? 'Líneas de emergencia',
    contactsIntro: fs.contactsIntro ?? 'Tocá un contacto para iniciar una llamada directa.',
    footer: fs.footer ?? 'Cuidar la reserva es responsabilidad de todos.',
  };
}

export function buildContent(lang) {
  const tr = getTranslations(lang);

  const fireSafety = buildFireSafety(tr);

  const h = tr.home || {};
  const home = {
    greeting: h.greeting ?? HOME_DATA.greeting,
    juniorGreeting: h.juniorGreeting ?? HOME_DATA.juniorGreeting,
    defaultUserName: HOME_DATA.defaultUserName,
    characterCard: {
      ...HOME_DATA.characterCard,
      ...(h.characterCard || {}),
    },
    didYouKnowCard: {
      ...HOME_DATA.didYouKnowCard,
      ...(h.didYouKnowCard || {}),
    },
    fireSafety,
  };

  const s = tr.scan || {};
  const stationImageById = new Map(
    LIBRARY_CARDS.map(({ id, image }) => [id, image]),
  );
  const stations = SCAN_DATA.stations.map((station) => ({
    ...station,
    ...((s.stations && s.stations[station.id]) || {}),
    image: stationImageById.get(station.id),
  }));
  const scan = {
    title: s.title ?? SCAN_DATA.title,
    subtitle: s.subtitle ?? SCAN_DATA.subtitle,
    woodenSign: { ...SCAN_DATA.woodenSign, ...(s.woodenSign || {}) },
    stations,
    discoveredSpecies: stations[0],
  };

  const tq = tr.trivia || {};
  const questions = TRIVIA_DATA.questions.map((question) => ({
    ...question,
    ...((tq.questions && tq.questions[`q${question.id}`]) || {}),
  }));
  const trivia = {
    title: tq.title ?? TRIVIA_DATA.title,
    subtitle: tq.subtitle ?? TRIVIA_DATA.subtitle,
    timePerQuestion: TRIVIA_DATA.timePerQuestion,
    juniorTimePerQuestion: TRIVIA_DATA.juniorTimePerQuestion,
    minimumCorrectAnswers: TRIVIA_DATA.minimumCorrectAnswers,
    questions,
    reward: { ...TRIVIA_DATA.reward, ...(tq.reward || {}) },
  };

  const r = tr.register || {};
  const register = {
    title: r.title ?? REGISTER_DATA.title,
    subtitle: r.subtitle ?? REGISTER_DATA.subtitle,
    submitButtonText: r.submit ?? REGISTER_DATA.submitButtonText,
    googleLoginText: r.google ?? REGISTER_DATA.googleLoginText,
    fields: {
      fullName: {
        ...REGISTER_DATA.fields.fullName,
        label: r.fullNameLabel ?? REGISTER_DATA.fields.fullName.label,
      },
      age: {
        ...REGISTER_DATA.fields.age,
        label: r.ageLabel ?? REGISTER_DATA.fields.age.label,
      },
    },
  };

  const l = tr.library || {};
  const lc = l.cards || {};
  const categoryLabels = (l.card && l.card.category) || {};
  const cards = LIBRARY_CARDS.map((card) => {
    const categoryId = card.trophicRole === 'producers' ? 'productor' : 'consumidor';
    return {
      ...card,
      ...(lc[card.id] || {}),
      categoryId,
      category: categoryLabels[categoryId] || card.category,
    };
  });

  const rewards = REWARD_CHARACTERS.map((reward) => {
    const text = (l.rewards && l.rewards[`r${reward.step}`]) || {};
    return {
      ...reward,
      name: text.name ?? reward.name,
      badge: text.badge ?? reward.badge,
      description: text.description ?? reward.description,
      unlockedSpeciesNames: text.unlockedSpecies ?? reward.unlockedSpeciesNames,
    };
  });

  const trophicTr = l.trophic || {};
  const trophic = {
    nodes: TROPHIC_NETWORK.nodes.map((node) => ({
      ...node,
      name: (trophicTr.nodes && trophicTr.nodes[node.id]) ?? node.name,
    })),
    links: TROPHIC_NETWORK.links,
  };

  const library = { cards, rewards, trophic };

  return { home, scan, trivia, register, library, fireSafety };
}
