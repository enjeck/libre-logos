import { Logos } from "../data/logos"

export const FilterLogos = availability =>
  Logos.filter(item => item.availability === availability)
