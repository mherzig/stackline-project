import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Sidebar from '../Sidebar'
import Overview from '../Overview'
import Sales from '../Sales'
import { setProductId } from '../../lib/state/actions/main'

import './product.scss'

const Product = ({
  productId,
  isOverview,
  loadProductData,
}) => {
  return (
    <>
      {/* hacky button to kick off the "loading" of the product data */}
      {!productId &&
        <>          
          <button id="load-button"
            style={{ margin: '8em 0 0 3em', padding: '0.5em 1em', fontSize: '1em' }}
            onClick={loadProductData}>
              Load product &ldquo;B007TIE0GQ&rdquo;
          </button>
        </>
      }

      {!!productId &&
        <main>
          <Sidebar/>
          {!!isOverview && <Overview/>}
          {!isOverview && <Sales/>}
        </main>
      }
    </>
  )
}

Product.propTypes = {
  productId: PropTypes.string,
  isOverview: PropTypes.bool.isRequired,
  loadProductData: PropTypes.func,
}

const mapStateToProps = ({
  main: { productId, isOverview },
}) => ({
  productId,
  isOverview,
})
const mapDispatchToProps = (dispatch) => ({
  loadProductData: () => dispatch(setProductId('B007TIE0GQ')),
})
export default connect(mapStateToProps, mapDispatchToProps)(Product)