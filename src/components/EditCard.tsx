import { Card } from '@/typing';
import { Pencil1Icon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';

export default function EditCard({ card }: { card?: Card }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Pencil1Icon className='w-6 h-6 cursor-pointer' />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription className='h-[85vh]'>
            <Tabs defaultValue='question' className='w-full h-[80%]'>
              <TabsList>
                <TabsTrigger value='question'>Question</TabsTrigger>
                <TabsTrigger value='answer'>Answer</TabsTrigger>
                <TabsTrigger value='hint'>Hint</TabsTrigger>
              </TabsList>
              <TabsContent className='h-full' value='question'>
                <Textarea className='h-full' defaultValue={card?.desc || ''} />
              </TabsContent>
              <TabsContent className='h-full' value='answer'>
                <Textarea
                  className='h-full'
                  defaultValue={card?.answer || ''}
                />
              </TabsContent>
              <TabsContent className='h-full' value='hint'>
                <Textarea className='h-full' defaultValue={card?.hint || ''} />
              </TabsContent>
            </Tabs>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
            <Button variant='outline'>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
