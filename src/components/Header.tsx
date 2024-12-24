import { CardStackPlusIcon } from '@radix-ui/react-icons';

export default function Header() {
  return (
    <div className='flex items-center justify-center h-10 relative'>
        <CardStackPlusIcon className='absolute w-6 h-6 right-4 top-4 cursor-pointer' />
    </div>
  );
}
