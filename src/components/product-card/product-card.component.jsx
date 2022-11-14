import Button from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <div className='name'>{name}</div>
        <div className='price'>${price}</div>
      </div>

      <Button buttonType='inverted'>Add To Cart</Button>
    </div>
  );
};

export default ProductCard;
