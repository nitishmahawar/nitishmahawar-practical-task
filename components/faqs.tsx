import React from "react";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

const faqs = [
  {
    question: "What is AAVO Ride Partner?",
    answer:
      "AAVO Ride Partner is a platform that connects drivers with riders who need transportation.",
  },
  {
    question: "How can I register as a driver?",
    answer:
      "You can register as a driver by filling out the form on our website.",
  },
  {
    question: "How can a rental agency join AAVO Ride?",
    answer:
      "You can join AAVO Ride as a rental agency by filling out the form on our website.",
  },
  {
    question: "What documents are required for driver registration?",
    answer:
      "You will need to provide your driver's license, vehicle registration, and insurance information.",
  },
  {
    question: "How do I receive ride requests?",
    answer: "You will receive ride requests through our mobile app.",
  },
  {
    question: "How do I get paid for rides?",
    answer: "You will be paid for rides through our mobile app.",
  },
  {
    question: "Can I add multiple vehicles in one account?",
    answer: "Yes, you can add multiple vehicles in one account.",
  },
  {
    question: "Is there any commission on rides?",
    answer: "Yes, there is a commission on rides.",
  },
  {
    question: "Why should I join AAVO Ride Partner?",
    answer:
      "You should join AAVO Ride Partner because it is a great way to earn money and connect with riders.",
  },
];

export const Faqs = () => {
  return (
    <div className="flex flex-col items-center px-4 py-20 lg:py-28 overflow-hidden relative">
      <div className="absolute bottom-[-92px] right-[-292px] size-[570px] bg-primary rounded-full blur-[100px] pointer-events-none opacity-20" />
      <Badge className="bg-primary/10 text-primary uppercase px-4 tracking-wider py-1 h-auto mb-3">
        Support Center
      </Badge>
      <h2 className="font-bold text-4xl md:text-5xl mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-muted-foreground mb-8 text-center">
        Everything you need to know about bookings, drivers, payments, and
        travel experience.
      </p>
      <div className="w-full max-w-3xl mb-4">
        {faqs.map((faq, i) => (
          <Accordion
            key={i}
            type="single"
            collapsible
            className="border-0 shadow-none bg-none"
          >
            <AccordionItem value={"item-" + i} className="bg-background p-4">
              <AccordionTrigger className="text-lg font-normal">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between w-full max-w-3xl p-6 bg-primary/10 border border-primary/20 rounded-[32px]">
        <div className="space-y-1">
          <h3 className="font-medium text-primary">Still have questions?</h3>
          <p className="text-muted-foreground">
            We're here to help you get moving.
          </p>
        </div>
        <Button
          className="h-14 px-8 text-base rounded-full font-normal w-fit"
          size="lg"
        >
          Chat with Support
        </Button>
      </div>
    </div>
  );
};
