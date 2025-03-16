const CAROUSEL_CONSTANTS = {
  OPTIONS: {
    align: "start",
    loop: true,
  } as const,
  BREAKPOINTS: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  } as const,
  ITEM_CLASSES: {
    base: "pl-2 md:pl-4",
    responsive: "md:basis-1/2 lg:basis-1/3",
  } as const,
} as const

const carouselOptions = {
  align: "start",
  loop: true,
  skipSnaps: false,
  dragFree: true,
} as const

const autoplayOptions = {
  delay: 2000,
  stopOnMouseEnter: true,
  playOnInit: true,
  stopOnLastSnap: false,
  stopOnInteraction: false,
} as const

export { carouselOptions, autoplayOptions, CAROUSEL_CONSTANTS }
