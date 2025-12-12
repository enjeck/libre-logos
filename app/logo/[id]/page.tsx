import { notFound } from 'next/navigation'
import { Logos } from '../../../data/logos'
import LogoDetail from '../../../components/logo-detail'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = Logos.find(el => el.id === id)
  
  if (!item) {
    return {
      title: 'Logo not found',
    }
  }

  return {
    title: item.name,
    description: item.description,
  }
}

export default async function Logo({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = Logos.find(el => el.id === id)

  if (!item) {
    notFound()
  }

  return <LogoDetail item={item} />
}
