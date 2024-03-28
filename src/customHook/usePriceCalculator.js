import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const usePriceCalculator = (cartItems) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { products } = useSelector(state => state.productInfo);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const currentDate = new Date();
      const price = cartItems.map(({ productId, qty, size, color }) => {
        const product = products?.find(item => item._id === productId);
        if (product) {
          const variation = product.variations.find(variation =>
            variation.color === color &&
            variation.sizes.find(s => s.size === size)
          );
          if (variation) {
            const sizeObject = variation.sizes.find(s => s.size === size);
            // Checking the sales price is available and the current date is within the sales period
            if (sizeObject.salesPrice && new Date(sizeObject.salesStartDate) <= currentDate && new Date(sizeObject.salesEndDate) >= currentDate) {
              return sizeObject.salesPrice * qty;
            } else {
              return product.price * qty;
            }
          }
        }
        return 0;
      });
      return price.reduce((acc, curr) => acc + curr, 0);
    };

    setTotalPrice(calculateTotalPrice());
  }, [cartItems, products]);

  return totalPrice;
};

export default usePriceCalculator;
