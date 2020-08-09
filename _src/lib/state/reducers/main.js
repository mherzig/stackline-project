import { createReducer } from '.'
import { actions } from '../actions/main'

const initialState = {
  productId: null,
  isOverview: true,
}

const setProductId = (state, { productId }) => {
  return {
    ...state,
    productId,
  }
}

const setViewOverview = (state) => {
  return {
    ...state,
    isOverview: true,
  }
}

const setViewSales = (state) => {
  return {
    ...state,
    isOverview: false,
  }
}

const mainReducer = createReducer(initialState, {
  [actions.SET_PRODUCT_ID]: setProductId,
  [actions.SET_VIEW_OVERVIEW]: setViewOverview,
  [actions.SET_VIEW_SALES]: setViewSales,
})

export default mainReducer