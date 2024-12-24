import NewCard from "./NewCard";

export default function Header() {
  return (
    <div className='flex items-center justify-center h-10 relative'>
        <div className='flex absolute right-4 top-3'>
          <NewCard />
        </div>
    </div>
  );
}
