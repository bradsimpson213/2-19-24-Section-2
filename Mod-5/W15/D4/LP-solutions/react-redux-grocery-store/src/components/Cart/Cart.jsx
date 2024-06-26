//!!START SILENT
import { useSelector, useDispatch } from 'react-redux';
import { selectAllCartItems, reset } from '../../store/cart';
//!!END
import CartItem from './CartItem';
import './Cart.css';

function Cart() {
  //!!START SILENT
  const dispatch = useDispatch();
  const cartItems = useSelector(selectAllCartItems);
  //!!END
  //!!ADD
  // const cart = {};
  // const produce = {};

  // const cartItems = Object.values(cart)
    // .map(item => {
      // return {
        // ...item,
        // ...produce[item.id]
      // };
    // });
  //!!END_ADD

  if (!cartItems || !cartItems.length) return (
    <div className="cart">
      No items in the cart. Start selecting items to purchase.
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(
      "Purchased the following:\n" +
      `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
    );
    //!!START SILENT
    dispatch(reset());
    //!!END
  }

  return (
    <div className="cart">
      <ul>
        {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button type="submit">Purchase</button>
      </form>
    </div>
  )
}

export default Cart;
