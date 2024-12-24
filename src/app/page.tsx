'use client';

import FlashCard from '@/components/FlashCard';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import useStore from '@/lib/useStore';
import { useFcStore } from '@/useFcStore';

export default function Home() {
  const state = useStore(useFcStore, (state) => state);
  const currCard = state?.cards[0]

  return (
    <div className='flex flex-col h-screen' style={{ backgroundColor: "var(--background)" }}>
      <Header />
      <div className='flex flex-1 m-4'>
        {currCard && <FlashCard
            key={currCard.id}
            card={currCard}
          />}
      </div>
      <Footer />
    </div>
  );
}
