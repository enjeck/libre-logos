import Hero from '../components/hero'
import Features from '../components/features'
import HowItWorks from '../components/how-it-works'
import Eligibility from '../components/eligibility'
import FeaturedLogos from '../components/featuredlogos'

export const metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <FeaturedLogos />
      <Eligibility />
    </>
  )
}
