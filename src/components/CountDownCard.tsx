'use client';
import { Card } from '@/typing';
import { QuestionMarkIcon } from '@radix-ui/react-icons';
import CountdownTimer from './CountdownTimer';

export default function CountdownCard({ card }: { card?: Card }) {
  return (
    <div className='flex flex-col flex-1'>
      <div
        className='flex flex-1 relative'
      >
        <div
          className='absolute flex flex-col w-full h-full justify-center items-center rounded-lg px-4 border-2'
          style={{
            backfaceVisibility: 'hidden', // Hide back when front is visible
            backgroundColor: 'var(--card-foreground)',
          }}
        >
          <QuestionMarkIcon className='w-20 h-20' />
          {card ? <CountdownTimer card={card} />:  ''}
        </div>
      </div>
    </div>
  );
}
