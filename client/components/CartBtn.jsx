import React from 'react';

function CartBtn(props) {
  return (
    <button id='cart-btn' onClick={props.proceedToCheckout}>
      <p>{props.totalItemsInCart}</p>
      <i class="material-icons">
shopping_cart
</i>
    </button>
  );
}

export default CartBtn;