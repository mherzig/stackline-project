import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  setViewOverview, 
  setViewSales,
} from '../../lib/state/actions/main'

import './tab-panel.scss'

const TabPanel = ({
  isOverview,
  setViewOverview,
  setViewSales,
}) => {
  return (
    <div className="tab-panel">
      <button className={isOverview ? 'selected' : ''}
        onClick={setViewOverview}>Overview</button>
      <button className={!isOverview ? 'selected' : ''}
        onClick={setViewSales}>Sales</button>
    </div>
  )
}

TabPanel.propTypes = {
  isOverview: PropTypes.bool.isRequired,
  setViewOverview: PropTypes.func.isRequired,
  setViewSales: PropTypes.func.isRequired,
}

const mapStateToProps = ({
  main: { isOverview },
}) => ({
  isOverview,
})
const mapDispatchToProps = (dispatch) => ({
  setViewOverview: () => dispatch(setViewOverview()),
  setViewSales: () => dispatch(setViewSales())
})
export default connect(mapStateToProps, mapDispatchToProps)(TabPanel)