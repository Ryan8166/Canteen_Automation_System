if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
var total = 0;
function ready() {
  var removeCartItemButtons = document.getElementsByClassName("removeBtn");
 
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }

  var addToCartButtons = document.getElementsByClassName("addToCartbutton");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  document
    .getElementsByClassName("purchaseBtn")[0]
    .addEventListener("click", purchaseClicked);


}


function purchaseClicked() {
  
  let cartItems = document.getElementsByClassName("cartItems")[0];
  // let cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  // let cartItemsQty = cartItems.getElementsByClassName("cart-quantity-input");
  // let cartItemPrice = cartItem.getElementsByClassName("cart-price");
  
  let inputTotal = document.querySelector('#total')
    inputTotal.value=total;
  while (cartItems.hasChildNodes()) {
    // ord.concat(cartItems.innerHTML + " , ")
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
  document.cookie = "Total ="+total;
}

//Function to Remove items from cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  
  let cartcount = document.getElementById("cart-count");
  let cart_count = parseInt(cartcount.value);
  cartcount.value = cart_count - 1;
  updateCartTotal();
}

//Function to update Quatity
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

//Function to add To cart when Clicked
function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("item-price")[0].innerText.slice(3);
  var imageSrc = shopItem.getElementsByClassName("item-image")[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();

}

//Function to Add Item ro Cart
function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");

  var cartItems = document.getElementsByClassName("cartItems")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
  let cartcount = document.getElementById("cart-count");
  let cart_count = parseInt(cartcount.value);
  cartcount.value = cart_count + 1;
  var cartRowContents = `
          <div class="cart-item cart-column">
              <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
              <span class="cart-item-title">${title}</span>
          </div>
          <span class="cart-price cart-column">Rs ${price}</span>
          <div class="cart-quantity cart-column">
              <input class="cart-quantity-input" type="number" value="1">
              <button class="removeBtn btn btn-danger" type="button">Remove</button>
          </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("removeBtn")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

//Function to update Total Ampunt in cart
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cartItems")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  total=0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("Rs ", ""));
    // var price = parseFloat(priceElement.innerText.slice(3));
    var quantity = quantityElement.value;
    total += price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "Rs " + total;
  document.getElementById("cart-total-amt").value = total;
}




