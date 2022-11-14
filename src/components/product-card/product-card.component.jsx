import { useContext } from 'react';

import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <div className='name'>{name}</div>
        <div className='price'>${price}</div>
      </div>

      <Button buttonType='inverted' onClick={addProductToCart}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
