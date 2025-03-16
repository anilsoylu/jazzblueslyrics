import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdsList } from "@/lib/wordpress"

type BonusCardProps = {
  card: AdsList
}

export const BonusCard: React.FC<BonusCardProps> = React.memo(({ card }) => (
  <Card className="overflow-hidden bg-[#5b0433]">
    <CardHeader className="p-0 md:p-4">
      <Link href={card.acf.link} target="_blank" rel="noopener noreferrer">
        <Image
          src={card.acf.image || "/placeholder.svg"}
          alt="Bonus card"
          width={100}
          height={40}
          loading="lazy"
        />
      </Link>
    </CardHeader>
    <CardContent className="p-1 md:p-4">
      <Link
        href={card.acf.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center md:text-left"
      >
        <p className="text-sm md:text-xl font-bold my-1.5">{card.acf.bonus}</p>
        <p className="mb-0 text-xs md:text-base">{card.acf.type}</p>
      </Link>
    </CardContent>
    <CardFooter className="p-0 md:p-6 mt-1.5 md:px-4 hidden md:block">
      <Button asChild className="w-full">
        <Link href={card.acf.link} target="_blank" rel="noopener noreferrer">
          Siteye Git
        </Link>
      </Button>
    </CardFooter>
  </Card>
))

BonusCard.displayName = "BonusCard"
