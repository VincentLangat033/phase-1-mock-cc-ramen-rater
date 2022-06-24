// write your code here

document.addEventListener('DOMContentLoaded',function(e){
    e.preventDefault;
    addImages();
})
const ramenDetails= document.getElementById('ramen-detail')

function addImages(){
    fetch('http://localhost:3000/ramens')
    .then(res =>res.json())
    .then(data =>{
        data.forEach(ramens=>{
            // console.log(ramen)
            const img1 = document.createElement('img')
            img1.src = ramens.image
            img1.style.height= '200px'
            img1.style.width = '150px'
            ramenDetails.appendChild(img1)
            
    img1.addEventListener('click', function(e){
        e.preventDefault
        const h2 = document.getElementById('name')
        const restaurant = document.getElementById('restaurant')
        h2.innerText = ramens.name
        restaurant.innerText = ramens.restaurant

    })

        })
    })
}
conat 
function updateImage(ramens){
    const newImage = document.getElementById('ramen-detail');
    const ramenName= document.getElementById('new-name');
    const ramenRestaurant= document.getElementById('new-restaurant');
    const ramenDetailImage= document.getElementById('new-image');
    const ramenRating = document.getElementById('new-rating')
  
   
    newImage.src = ramens.image;

    ramenName.innerText = ramens.name;
    ramenRestaurant.innerText = ramens.restaurant;
    ramenDetailImage.src = ramens.image;
    ramenDetailImage.alt = ramens.name;
    ramenRating.innerText = ramens.rating;
}


