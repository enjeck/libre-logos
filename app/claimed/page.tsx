import LogosGrid from '../../components/logosgrid'
import { Logos } from '../../data/logos'
import { filterByAvailability } from '../../lib/logo-filter'

export const metadata = {
  title: 'Claimed logos',
}

export default function Claimed() {
  const claimedLogos = filterByAvailability(Logos, "Claimed")
  return <LogosGrid logos={claimedLogos} />
}
