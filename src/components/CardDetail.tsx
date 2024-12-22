'use client'

import useStore from "@/lib/useStore";
import { useFcStore } from "@/useFcStore";

export default function CardDetail({id}: {id: number}) {
  const state = useStore(useFcStore, (state) => state);
  const detail = state?.cards.find(card => card.id === id)
  return 

}