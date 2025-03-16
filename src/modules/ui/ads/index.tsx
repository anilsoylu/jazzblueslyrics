import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { GlobalData } from "@/data/global"

type AdsManagementProps = {
  type: "top" | "middle" | "bottom"
}

const AdsManagement = ({ type }: AdsManagementProps) => {
  if (!GlobalData.ads.filter((ad) => ad.type === type).length) return null

  return (
    <div className="container px-4 md:px-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {GlobalData.ads
          .filter((ad) => ad.type === type)
          .map((ad) => (
            <AspectRatio
              key={ad.id}
              ratio={16 / 9}
              className="bg-muted relative"
            >
              <Image
                src={ad.image}
                alt={ad.title}
                fill
                className="rounded-md object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="eager"
                priority={Number(ad.id) <= 3}
                quality={85}
              />
            </AspectRatio>
          ))}
      </div>
    </div>
  )
}

export default AdsManagement
