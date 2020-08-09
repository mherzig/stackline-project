import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import TagsPanel from '../TagsPanel'
import TabPanel from '../TabPanel'

import './sidebar.scss'

const Sidebar = ({
  title,
  subtitle,
  imageSrc,
}) => {
  return (
    <div id="sidebar">
      <img className="product-image" title={title} src={imageSrc}/>
      <h2>{title}</h2>
      <p>{subtitle}</p>

      <TagsPanel/>
      <TabPanel/>
    </div>
  )
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
}

const mapStateToProps = ({
  product: { title, subtitle, image },
}) => ({
  title,
  subtitle,
  imageSrc: image,
})
export default connect(mapStateToProps)(Sidebar)