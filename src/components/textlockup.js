import React from "react"
import PropTypes from "prop-types"
import { Hero } from "./textlockup-styles"

const Textlockup = ({
  image,
  newText,
  saleText,
  collectionText,
  detailsText,
}) => {
  return (
    <Hero>
      <div className="new">{newText}</div>
      <div className="topic">{saleText}</div>
      <div className="collection">{collectionText}</div>
      <div className="details">{detailsText}</div>
    </Hero>
  )
}

export default Textlockup

Textlockup.propTypes = {
  image: PropTypes.string,
  newText: PropTypes.string,
  saleText: PropTypes.string,
  collectionText: PropTypes.string,
  detailsText: PropTypes.string,
}
