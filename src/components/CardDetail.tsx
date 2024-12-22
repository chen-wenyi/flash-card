'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import useStore from '@/lib/useStore';
import { useFcStore } from '@/useFcStore';
import { motion } from 'motion/react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer';

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
      <div className='font-bold'>{detail?.title}</div>
      <Separator className='my-2' />
      <div className='max-h-[45vh] overflow-auto text-sm'>{detail?.desc}</div>
      <Separator className='my-2' />
      <div className='flex flex-col gap-4'>
        <div className='font-bold'>Question 1</div>
        <div className='text-sm'>当你洗冷水澡时，立刻促进血液循环，会让你瞬间充满能量。</div>
        <Drawer>
          <DrawerTrigger>
            <Button variant='default' asChild>
              <div className='w-full'>Show Answer</div>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
              <DrawerDescription className='text-left'>
                when you take a cold shower, it instantly boost blood circulation, making you energised right away.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button asChild>
                <div>Ok</div>
              </Button>
              <DrawerClose>
                <Button asChild variant='outline' className='w-full'>
                  <div>Again</div>
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </motion.div>
  );
}
