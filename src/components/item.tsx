import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AppDispatch, RootState } from '../app/store';
import { addMultiple } from '../slices/cartSlice';
import { getItem } from '../data/itemData';
import styles from '../modules/item.module.scss';

type ItemProps = {
    id: number;
  }

const Item = ({ id }: ItemProps) => {
  const [itemCount, setItemCount] = useState(0);
  const item = getItem(id);
  const language = useSelector((state: RootState) => state.language.currentLanguage);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="card">
      <img src={item?.imgSrc} alt="" />
      <p className="card-text">{language === 'eng' ? item?.titleEng : item?.titleLat}</p>
      <p className="card-text">
        {language === 'eng' ? 'Price' : 'Cena'}
        :&nbsp;
        {item?.price}
        $
      </p>

      <div className={styles.flexJustify}>
        <div className={styles.flex}>
          <button
            className="button button-counter"
            onClick={() => (itemCount > 0 ? setItemCount(itemCount - 1) : null)}
          >
            -
          </button>

          <p className="card-text">{itemCount}</p>

          <button
            className="button button-counter"
            onClick={() => setItemCount(itemCount + 1)}
          >
            +
          </button>
        </div>

        <button
          className="button"
          onClick={() => {
            dispatch(addMultiple({ id, count: itemCount }));
            setItemCount(0);
          }}
        >
          {language === 'eng' ? 'Add to Cart' : 'Pievienot Grozam'}
        </button>
      </div>
    </div>
  );
};

export default Item;
