let image = document.querySelector(".heart");




function makeItem(item) {
    return `<div class="itemWrap">
    <div class="heart">
    <i class="far fa-heart"></i></div>
    <a href="#" class="itemImages"><img src="${item.img}"></a>
    <a href="#"><p class="itemName">${item.title}</p></a>
    <a href="#"><p class="itemSeller">${item.seller}</p></a>
    <a href="#"><p class="itemStars">★★★★★</p></a>
    <a href="#"><p class="itemPrice">$${item.price}</p></a>
</div>`
}
let htmlStr = ''
items.results.forEach(item => {
   htmlStr += makeItem({
       img: item.Images[0].url_170x135,
       title: item.title,
       seller: item.Shop.shop_name,
       price: item.price
   })
})

document.querySelector(".contentWrapper").innerHTML = htmlStr