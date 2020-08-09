import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './overview.scss'

const Overview = ({
  details = [],
  reviews = [],
}) => {
  return (
    <div id="overview">
      <div>
        <h3>Details</h3>
        <ul>
          {details.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>

      <div>
        <h3>Reviews</h3>
        {/* This should really be a separate Review component */}
        <h4>{reviews[0].customer} - {reviews[0].score}</h4>
        <p>{reviews[0].review}</p>
      </div>
    </div>
  )
}

Overview.propTypes = {
  details: PropTypes.arrayOf(PropTypes.string),
  reviews: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = ({
  product: { details, reviews },
}) => ({
  details,
  reviews,
})

export default connect(mapStateToProps)(Overview)