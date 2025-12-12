import LogosGrid from '../../components/logosgrid'
import { Logos } from '../../data/logos'
import { filterByAvailability } from '../../lib/logo-filter'

export const metadata = {
  title: 'Available logos',
}

export default function Available() {
  const availableLogos = filterByAvailability(Logos, "Available")
  return <LogosGrid logos={availableLogos} />
}
