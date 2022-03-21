// let count = 0;
// const value = document.getElementById("quantity");
// document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

// document.querySelector(".plus-btn").addEventListener("click", function() {
//     count++;
//     if (count > 1) {
//         document.querySelector(".minus-btn").removeAttribute("disabled");
//         document.querySelector(".minus-btn").classList.remove("disabled")
//     }
//     value.textContent = count;
// });

// document.querySelector(".minus-btn").addEventListener("click", function() {
//     count--;
//     if (count < 2) {
//         document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
//     }
//     value.textContent = count;
// });


// const btn = document.querySelectorAll(".color");

// btn.forEach(function(btn) {
//     btn.addEventListener("click", function() {
//         btn.classList.toggle("active");
//     });
// })
let carts = document.querySelectorAll('.cart-btn');
console.log(carts);
let products = [{
        name: "Winter Sweater",
        tag: 'shop-1',
        price: 60.00,
        inCart: 0
    }, {
        name: "Denim Dresses",
        tag: "pexels-photo-54203",
        price: 55,
        inCart: 0
    },
    {
        name: "Empire Waist Dresses",
        tag: "pexels-photo-54203",
        price: 70,
        inCart: 0
    }, {
        name: "Pinafore Dresses",
        tag: "pexels-photo-54203",
        price: 60,
        inCart: 0
    },
    {
        name: "Winter Sweater",
        tag: 'product-4',
        price: 60.00,
        inCart: 0
    }, {
        name: "Denim Dresses",
        tag: "product-3",
        price: 55,
        inCart: 0
    },
    {
        name: "Empire Waist Dresses",
        tag: "xproduct-1",
        price: 70,
        inCart: 0
    }, {
        name: "Pinafore Dresses",
        tag: "product-1",
        price: 60,
        inCart: 0
    },
    {
        name: "Winter Sweater",
        tag: 'shop-1',
        price: 60.00,
        inCart: 0
    }, {
        name: "Denim Dresses",
        tag: "shop-2",
        price: 55,
        inCart: 0
    },
    {
        name: "Empire Waist Dresses",
        tag: "shop-3",
        price: 70,
        inCart: 0
    }, {
        name: "Pinafore Dresses",
        tag: "shop-4",
        price: 60,
        inCart: 0
    },
    {
        name: "Winter Sweater",
        tag: 'shop-5',
        price: 60.00,
        inCart: 0
    }, {
        name: "Denim Dresses",
        tag: "shop-6",
        price: 55,
        inCart: 0
    },
    {
        name: "Empire Waist Dresses",
        tag: "shop-7",
        price: 70,
        inCart: 0
    }, {
        name: "Pinafore Dresses",
        tag: "shop-8",
        price: 60,
        inCart: 0
    },
]
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadcCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.ca').textContent = productNumbers;

    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.ca').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.ca').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }


    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    console.log(cartItems);
    if (cartItems && productContainer) {

        productContainer.innerHTML = '';

        Object.values(cartItems).map(item => {
            console.log(item.tag);
            productContainer.innerHTML +=
                `
 
   <div class="col-md-2 col-lg-2 col-xl-2 bb">
                                    <img src="img/${item.tag}.jpg.webp" class="img-fluid rounded-3" alt="Cotton T-shirt">
                                </div>

                                <div class="col-md-3 col-lg-3 col-xl-3 ">
                                    <p class="lead fw-normal mb-2">${item.name}</p>
                                    <p>
                                         <div class="rate d-flex">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                                    </p>
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-2 ">
                                    <h5 class="mb-0 cart_price">$ ${item.price}</h5>
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <div class="cart_total-control">
                        <button class="btn minus-btn disabled dec-qtybtn" type="button" style="background:transparent;border:none;outline: none;">-</button>
                        <span class="quantity">${item.inCart}</span>
                        <button class="btn plus-btn inc-qtybtn" type="button" style="background:transparent;border:none;outline: none;">+</button>
                </div>
                                </div>

                                <div class="col-md-4 col-lg-3 col-xl-2 ">
                                    <h5 class="mb-0 cart_total"> Total: $ ${item.price * item.inCart}</h5>
                                    </h5>
                                </div>
                                <div class="col-md-1 col-lg-1 col-xl-1 spa" >
                                    <a href="" class="text-danger aa"><i class="fas fa-trash fa-lg "></i></a>
                                </div>

                                 `;

        });
        productContainer.innerHTML += `
         <div class="card mb-5 "  style="border: none !important;outline: none !important;">
                            <div class="card-body p-4 " >
                                <div class="float-end re" >
                                    <p class="mb-0 me-5 d-flex align-items-center ">
                                        <span class=" text-black me-2 ">Order total:</span> <span class="lead fw-normal ">$ ${cartCost}</span>
                                    </p>
                                </div>

                            </div>
                        </div>
        `

    }
}
onLoadcCartNumbers();
displayCart();