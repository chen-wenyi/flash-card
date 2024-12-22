'use client';

import useStore from '@/lib/useStore';
import { useFcStore } from '@/useFcStore';
import { motion } from 'motion/react';

export default function CardDetail({ id }: { id: number }) {
  const state = useStore(useFcStore, (state) => state);
  const detail = state?.cards.find((card) => card.id === id);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div>{detail?.title}</div>
      <div>{detail?.desc}</div>
    </motion.div>
  );
}
