import { memo, useMemo } from "react"
import StarIcon from "@/modules/ui/home/testimonials/star-icon"

const STAR_COUNT = 5

type StarRatingProps = {
  rating: number
}

const StarRating = memo(({ rating }: StarRatingProps) => {
  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, i) => (
        <StarIcon key={i} isFilled={i < rating} />
      )),
    [rating]
  )

  return (
    <div
      className="flex mb-4"
      role="img"
      aria-label={`${rating} / ${STAR_COUNT} yıldız değerlendirme`}
    >
      {stars}
    </div>
  )
})

StarRating.displayName = "StarRating"
export default StarRating
