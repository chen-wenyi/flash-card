import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-2'>
      <Card className='flex flex-col h-64'>
        <CardHeader className='flex-1 overflow-auto'>
          <CardTitle>洗冷水澡</CardTitle>
          <CardDescription>
            当你洗冷水澡时，立刻促进血液循环，会让你瞬间充满能量。如果你反复这样做，它就会逐渐变成一种习惯。这会让你一直做下去，这也是建立自信的来源，你也开始真正去了了解自己。
            说到自信，我们往往试图从外界寻找自信，比如别人对我们的看法、我们给他人的印象。但最终，自信是来自内心的。给自己设定一些小目标，努力完成它们，享受挑战的过程，并时刻保持自律，这才是建立自信的关键。
          </CardDescription>
        </CardHeader>
        <CardContent className='flex-1 overflow-auto'>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>当你洗冷水澡时，立刻促进血液循环，会让你瞬间充满能量。</AccordionTrigger>
              <AccordionContent>
              when you take a cold shower, it instantly boost blood circulation, making you energised right away.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>如果你反复这样做，它就会逐渐变成一种习惯。</AccordionTrigger>
              <AccordionContent>
              if you keep repeating this, it gradually become a habit.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <Card className='flex flex-col h-64'>
        <CardHeader className='flex-1 overflow-auto'>
          <CardTitle>洗冷水澡</CardTitle>
          <CardDescription>
            当你洗冷水澡时，立刻促进血液循环，会让你瞬间充满能量。如果你反复这样做，它就会逐渐变成一种习惯。这会让你一直做下去，这也是建立自信的来源，你也开始真正去了了解自己。
            说到自信，我们往往试图从外界寻找自信，比如别人对我们的看法、我们给他人的印象。但最终，自信是来自内心的。给自己设定一些小目标，努力完成它们，享受挑战的过程，并时刻保持自律，这才是建立自信的关键。
          </CardDescription>
        </CardHeader>
        <CardContent className='flex-1 overflow-auto'>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>当你洗冷水澡时，立刻促进血液循环，会让你瞬间充满能量。</AccordionTrigger>
              <AccordionContent>
              when you take a cold shower, it instantly boost blood circulation, making you energised right away.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>如果你反复这样做，它就会逐渐变成一种习惯。</AccordionTrigger>
              <AccordionContent>
              if you keep repeating this, it gradually become a habit.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <Card className='flex flex-col h-64'>
        <CardHeader className='flex-1 overflow-auto'>
          <CardTitle>洗冷水澡</CardTitle>
          <CardDescription>
            当你洗冷水澡时，立刻促进血液循环，会让你瞬间充满能量。如果你反复这样做，它就会逐渐变成一种习惯。这会让你一直做下去，这也是建立自信的来源，你也开始真正去了了解自己。
            说到自信，我们往往试图从外界寻找自信，比如别人对我们的看法、我们给他人的印象。但最终，自信是来自内心的。给自己设定一些小目标，努力完成它们，享受挑战的过程，并时刻保持自律，这才是建立自信的关键。
          </CardDescription>
        </CardHeader>
        <CardContent className='flex-1 overflow-auto'>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>当你洗冷水澡时，立刻促进血液循环，会让你瞬间充满能量。</AccordionTrigger>
              <AccordionContent>
              when you take a cold shower, it instantly boost blood circulation, making you energised right away.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>如果你反复这样做，它就会逐渐变成一种习惯。</AccordionTrigger>
              <AccordionContent>
              if you keep repeating this, it gradually become a habit.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <Card className='flex flex-col h-64'>
        <CardHeader className='flex-1 overflow-auto'>
          <CardTitle>洗冷水澡</CardTitle>
          <CardDescription>
            当你洗冷水澡时，立刻促进血液循环，会让你瞬间充满能量。如果你反复这样做，它就会逐渐变成一种习惯。这会让你一直做下去，这也是建立自信的来源，你也开始真正去了了解自己。
            说到自信，我们往往试图从外界寻找自信，比如别人对我们的看法、我们给他人的印象。但最终，自信是来自内心的。给自己设定一些小目标，努力完成它们，享受挑战的过程，并时刻保持自律，这才是建立自信的关键。
          </CardDescription>
        </CardHeader>
        <CardContent className='flex-1 overflow-auto'>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>当你洗冷水澡时，立刻促进血液循环，会让你瞬间充满能量。</AccordionTrigger>
              <AccordionContent>
              when you take a cold shower, it instantly boost blood circulation, making you energised right away.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>如果你反复这样做，它就会逐渐变成一种习惯。</AccordionTrigger>
              <AccordionContent>
              if you keep repeating this, it gradually become a habit.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
