import { motion } from "framer-motion";
import { PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    title: "What is the Parcel Delivery System?",
    content:
      "It’s a platform where users can send and receive parcels with real-time tracking. Customers can create delivery requests, assign delivery men, and monitor parcel status from Pending to Delivered.",
  },
  {
    id: "2",
    title: "How does role-based access work?",
    content:
      "There are three main roles: Customer, Delivery Man, and Admin. Customers can create and manage their parcels, Delivery Men can update parcel status, and Admins oversee everything including user and parcel management.",
  },
  {
    id: "3",
    title: "Can I track my parcel in real time?",
    content:
      "Yes. Each parcel has a unique tracking ID, and its status is updated step by step (Pending → Picked → In Transit → Delivered). Customers can view the status directly from their dashboard.",
  },
  {
    id: "4",
    title: "Is the system secure?",
    content:
      "Absolutely. The system uses JWT-based authentication and bcrypt password hashing. Sensitive actions are protected with role-based access control to ensure only authorized users can perform them.",
  },
  {
    id: "5",
    title: "Can admins manage users and parcels?",
    content:
      "Yes. Admins have the highest level of access—they can approve or block users, assign parcels to delivery men, and monitor system performance.",
  },
  {
    id: "6",
    title: "What technologies are used?",
    content:
      "The backend is built with Node.js, Express.js, MongoDB, and Mongoose. TypeScript ensures type safety, and modular code structure keeps the project clean and scalable.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <section className="py-16 max-w-full  mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Frequently Asked Question
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="3"
          >
            {items.map((item) => (
              <AccordionItem value={item.id} key={item.id} className="py-2">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className=" focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                    {item.title}
                    <PlusIcon
                      size={16}
                      className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-muted-foreground pb-2 text-left">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full flex justify-center "
        >
          <img
            src="https://pathao.com/wp-content/uploads/2019/02/parcel-new.png"
            alt="App Mockup"
            className="w-full max-w-sm drop-shadow-xl rounded-2xl"
          />
        </motion.div>
      </section>
    </>
  );
}
