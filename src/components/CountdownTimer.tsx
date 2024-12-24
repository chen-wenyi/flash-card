import useCountdown from '@/hooks/useCountdown';
import { Card } from '@/typing';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

export default function CountdownTimer({ card }: { card: Card }) {
  const timeLeft = useCountdown(card);

  return (
    <div>
      {timeLeft && timeLeft.distance > 0 && (
        <div className='text-center my-4'>
          <div>Next Card in:</div>
          <div>
            {timeLeft.days} D {timeLeft.hours} H {timeLeft.minutes} M{' '}
            {timeLeft.seconds} S
          </div>
        </div>
      )}
    </div>
  );
}
