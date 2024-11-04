import React, { useMemo } from "react";

const Summary = ({ items }) => {

  // Memoize calculations to avoid recalculating on every render
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price, 0), [items]);
  const shipping = 39.99;
  const total = useMemo(() => subtotal + shipping, [subtotal]);

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      <div className="flex justify-between text-gray-700 mb-2">
        <span>Total product price</span>
        <span>{subtotal.toFixed(2)} $</span>
      </div>
      <div className="flex justify-between text-gray-700 mb-2">
        <span>Shipping price</span>
        <span>{shipping.toFixed(2)} $</span>
      </div>
      <div className="flex justify-between text-xl font-semibold mt-4">
        <span>Total price</span>
        <span>{total.toFixed(2)} $</span>
      </div>
      <button className="w-full bg-orange-500 text-white py-2 rounded mt-4">Sepeti Onayla</button>
    </div>
  );
};

// Memoize Summary component to avoid re-renders unless items change
export default React.memo(Summary);
