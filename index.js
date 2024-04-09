const anaDiv = document.querySelector(".mostSalesBox");
const count = document.querySelector('.alo')

let db 
function getAllData() {
  axios.get("https://dummyjson.com/products").then((res) => {
    db = res.data.products;
    db.forEach((item) => {
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
              <button class="cartBtn" onclick="addToCart(${item.id})">Sebete ekle</button>
            </div>
            `
            anaDiv.appendChild(box)
    });
  });
}
let cart = JSON.parse(localStorage.getItem('cart'))
if(cart.length != 0){
  count.innerHTML = cart.length
} else {
  count.style.display = 'none'
}

function addToCart (id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}

getAllData();


