'use client'

import { useState } from "react"
import Link from "next/link"
import { StyledGroup, Item } from "./logosgrid-styles"
import PropTypes from "prop-types"

const LogosGrid = ({ logos }) => {

  const [filteredLogos] = useState(logos)

  return (
    <div className="logosgrid">
      <StyledGroup className="content">
        {filteredLogos.map(item => (
          <Item key={item.id}>
            <div className="img-contain" style={{ position: 'relative' }}>
              <Link href={`/logo/${item.id}`}>
                <img src={item.img} alt={item.name} />
              </Link>
              {item.availability !== "Available" && (
                <span className="tag">{item.availability}</span>
              )}
            </div>
            <Link href={`/logo/${item.id}`}>
              <h3 style={{ color: "blue" }}>{item.name}</h3>
            </Link>
          </Item>
        ))}
      </StyledGroup>
    </div>
  )
}

LogosGrid.propTypes = {
  logos: PropTypes.array,
}

export default LogosGrid
