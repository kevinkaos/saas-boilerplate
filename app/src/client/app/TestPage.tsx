import React from 'react'
import { Button } from '../../@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
 } from '../../@/components/ui/accordion';
 import { Calendar } from "../../@/components/ui/calendar"

const TestPage = () => {
  return (
    <div className='py-10 lg:mt-10'>
    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
      <div className='mx-auto max-w-4xl text-center'>
        <h2 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white'>
          <span className='text-yellow-500'>AI</span> Day Scheduler
        </h2>
      </div>
      <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-white'>
        This example app uses OpenAI's chat completions with function calling to return a structured JSON object. Try
        it out, enter your day's tasks, and let AI do the rest!
      </p>
      {/* begin AI-powered Todo List */}
      <div className='my-8 border rounded-3xl border-gray-900/10 dark:border-gray-100/10'>
        <div className='sm:w-[90%] md:w-[70%] lg:w-[50%] py-10 px-6 mx-auto my-8 space-y-10'>
          <Button>Test Page Button</Button>
        </div>
        <div className='sm:w-[90%] md:w-[70%] lg:w-[50%] py-10 px-6 mx-auto my-8 space-y-10'>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </div>
        <div className='sm:w-[90%] md:w-[70%] lg:w-[50%] py-10 px-6 mx-auto my-8 space-y-10'>
          <Calendar />
        </div>
      </div>
      {/* end AI-powered Todo List */}
    </div>
  </div>
  )
};

function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
 
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}

export default TestPage;