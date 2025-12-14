'use client'

import { ItemContain } from './logo-styles'
import FeaturedLogos from './featuredlogos'
import Image from "next/image"

export default function LogoDetail({ item }) {
  const isAvailable = item.availability === "Available"

  return (
    <>
      <ItemContain>
        <section className="img logo-img">
          <Image src={item.img} alt={item.name} width={500} height={400} style={{ width: '100%', height: 'auto' }} />
          {!isAvailable && (
            <p className="tag">{item.availability}</p>
          )}
        </section>
        <section className="logo-info">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          {isAvailable ? (
            <a
              href="https://github.com/enjeck/libre-logos/issues/new?assignees=&labels=logo+request&template=logo-request.md&title=Logo+request"
              className="claim"
            >
              Claim this logo
            </a>
          ) : (
            <a href="#" className="claim claimed">
              Already claimed
            </a>
          )}

          <div className="logo-details">
            <h4>Free Logo</h4>
            <p>This logo will be given free of charge. Nothing is paid to acquire it.</p>
          </div>
          <div className="logo-details">
            <h4>Exclusive, Trademarkable Logo</h4>
            <p>It is claimed once. Copyright transfers to the organisation/project that claimed the logo.</p>
          </div>
          <div className="logo-details">
            <h4>Original Vector Art</h4>
            <p>Original SVG and high-resolution PNG will be provided.</p>
          </div>
        </section>
      </ItemContain>
      <hr />
      <FeaturedLogos />
    </>
  )
}
