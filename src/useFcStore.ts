import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Card } from './typing';

export interface AppState {
  cards: Card[];
  updateReviseTime: (id: number, reviseTime: number) => void;
}
const initialCards: Card[] = [
  {
    id: 1,
    title: '洗冷水澡',
    desc: '当你洗冷水澡时，立刻促进血液循环，会让你瞬间充满能量。如果你反复这样做，它就会逐渐变成一种习惯。这会让你一直做下去，这也是建立自信的来源，你也开始真正去了了解自己。说到自信，我们往往试图从外界寻找自信，比如别人对我们的看法、我们给他人的印象。但最终，自信是来自内心的。给自己设定一些小目标，努力完成它们，享受挑战的过程，并时刻保持自律，这才是建立自信的关键。',
    answer:
      'when you take a cold shower, it instantly boost blood circulation, making you energised right away.',
    hint: '',
    reviseTime: -1,
  },
  {
    id: 2,
    title: '2',
    desc: '2',
    answer: '2',
    hint: '',
    reviseTime: -1,
  },
  {
    id: 3,
    title: '3',
    desc: '3',
    answer: '3',
    hint: '',
    reviseTime: -1,
  },
  {
    id: 4,
    title: '4',
    desc: '4',
    answer: '4',
    hint: '',
    reviseTime: -1,
  },
];

export const useFcStore = create<AppState>()(
  persist(
    (set) => ({
      cards: initialCards,
      updateReviseTime: (id: number, reviseTime: number) =>
        set((state) => ({
          cards: state.cards.map((card) =>
            card.id === id ? { ...card, reviseTime } : card
          ),
        })),
      createCard: (card: Card) =>
        set((state) => ({
          cards: [...state.cards, card],
        })),
    }),
    {
      name: 'flash-card-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
