import { memo } from "react"
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import type { FaqItem } from "@/types/faq"

interface FaqItemProps {
  item: FaqItem
  className?: string
}

const FaqAccordionItem = memo(({ item, className = "" }: FaqItemProps) => (
  <AccordionItem value={item.question} className={className}>
    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
    <AccordionContent>{item.answer}</AccordionContent>
  </AccordionItem>
))

FaqAccordionItem.displayName = "FaqAccordionItem"
export default FaqAccordionItem
