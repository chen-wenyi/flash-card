'use client';

import CountdownCard from '@/components/CountDownCard';
import FlashCard from '@/components/FlashCard';
import Header from '@/components/Header';
import useCountdown from '@/hooks/useCountdown';
import useStore from '@/lib/useStore';
import { useFcStore } from '@/useFcStore';
import dayjs from 'dayjs';

export default function Home() {
  const state = useStore(useFcStore, (state) => state);
  const sortedCard = state?.cards.sort((a, b) => a.reviseTime - b.reviseTime);
  const availableCard = sortedCard?.filter(
    (card) => dayjs().unix() > card.reviseTime || card.reviseTime === -1
  );
  const cooldownCards = sortedCard?.filter(
    (card) => dayjs().unix() < card.reviseTime
  );

  const cooldownCard = cooldownCards && cooldownCards.length > 0 ? cooldownCards[0] : undefined;
  const timeLeft = useCountdown(cooldownCard);
  if (cooldownCard && timeLeft && timeLeft.distance <= 0) {
    console.log('timeLeft', timeLeft)
    state?.updateReviseTime(cooldownCard.id, -1);
  }

  return (
    <div
      className='flex flex-col h-screen'
      style={{ backgroundColor: 'var(--background)' }}
    >
      <Header />
      <div className='flex flex-1 m-4'>
        {(availableCard?.length || 0) > 0 && (
          <FlashCard key={availableCard![0].id} card={availableCard![0]} />
        ) || <CountdownCard card={(cooldownCards?.length || 0) > 0 ? cooldownCards![0] : undefined} />}
      </div>
      {/* <Footer /> */}
    </div>
  );
}
