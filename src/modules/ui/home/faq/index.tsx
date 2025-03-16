import { memo } from "react"
import { Accordion } from "@/components/ui/accordion"
import FaqAccordionItem from "./faq-item"
import { faqData } from "@/data/faq"
import { GlobalData } from "@/data/global"

interface FaqProps {
  items?: typeof faqData
  title?: string
  className?: string
}

const Faq = memo(
  ({
    items = faqData,
    title = GlobalData.faqTitle,
    className = "",
  }: FaqProps) => {
    return (
      <section
        id="faq"
        className={`w-full py-6 md:py-12 ${className}`}
        aria-labelledby="faq-title"
      >
        <h3
          id="faq-title"
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center"
        >
          {title}
        </h3>
        <div className="container mx-auto px-4 md:px-6">
          <Accordion
            type="single"
            collapsible
            className="w-full mx-auto space-y-4"
            defaultValue={items[0].question}
          >
            {items.map((item, index) => (
              <FaqAccordionItem
                key={item.question}
                item={item}
                className={index !== items.length - 1 ? "mb-4" : ""}
              />
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
)

Faq.displayName = "Faq"
export default Faq
