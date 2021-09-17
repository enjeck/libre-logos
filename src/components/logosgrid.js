import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import { StyledGroup, Item} from "./logosgrid-styles"
import PropTypes from "prop-types"

const LogosGrid = ({ logos }) => {

  const [filteredLogos] = useState(logos)

  return (
    <div className="logosgrid">
      <StyledGroup className="content">
        {filteredLogos.map(item => (
            <Item>
              <div className="img-contain">
                <a href={`logo/${item.id}`}>
                  <img src={item.img} alt={`${item.name}`}></img>
                </a>
              </div>
              <a href={`logo/${item.id}`}>
              <h3 style={{color:"blue"}}>{item.name}</h3>
              </a>
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
