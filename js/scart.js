let carts = document.querySelectorAll('.add-cart');

let products = [{
    name: " Men's Vintage Black Moto Varsity Jacket",
    tag: " menvintage",
    price: 2500,
    inCart:0
},


{
    name: " American Style Hip Hop Hoodies for Men's Spring",
    tag: " americanstyle",
    price: 2500,
    inCart:0
},
{
    name: " Double panel hoodie",
    tag: " doublepanelhoodie",
    price: 2500,
    inCart:0
},

{
    name: "Men Casual Long Sleeve Shirt",
    tag: " mencasual",
    price: 2500,
    inCart:0
},

{
    name: " Men Summer Shirt Short Sleeve",
    tag: " mensummer",
    price: 2500,
    inCart:0
},

{
    name: " Pu Leather Jacket Men Black Faux Motorcycle Biker Suede Outerwear",
    tag: "puleather",
    price: 2500,
    inCart:0
},

{
    name: " INFLATION Minimalism Washed Wide Leg Cargo Pants for Men",
    tag: " inflation",
    price: 2500,
    inCart:0
},

{
    name: " Men's Denim Jeans Shorts Summer Japanese Pants High Street",
    tag: " mendenim",
    price: 2500,
    inCart:0
}

];

for (let i=0; i < carts.length; i++)
{
    carts[i].addEventListener('click', () =>
    {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumber(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent =productNumbers;  
    }
}

function cartNumbers(product) {
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);


    if( productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+ 1);
        document.querySelector('.cart span').textContent =productNumbers+1;
    }
    else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent =1;
    }
        setItem(product);

    }

    function setItem(product){

        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        

        if(cartItems != null){
            if(cartItems[product.tag] == undefined)
            {
                cartItems={
                    ...cartItems,
                    [product.tag]: product
                }
            }
            cartItems[product.tag].inCart +=1;

        }
        else{
            product.inCart =1;
            cartItems={
                [product.tag]: product
            }
        }
        
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    }
    function displayCart() {
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
      
        let productContainer = document.querySelector(".products-containers .product__item__pic");
      
        if (cartItems && productContainer) {
          productContainer.innerHTML = '';
          Object.values(cartItems).forEach(item => {
            let productDiv = document.createElement("div");
            productDiv.classList.add("product__item");
      
            let closeIcon = document.createElement("ion-icon");
            closeIcon.setAttribute("name", "close-circle-outline");
      
            let productImage = document.createElement("img");
            productImage.src = `img/product/${item.tag}.jpg`; // Relative path
            productImage.alt = item.name; // Add alt text for accessibility
      
            let productName = document.createElement("span");
            productName.textContent = item.name;
      
            let productPrice = document.createElement("h5");
            productPrice.textContent = `Rs ${item.price}`;
      
            let productQuantity = document.createElement("input");
            productQuantity.setAttribute("type", "number");
            productQuantity.setAttribute("value", item.inCart);
            productQuantity.addEventListener("change", () => updateQuantity(item.tag, productQuantity.value));
      
            let productTotal = document.createElement("h5");
            productTotal.textContent = `Rs ${item.price * item.inCart}`;
      
            productDiv.appendChild(closeIcon);
            productDiv.appendChild(productImage);
            productDiv.appendChild(productName);
            productDiv.appendChild(productPrice);
            productDiv.appendChild(productQuantity);
            productDiv.appendChild(productTotal);
      
            productContainer.appendChild(productDiv);
          });
        }
      }
      
      // Call displayCart after the DOM is fully loaded
      document.addEventListener("DOMContentLoaded", function() {
        displayCart();
      });
      