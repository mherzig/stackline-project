/**
 * 
 * @param {array<object>} salesData   Each object in the array represents a data point
 * @param {array<string>} series      Keys to extract from the data, each represents a series
 * @returns {array{object}}           Data suitable to use in the chart component
 */
export default function extractChartData (salesData, series = []) {
  const allWeeks = []

  series.forEach(id => {
    allWeeks.push({
      id,
      data: []
    })
  })

  salesData.reduce((ar, week, i) => {
    series.forEach((key, i) => {
      ar[i].data.push({
        x: week.weekEnding,
        y: week[key],
      })
    })

    return ar
  }, allWeeks)

  return allWeeks
}