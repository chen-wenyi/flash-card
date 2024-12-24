import { CardStackPlusIcon } from '@radix-ui/react-icons';

export default function Header() {
  return (
    <div className='flex items-center justify-center h-10 relative'>
        <div className='flex absolute right-4 top-3'>
          <CardStackPlusIcon className='w-6 h-6 cursor-pointer' />
        </div>
    </div>
  );
}
