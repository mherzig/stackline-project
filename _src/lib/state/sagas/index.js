import { call, all, takeLatest, put } from 'redux-saga/effects'

import {
  actions as mainActions,
} from '../actions/main'
import {
  setProductData,
} from '../actions/product'
import { get } from '../../Ajax'

function * loadProduct ({ productId }) {
  try {
    const data = yield call(get, [ productId ])
    yield put(setProductData(data))
  } catch (err) {
    // didn't implement, but would handle informing users if there was an error
    // yield put(informError(err))
    console.error(err)
  }
}

export default function * rootSaga () {
  yield all([
    takeLatest(mainActions.SET_PRODUCT_ID, loadProduct)
  ])
}