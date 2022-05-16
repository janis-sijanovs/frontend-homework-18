import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeLanguage } from '../slices/languageSlice';
import { AppDispatch, RootState } from '../app/store';
import styles from '../modules/header.module.scss';

const Header = () => {
  const language = useSelector((state: RootState) => state.language.currentLanguage);
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <header>
      <nav className="navigation">

        <NavLink className="link" to="/store">Logo</NavLink>
        <div className={styles.flex}>

          <select
            defaultValue=""
            onChange={(e) => {
              dispatch(changeLanguage(e.target.value));
            }}
          >
            <option value="" disabled>{language === 'eng' ? 'Choose Language' : 'Izvēlies Valodu'}</option>
            <option value="eng">English</option>
            <option value="lat">Latviešu</option>
          </select>

          <div className="cart">
            <NavLink className="link" to="/cart">{language === 'eng' ? 'Cart' : 'Grozs'}</NavLink>
            {cart.length > 0 && (
            <div className="counter">
              {cart.length}
            </div>
            )}

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
