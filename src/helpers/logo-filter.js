import { Store } from "../data/store"

export const FilterLogos = category =>
  Store.filter(item => item.category === category)
