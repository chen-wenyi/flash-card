import {
  CheckIcon,
  Cross2Icon,
  InfoCircledIcon,
  QuestionMarkIcon,
} from '@radix-ui/react-icons';
import dayjs from 'dayjs';
import { Button } from './ui/button';

export default function ButtonGroup({
  handleNext,
}: {
  handleNext: (reviseTime: number) => void;
}) {
  return (
    <div className='flex justify-between gap-4 my-4'>
      <Button
        variant='outline'
        onClick={() => handleNext(dayjs().add(0.1, 'minute').unix())}
      >
        <CheckIcon />
      </Button>
      <Button
        variant='outline'
        onClick={() => handleNext(dayjs().add(10, 'minute').unix())}
      >
        <QuestionMarkIcon />
      </Button>
      <Button
        variant='outline'
        onClick={() => handleNext(dayjs().add(15, 'minute').unix())}
      >
        <Cross2Icon />
      </Button>
      <Button
        variant='outline'
      >
        <InfoCircledIcon />
      </Button>
    </div>
  );
}
