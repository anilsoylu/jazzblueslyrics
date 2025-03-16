export type HeroButton = {
  label: string
  href: string
  variant: "default" | "outline"
}

export type Hero = {
  title: string
  description: string
  buttons: HeroButton[]
}
