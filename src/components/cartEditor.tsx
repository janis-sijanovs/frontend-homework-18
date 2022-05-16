import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../slices/cartSlice';
import { AppDispatch, RootState } from '../app/store';

type ItemProps = {
    id: number;
  }

const CartEditor = ({ id }: ItemProps) => {
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      className="flex"
    >
      <button
        className="button button-counter"
        aria-label="Remove from Cart"
        onClick={() => dispatch(remove(id))}
      >
        -
      </button>

      {cart.find((searchItem) => searchItem.id === id)?.count || 0}

      <button
        className="button button-counter"
        aria-label="Add to Cart"
        onClick={() => dispatch(add(id))}
      >
        +
      </button>
    </div>
  );
};

export default CartEditor;
