import { CheckIcon, Cross2Icon, InfoCircledIcon, QuestionMarkIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';

export default function ButtonGroup() {
  return (
    <div className='flex justify-between gap-4 mx-4'>
      <Button variant='outline'><CheckIcon /></Button>
      <Button variant='outline'><QuestionMarkIcon /></Button>
      <Button variant='outline'><Cross2Icon /></Button>
      <Button variant='outline'><InfoCircledIcon /></Button>
    </div>
  );
}
