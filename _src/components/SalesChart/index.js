import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ResponsiveLineCanvas } from '@nivo/line'

import extractChartData from '../../lib/common/extractChartData'

import './sales-chart.scss'

const SalesChart = ({
  chartData,
}) => {
  return (
    <div id="sales-chart">
      <h3>Retail Sales</h3>
      <div>
        <ResponsiveLineCanvas
          data={chartData}
          margin={{ bottom: 20, left: 10 }}
          xScale={{
            type: 'time',
            format: '%Y-%m-%d',
            useUTC: false,
            precision: 'day',
          }}
          xFormat="time:%Y-%m-%d"
          yScale={{
            type: 'linear',
            min: 0,
            max: 1000000,
          }}
          curve="basis"
          colors={[ '#3692f3', '#8691af' ]}
          enablePoints={false}
          enableGridX={false}
          enableGridY={false}
          axisLeft={{
            enable: false,
            tickSize: 0,
            tickPadding: 20,
          }}
          axisBottom={{
            enable: true,
            format: '%b',
            tickValues: 'every 1 month',
            tickSize: 0,
          }}
        />
      </div>
    </div>
  )
}

SalesChart.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = ({
  product: { sales },
}) => ({
  chartData:  extractChartData(sales, [
    'retailSales',
    'wholesaleSales',
  ])
})
export default connect(mapStateToProps)(SalesChart)