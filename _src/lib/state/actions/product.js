export const actions = {
  SET_PRODUCT_DATA: 'SET_PRODUCT_DATA',
}

export function setProductData (data) {
  return {
    type: actions.SET_PRODUCT_DATA,
    data
  }
}