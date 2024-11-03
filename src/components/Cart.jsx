import CartItem from './CartItem';
import Summary from './Summary';
import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
  
    return (
        <div className="w-full p-4 mt-[120px]">
            <div className="max-w-[1240px] mx-auto flex flex-col ss:flex-row py-4 justify-between">
                <div className="flex flex-col w-full justify-start">
                    <h1 className="text-2xl font-semibold mb-4">My Cart ({cartItems.length} Product)</h1>
                    {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <div className="flex flex-col ss:flex-row w-full mt-4 md:mt-0 md:ml-4 justify-end">
                    <Summary items={cartItems} />
                </div>
            </div>
        </div>
  );
};

export default Cart;