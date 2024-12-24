import { Redis } from '@upstash/redis';
import { create } from 'zustand';
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';
import { Card } from './typing';

const redis = new Redis({
  url: 'https://smart-kite-52899.upstash.io',
  token: 'Ac6jAAIjcDEyZTY2NDdjYjQyYzc0NjA2YWFjYjhiNzcxNjhiYjE4Y3AxMA',
});

export interface AppState {
  cards: Card[];
  updateReviseTime: (id: number, reviseTime: number) => void;
}

const initialCards: Card[] = [];

// Custom storage object
const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    console.log(name, 'has been retrieved');
    return (JSON.stringify(await redis.json.get(name))) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    console.log(name, 'with value', value, 'has been saved');
    await redis.json.set(name, '$', value);
  },
  removeItem: async (name: string): Promise<void> => {
    console.log(name, 'has been deleted');
    // await del(name)
  },
};

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
      name: 'flashcard',
      storage: createJSONStorage(() => storage),
    }
  )
);
