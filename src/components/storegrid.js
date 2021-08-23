import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import { StyledGroup, Item} from "./storegrid-styles"
import PropTypes from "prop-types"

const StoreGrid = ({ logos }) => {

  const [filteredLogos] = useState(logos)

  return (
    <div className="storegrid">
      <StyledGroup className="content">
        {filteredLogos.map(item => (
          <CSSTransition key={item.id} timeout={100} classNames="items">
            <Item>
              <div className="img-contain">
                <a href={`logo/${item.id}`}>
                  <img src={item.img} alt={`${item.name}`}></img>
                </a>
              </div>
              <a href={`logo/${item.id}`}>
              <h3>{item.name}</h3>
              </a>
            </Item>
          </CSSTransition>
        ))}
      </StyledGroup>
    </div>
  )
}

StoreGrid.propTypes = {
  logos: PropTypes.array,
}

export default StoreGrid
