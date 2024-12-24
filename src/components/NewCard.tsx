import { DialogClose } from '@radix-ui/react-dialog';
import { CardStackPlusIcon } from '@radix-ui/react-icons';
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

export default function NewCard() {
  return (
    <Dialog>
      <DialogTrigger>
        <CardStackPlusIcon className='w-6 h-6 cursor-pointer' />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription className='h-[60vh]'>
            <Tabs defaultValue='question' className='w-full h-[80%]'>
              <TabsList>
                <TabsTrigger value='question'>Question</TabsTrigger>
                <TabsTrigger value='answer'>Answer</TabsTrigger>
                <TabsTrigger value='hint'>Hint</TabsTrigger>
              </TabsList>
              <TabsContent className='h-full' value='question'>
                <Textarea className='h-full' />
              </TabsContent>
              <TabsContent className='h-full' value='answer'>
                <Textarea className='h-full' />
              </TabsContent>
              <TabsContent className='h-full' value='hint'>
                <Textarea className='h-full' />
              </TabsContent>
            </Tabs>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant='outline' asChild>
            <div>Create</div>
          </Button>
        </DialogFooter>
        <DialogClose>
          <Button variant='destructive' className='w-full' asChild>
            <div>Discard</div>
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
