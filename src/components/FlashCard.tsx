'use client';
import { Card as ICard } from '@/typing';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function FlashCard({ id, title, desc }: ICard) {
  return (
    <Link href={`/card/${id}`}>
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.9 }}
        className='flex flex-col h-32 rounded-md cursor-pointer'
      >
        <Card className='flex h-full'>
          <CardHeader className='flex'>
            <CardTitle>{title}</CardTitle>
            <CardDescription className='flex-1 overflow-hidden text-ellipsis whitespace-normal line-clamp-3'>
              {desc}
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>
    </Link>
  );
}
