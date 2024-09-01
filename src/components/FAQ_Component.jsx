import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_Component = () => {
  return (
    <>
      <div className="p-5 md:p-8 space-y-4">
        <h1 className="text-3xl font-bold dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-base dark:text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
          assumenda
        </p>
        <div className="dark:text-white">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                vitae facilis quia? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eius blanditiis ipsam consequuntur!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                vitae facilis quia? Lorem ipsum dolor sit amet consectetur.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                pariatur quibusdam obcaecati suscipit natus debitis voluptatum,
                et eum aliquid iste magnam voluptas vero dolores quidem odit
                exercitationem. Officia aut est aliquid dolores, ducimus
                voluptas soluta temporibus obcaecati aperiam, eius ipsa?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                vitae facilis quia? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Saepe, enim nobis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Full Responsiveness its?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                vitae facilis quia? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Quia sapiente temporibus recusandae quae
                tempore nemo libero, non voluptatum necessitatibus veritatis!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FAQ_Component;
