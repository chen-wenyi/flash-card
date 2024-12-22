'use client'

import FlashCard from '@/components/FlashCard';
import useStore from '@/lib/useStore';
import { useFcStore } from '@/useFcStore';

export default function Home() {

  const state = useStore(useFcStore, (state) => state);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-2'>
      {state?.cards.map((card) => <FlashCard title={card.title} desc={card.desc} />)}
    </div>
  );
}
