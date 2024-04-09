const anaDiv = document.querySelector('.mostSalesBox')

function getCartData() {
    anaDiv.innerHTML = ``
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.forEach((item, index) => {
    let box = document.createElement("div");
    box.className = "productCard";
    box.innerHTML = `
            <img
              src=${item.thumbnail}
              alt=""
              style="width:100%;height:100px"
            />
            <div class="cardDesc">
              <h3>${item.title}</h3>
              <p>${item.price}</p>
              <button class="cartBtn" onclick="deleteItem(${index})">Sil</button>
            </div>
            `;
    anaDiv.appendChild(box);
  });
}


function deleteItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1)
    localStorage.setItem('cart',JSON.stringify(cart))
    getCartData()
}

getCartData()
