import json from '../../../_data/Webdev_data2.json'

// pretending this calls a real API...
const get = async (productId) => {
  console.info(`making API call to get data for product ${productId}...`)

  const data = json.find(p => p.id === productId)
  // console.log(data)
  return data
}

export {
  get,
}