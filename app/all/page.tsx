import LogosGrid from '../../components/logosgrid'
import { Logos } from '../../data/logos'

export const metadata = {
  title: 'All logos',
}

export default function All() {
  return <LogosGrid logos={Logos} />
}
