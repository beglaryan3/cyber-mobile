const productsList = {

    phones: {
        images: [
            "img1.png",
            "img2.png",
            "img3.png",
            "img4.png",
            "img5.png",
            "img6.png",
            "img7.png",
            "img8.png",
            "img9.png"
        ],
        name: [
            "Apple iPhone 14 Pro 512GB Gold ",
            "Apple iPhone 11 128GB White ",
            "Apple iPhone 11 128GB White",
            "Apple iPhone 14 Pro 1TB White",
            "Apple iPhone 14 Pro 1TB Gold",
            "Apple iPhone 14 Pro 128GB Deep Purple",
            "Apple iPhone 13 mini 128GB Pink",
            "Apple iPhone 14 Pro 256GB Space Black",
            "Apple iPhone 14 Pro 256GB Silver",
        ],
        price: ["$1437", "$510", "$550", "$1499", "$1399", "$1600", "$850", "$1399", "$1399"]
    },
    "new arrival": {
        images: [
            "img1.png",
            "img2.png",
            "img3.png",
            "img4.png",
            "img5.png",
            "img6.png",
            "img7.png",
            "img8.png",
        ],
        name: [
            "Apple iPhone 14 Pro Max 128GB Deep Purple ",
            "Blackmagic Pocket Cinema Camera 6k",
            "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
            "AirPods Max SilverStarlight Aluminium ",
            "Samsung Galaxy Watch6 Classic 47mm Black",
            "Galaxy Z Fold5 Unlocked  256GB  Phantom Black",
            "Galaxy Buds FEGraphite",
            "Apple iPad 9 10.2 64GB Silver "
        ],
        price: ["$900", "$2535", "$399", "$549", "$369", "$1799", "$100", "$398"]
    },
    "smart watches": {
        images: [
            "smart.png",
            "smart1.png",
            "smart2.png",
            "smart3.png",
            "smart4.png",
            "smart5.png",
            "smart6.png",
            "smart7.png",
            "smart8.png",
        ],
        name: [
            "Xiaomi Redmi Watch 5 Lite (M2352W1)",
            "Samsung Galaxy Watch Fit 3",
            "Apple Watch SE 44mm SB M/L",
            "Apple Watch SE 40mm SB S/M",
            "Apple Watch Ultra 2 2024",
            "Apple Watch S10 46mm With Sport Loop",
            "Apple Watch S10 46mm With Sport Band",
            "Apple Watch S10 42mm With Sport Loop",
            "Apple Watch S10 42mm With Sport Band",
        ],
        price: ["$65", "$60", "$400", "$350", "$1100", "$600", "$600", "$560", "$560"],
    },
    cameras: {
        images: [
            "cam1.jpg",
            "cam2.jpg",
            "cam3.jpg",
            "cam4.jpg",
            "cam5.jpg",
            "cam6.jpg",
            "cam7.jpg",
            "cam8.jpg",
            "cam9.jpg",
        ],
        name: [
            "FUJIFILM GFX100RF Digital Camera (Black)",
            "FUJIFILM GFX100RF Digital Camera (Silver)",
            "Canon EOS R5 Mark II Mirrorless Camera",
            "Canon EOS R6 Mark II Mirrorless Camera",
            "Canon PowerShot V1 Digital Camera",
            "Leica D-Lux 8 Digital Camera",
            "Sony RX100 VII Digital Camera Accessory Kit",
            "Nikon Z8 Mirrorless Camera with Basic Bundle",
            "FUJIFILM X-M5 Mirrorless Camera with XC 15-45mm f/3.5-5.6 Lens (Silver)",
        ],
        price: ["$4899", "$4899", "$3899", "$1999", "$899", "$1595", "$1498", "$3696 ", "$899"]
    },
    headphones: {
        images: [
            "head1.webp",
            "head2.webp",
            "head3.webp",
            "head4.webp",
            "head5.webp",
            "head6.webp",
            "head7.webp",
            "head8.webp",
            "head9.webp",
        ],
        name: [
            "Apple Airpods with USB-C Charging Case (4th Generation)",
            "JLab JBuds Air Pro In-Ear True Wireless Earbuds - Black",
            "Sony WH-CH520 On-Ear Wireless Bluetooth Headphones - Blue",
            "Beats Solo 4 On-Ear True Wireless Headphones - Black & Gold",
            "Beats Powerbeats Pro 2 True Wireless Earbuds - Jet Black",
            "Bose QuietComfort True Wireless Earbuds - White Smoke",
            "Bose QuietComfort SC Over-Ear Wireless Headphones - Black",
            "Apple AirPods Pro with USB-C MagSafe Case (2nd Generation)",
            "Sony WH-CH520 On-Ear Wireless Bluetooth Headphones - Black",
        ],
        price: ["$129", "$70", "$40", "$199", "$249", "$179", "$289", "$229", "$39"],
    },
    computers: {
        images: [
            "comp1.webp",
            "comp2.webp",
            "comp3.webp",
            "comp4.webp",
            "comp5.webp",
            "comp6.webp",
            "comp7.webp",
            "comp8.webp",
            "comp9.webp",
        ],
        name: [
            "Acer XC-1710 i3 8GB 256GB Desktop PC & 23.8in Monitor Bundle",
            "Stormforce Onyx R5 16GB 1TB Gaming PC 23.8in Monitor Bundle",
            "ASUS A3402 23.8in i3 8GB 512GB All-in-One PC",
            "Lenovo IdeaCentre AIO 3 27in Ryzen 5 16GB 1TB All-in-One PC",
            "CyberPowerPC Ryzen 5 16GB 1TB RTX4060 Gaming PC",
            "Stormforce 7290-6815 i5 32GB 1TB RTX 4060Ti Gaming PC",
            "CyberPowerPC Ryzen 5 16GB 500GB RTX3050 Gaming PC",
            "Acer Orion 3000 i7 16GB 1TB RTX4070 Super Gaming PC",
            "CyberPowerPC i5 16GB 1TB RTX4060 Gaming PC",
        ],
        price: ["$299", "$629", "$479", "$699", "$829", "$999", "$679", "$1599", "$879"]
    },
    gaming: {
        images: [
            "Gaming1.png",
            "Gaming2.png",
            "Gaming3.png",
            "Gaming4.png",
            "Gaming5.png",
            "Gaming6.png",
            "Gaming7.png",
            "Gaming8.png",
        ],
        name: [
            "Sony PlayStation 5 pro",
            "PS4 Playstation 4 Pro 1TB ",
            "PlayStation 5 Parental Controls",
            "Microsoft Xbox Series S",
            "Microsoft Xbox Series X 1TB игровая консоль",
            "Xbox Series X – 1TB Digital Edition (White)",
            "Microsoft Xbox One S",
            "Playstation 4 Slim Gold 1TB ",
        ],
        price: ["$500", "$850", "$900", "$400", "$800", "$1000", "$300", "$2000"]
    },

}

// 
const categoryesItems = [...document.querySelectorAll(".categpryes_item")]
const productsContainer = document.querySelector(".products_container")
const allProductsBtn = document.querySelector(".all_products")
const cartIcon = document.querySelector(".cart_icon")
const cart = document.querySelector(".cart")
const cartList = document.querySelector(".cart_list")
const totalPrice = document.querySelector(".total_price")
const totalItems = document.querySelector(".total_items")


categoryesItems.forEach(item => {
    item.addEventListener("click", function () {
        let key = item.textContent.toLocaleLowerCase().trim()
        createProducts(key, false)
    })
})
//stexcum  enq  productnery
function createProducts(key, all = false) {
    const productsObject = productsList[key]
    const { images, name, price } = productsObject
    let htmlContent = images.map((element, index) => {
        return `
        <div class="product_item">
            <img src="images/${key}/${element}" alt="" class="product_image">
            <p class="product_name">${name[index]} </p>
            <h2 class="product_price">${price[index]}</h2>
            <button class="product_btn">Buy Now</button>
        </div>
        `
    }).join(" ")

    if (all) {
        productsContainer.innerHTML += htmlContent
    }
    else {
        productsContainer.innerHTML = htmlContent
    }

    const allBuyBtn = document.querySelectorAll(".product_btn")
    allBuyBtn.forEach(btn => {
        btn.addEventListener("click", function () {
            const parentElement = btn.closest(".product_item")
            createCartItem(parentElement)
        })
    })

}
createProducts("new arrival", false)

//cuyc enq talis bolor productnery
allProductsBtn.addEventListener("click", function () {
    productsContainer.innerHTML = ""
    categoryesItems.forEach(item => {
        const key = item.textContent.toLowerCase().trim()
        createProducts(key, true)
    })
})
//cart
//icon-i clicki jamanak cuyc enq talis zambyuzy 
cartIcon.onclick = () => cart.classList.toggle("show")

//  zambyuxi mej avelacnum enq product

function createCartItem(parent) {
    const productName = parent.querySelector(".product_name").textContent
    const productImage = parent.querySelector(".product_image").src
    const productPrice = parent.querySelector(".product_price").textContent

    const allCartItems = [...document.querySelectorAll(".cart_item")]
    const sameItem = allCartItems.find(item => item.querySelector(".products_name").textContent === productName)

    if (sameItem) {
        const quantityElement = sameItem.querySelector(".quantity")
        let quantity = quantityElement.textContent
        quantity++
        quantityElement.textContent = quantity

    } else {
        cartList.innerHTML += `
        <li class="cart_item">
            <img src="${productImage}" alt="" class="cart_image">
            <div class="cart_itemInfo">
                <p class="products_name">${productName}</p>
                <h2 class="product_price">${productPrice}</h2>
                <div class="quantity_box">
                    <span class="quantity_minus">-</span>
                    <span class="quantity">1</span>
                    <span class="quantity_plus">+</span>
                </div>
            </div>
            <button class="cart_itemDelete"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
        </li>
        `
    }

    const allDeleteBtns = document.querySelectorAll(".cart_itemDelete")
    allDeleteBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const parent = btn.closest(".cart_item")
            parent.remove()

            updatePrice()
            updateItemsQuantity()
        })

    })



    updatePrice()
    updateItemsQuantity()

}


cartList.addEventListener("click", function (event) {
    if (event.target.classList.contains("quantity_plus") || event.target.classList.contains("quantity_minus")) {
        updateQuantity(event.target)
    }
})


function updatePrice() {
    const allCartItems = [...document.querySelectorAll(".cart_item")]

    const prices = allCartItems.map(item => {
        const itemPrice = parseInt(item.querySelector(".product_price").textContent.replace("$", ""))
        const itemQuantity = parseInt(item.querySelector(".quantity").textContent)
        return itemPrice * itemQuantity
    }).reduce((acc, price) => acc + price, 0)

    totalPrice.textContent = "$ " + prices
}

function updateItemsQuantity() {
    const allCartItems = [...document.querySelectorAll(".cart_item")]
    const itemsQuantity = allCartItems.map(item => {
        return parseInt(item.querySelector(".quantity").textContent)
    }).reduce((acc, quantity) => acc + quantity)
    totalItems.textContent = itemsQuantity + " Items"
}


function updateQuantity(element) {
    let parent = element.closest(".quantity_box")
    const quantityElement = parent.querySelector(".quantity")
    let quantityValue = parseInt(quantityElement.textContent)

    if (element.classList.contains("quantity_plus")) {
        quantityValue++
        quantityElement.textContent = quantityValue
    } else if (element.classList.contains("quantity_minus") && quantityValue > 1) {
        quantityValue--
        quantityElement.textContent = quantityValue
    }
    console.log(quantityValue);
    updateItemsQuantity()
    updatePrice()
}