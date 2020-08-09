import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './tags-panel.scss'

const TagsPanel = ({
  tags,
}) => {
  return (
    <div className="tags-panel">
      {tags.map(tag => <a key={tag} href="#">{tag}</a>)}
    </div>
  )
}

TagsPanel.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const mapStateToProps = ({
  product: { tags },
}) => ({
  tags,
})
export default connect(mapStateToProps)(TagsPanel)