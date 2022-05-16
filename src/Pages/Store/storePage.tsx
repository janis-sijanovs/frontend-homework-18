import { useEffect, useState } from 'react';
import Item from '../../components/item';
import { getItems, StoreItemType } from '../../data/itemData';

const StorePage = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [items, setItems] = useState<StoreItemType[]>();

  useEffect(() => {
    const storeItems = getItems();
    setItems(storeItems);
  }, []);

  return (
    <div className="container">

      <div className="item-list">
        {items && items.map((item) => (
          <Item key={item.id} id={item.id} />
        )).slice(0, visibleCount)}
      </div>

      <footer className="footer">
        {items?.length !== visibleCount && (
        <button
          className="button"
          onClick={() => {
            if (items && items?.length - 9 > visibleCount) {
              setVisibleCount(visibleCount + 9);
            } else if (items) {
              setVisibleCount(items.length);
            }
          }}
        >
          Load More
        </button>
        )}
      </footer>

    </div>
  );
};

export default StorePage;
