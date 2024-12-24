import { calculateTimeLeft } from '@/lib/utils';
import { Card, TimeLeft } from '@/typing';
import { useEffect, useState } from 'react';

export default function useCountdown(card?: Card) {
  const reviseTime = card?.reviseTime;

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    reviseTime ? calculateTimeLeft(reviseTime) : null
  );


  useEffect(() => {
    if (!reviseTime || (timeLeft && timeLeft.distance <= 0)) {
      setTimeLeft(null);
      return;
    } // Stop the countdown when time is up

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(reviseTime));
    }, 1000);

    // Cleanup the interval when the component unmounts or time is up
    return () => clearInterval(timer);
  }, [timeLeft, reviseTime]);

  return timeLeft;
}
