import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../app/store';
import { clear } from '../../slices/cartSlice';
import CartEditor from '../../components/cartEditor';
import { getItem } from '../../data/itemData';
import styles from '../../modules/cart.module.scss';

const CartPage = () => {
  const language = useSelector((state: RootState) => state.language.currentLanguage);
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1 className="heading">{language === 'eng' ? 'Your Cart' : 'Jūsu Grozs'}</h1>
      <div className={styles.cardList}>

        {cart.map((item) => {
          const itemData = getItem(item.id);
          const count = cart.find((searchItem) => searchItem.id === item.id)?.count;

          return (
            <div className={styles.card} key={itemData?.id}>

              <div className={styles.flex}>
                <img className={styles.img} src={itemData?.imgSrc} alt="" />
                <h2 className="title">{language === 'eng' ? itemData?.titleEng : itemData?.titleLat}</h2>
              </div>

              <div className={styles.flexColumn}>

                <p>
                  {language === 'eng' ? 'Price per Unit' : 'Cena par Vienību'}
                  :&nbsp;
                  {' '}
                  {itemData?.price}
                  $
                </p>

                <div className={styles.smallFlex}>
                  <p>
                    {language === 'eng' ? 'Amount' : 'Daudzums'}
                    :&nbsp;
                  </p>
                  <CartEditor id={item.id} />
                </div>

                <p>
                  {language === 'eng' ? 'Total' : 'Kopā'}
                  :&nbsp;
                  {' '}
                  {!!count && itemData && (count * itemData?.price).toFixed(2)}
                  $
                </p>

              </div>
            </div>
          );
        })}
      </div>

      <p>
        {language === 'eng' ? 'Total' : 'Kopā'}
        :&nbsp;
        {' '}
        {cart.reduce((prev, curr) => prev + curr.count * (getItem(curr.id)?.price || 0), 0).toFixed(2)}
        $
      </p>

      <button
        className="button"
        onClick={() => {
          dispatch(clear());
          navigate('/success');
        }}
        disabled={!cart.length}
      >
        {language === 'eng' ? 'Purchase' : 'Pirkt'}
      </button>
    </div>
  );
};

export default CartPage;
