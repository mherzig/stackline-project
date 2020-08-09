export const actions = {
  SET_PRODUCT_ID: 'SET_PRODUCT_ID',
  SET_VIEW_OVERVIEW: 'SET_VIEW_OVERVIEW',
  SET_VIEW_SALES: 'SET_VIEW_SALES',
}

export function setProductId (productId) {
  return {
    type: actions.SET_PRODUCT_ID,
    productId,
  }
}

export function setViewOverview () {
  return {
    type: actions.SET_VIEW_OVERVIEW,
  }
}

export function setViewSales () {
  return {
    type: actions.SET_VIEW_SALES,
  }
}