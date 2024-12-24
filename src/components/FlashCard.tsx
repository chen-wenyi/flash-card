'use client';
import { Card as ICard } from '@/typing';
import { motion, useAnimation } from 'motion/react';
import { useState } from 'react';
import EditCard from './EditCard';

export default function FlashCard({ card }: { card: ICard }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();

  // Handle flip and animation control
  const handleFlip = () => {
    setIsFlipped((prev) => !prev);

    // Trigger the animation when the card is clicked
    controls.start({
      rotateY: isFlipped ? '0deg' : '180deg', // Flip the card
      scale: [1, 0.75, 1],
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    });
  };

  return (
    <motion.div
      className='flex flex-1 relative'
      animate={controls} // Attach animation controls to motion div
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }} // Enables 3D effect
      onClick={handleFlip}
    >
      {/* Front Face */}
      <div
        className='absolute flex w-full h-full justify-center items-center rounded-lg px-4 border-2'
        style={{
          backfaceVisibility: 'hidden', // Hide back when front is visible
          backgroundColor: 'var(--card-foreground)',
        }}
      >
        <div className='absolute right-2 top-2' onClick={e => e.stopPropagation()}>
          <EditCard card={card} />
        </div>
        {card.desc}
      </div>
      {/* Back Face */}
      <div
        className='absolute flex w-full h-full bg-green-500 justify-center items-center rounded-lg px-4 border-2'
        style={{
          transform: 'rotateY(180deg)', // Back face rotated by 180 degrees
          backfaceVisibility: 'hidden', // Hide front when back is visible
          backgroundColor: 'var(--card-foreground)',
        }}
      >
        {card.answer}
      </div>
    </motion.div>
  );
}
