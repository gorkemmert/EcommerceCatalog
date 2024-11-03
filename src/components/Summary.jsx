/* eslint-disable react/prop-types */


const Summary = ({ items }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);

  const shipping = 39.99;
  const total = subtotal + shipping;

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-semibold mb-4">Sipariş Özeti</h2>
      <div className="flex justify-between text-gray-700 mb-2">
        <span>Ürünün Toplamı</span>
        <span>{subtotal.toFixed(2)} $</span>
      </div>
      <div className="flex justify-between text-gray-700 mb-2">
        <span>Kargo Toplam</span>
        <span>{shipping.toFixed(2)} $</span>
      </div>
      <div className="flex justify-between text-xl font-semibold mt-4">
        <span>Toplam</span>
        <span>{total.toFixed(2)} $</span>
      </div>
      <button className="w-full bg-orange-500 text-white py-2 rounded mt-4">Sepeti Onayla</button>
    </div>
  );
};

export default Summary;