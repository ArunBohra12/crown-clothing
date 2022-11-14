import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <CrownLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>
            SHOP
          </Link>
          {currentUser === null ? (
            <Link to='/auth' className='nav-link'>
              SIGN IN
            </Link>
          ) : (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          )}
          <CartIcon />
        </div>

        {isCartOpen === true && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
