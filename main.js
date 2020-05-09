let carts=document.querySelectorAll('.btn-primary');

let products = [
  {
    name: 'BỘ SẢN PHẨM 01',
    tag: 'BỘ SẢN PHẨM 01',
    price: 100.00 ,
    inCart: 0
  },
  {
    name: "BỘ SẢN PHẨM 02",
    tag: "BỘ SẢN PHẨM 02",
    price: 100.00 ,
    inCart: 0
  },
  {
    name: "BỘ SẢN PHẨM 03",
    tag: "BỘ SẢN PHẨM 03",
    price: 100.00 ,
    inCart: 0
  },
  {
    name: "BỘ SẢN PHẨM 04",
    tag: "BỘ SẢN PHẨM 04",
    price: 100.00 ,
    inCart: 0
  },
  {
    name: "BỘ SẢN PHẨM 05",
    tag: "BỘ SẢN PHẨM 05",
    price: 100.00 ,
    inCart: 0
  },
  {
    name: "BỘ SẢN PHẨM 06",
    tag: "BỘ SẢN PHẨM 06",
    price: 100.00 ,
    inCart: 0
  },
  {
    name: "BỘ SẢN PHẨM 07",
    tag: "BỘ SẢN PHẨM 07",
    price: 100.00 ,
    inCart: 0
  },
  {
    name: "BỘ SẢN PHẨM 08",
    tag: "BỘ SẢN PHẨM 08",
    price: 100.00 ,
    inCart: 0
  },
];

for (let i=0; i < carts.length; i++){
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers){
    document.querySelector('.cart span').textContent = productNumbers ;}
}

function cartNumbers(product) {
    console.log("The product clicked is", product);
    let productNumbers = localStorage.getItem('cartNumbers');
    

    productNumbers = parseInt(productNumbers);

    if( productNumbers ){
      localStorage.setItem('cartNumbers',productNumbers + 1);
      document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

  function setItems(product)
  {
    let cartItems = localStorage.getItem('productsIncart');
    cartItems= JSON.parse(cartItems);
    console.log("My CartItems are", cartItems);
    if(cartItems !=null){
      if(cartItems[product.tag] == undefined){
        cartItems = {
          ...cartItems,
          [product.tag]: product
        }
      }
      cartItems[product.tag].inCart += 1;
    } 
    else{
      product.inCart = 1;
      cartItems={
        [product.tag]: product
        }
    }
    
    localStorage.setItem("productsIncart", JSON.stringify(cartItems));
  }

  function totalCost(product){
    //console.log("The product price",product.price);
    let cartCost = localStorage.getItem('totalCost');
 
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost !=null){
      cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost", cartCost + 
      product.price);
    }
    else{
      localStorage.setItem("totalCost", product.price);
    }

}
function displayCart(){
  let cartItems = localStorage.getItem("productsInCart");
  cartItem = JSON.parse(cartItems);
  let productContainer=document.querySelector
  (".products");
  let cartCost = localStorage.getItem('totalCost');

  console.log(cartItems);
  if( cartItems && productContainer ){
    productContainer.innerHTML= '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="product">
        <ion-icon name="trash-outline"></ion-icon>
        <<img src="./img/${item.tag}.png" class="img-responsive img-fluid" alt="">
        <span> ${item.name}</span>
       </div> 
       <div class="price">${item.price}</div>
       <div class="quantity">
          <ion-icon name="chevron-up-circle-outline"></ion-icon>
          <span>${item.inCart}</span>
          <ion-icon name="chevron-down-circle-outline"></ion-icon>
        </div>
        <div class="total">
        ${item.inCart * item.price}
        </div>
       `
    });
    productContainer.innerHTML += `
      <div class="shopping-cartTotalContainer">
        <h4 class= "shopping-cartTotalTitle">
          shopping-cart Total 
        </h4>
        <h4 class="shopping-cartTotal">
          $${cartCost}
        </h4>
        `;
  }
}

  onLoadCartNumbers();
