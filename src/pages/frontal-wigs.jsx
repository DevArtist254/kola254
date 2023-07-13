import {useEffect} from 'react';
import {loadFrontalWigsProductsAsync} from '../redux/products/product.actions';
import {connect} from 'react-redux';
import Cards from '../components/card-comp/cards.comp';

function FrontalWigs({
  loadFrontalWigsProducts,
  frontalWigsProducts,
  isloading,
}) {
  useEffect(() => {
    loadFrontalWigsProducts();
  }, [loadFrontalWigsProducts]);

  function addToCart(e) {
    console.log(`Yes`);
  }
  return isloading ? (
    <div style={{width: '100%', height: '100vh'}}>
      <h1>Loading data</h1>
    </div>
  ) : (
    <div className='main'>
      <div className='content'>
        <h1 className='dark head-main'>Frontal Wigs</h1>
        <Cards products={frontalWigsProducts} />
      </div>
    </div>
  );
}

const mapStateToProps = ({product}) => ({
  frontalWigsProducts: product.frontalWigsProducts,
  isloading: product.isloading,
});

const mapDispatchToProps = (dispatch) => ({
  loadFrontalWigsProducts: () => dispatch(loadFrontalWigsProductsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FrontalWigs);
