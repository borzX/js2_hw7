const cartCards = document.querySelector('.bucket');


const dataObjects = "/data.json";

const secFuture = document.querySelector('.cards__wrapper');
secFuture.addEventListener('mouseover', (event) => {
    if (event.target.className == 'item-img__hover-btn'){
        event.target.onclick = () =>{
            let elementForCart = dataObjects[event.target.id];
            // console.log(elementForBucket);
            cartCards.insertAdjacentHTML('beforeend', `
            <div class="card">
            <img src="${elementForCart.img}" alt="${elementForCart.title}" class="photo" />
            <div class="info">
              <h2 class="inho__heading">${elementForCart.title}</h2>
              <div class="info__content">
                <p class="info__content-text">
                  Price: <span class="color-pink">${elementForCart.price}</span>
                </p>
              </div>
              <button class="button-close">
                <img class="img-close" src="./img/cross.svg" alt="close">
              </button>
            </div>
          </div>
            `
            );        
        };     
    };
});


const buttonAllProducts = document.querySelector('.btn-browse');
buttonAllProducts.addEventListener('click', (ev) => {
    dataObjects.forEach(element => {
        bucketWithCards.insertAdjacentHTML('beforeend', `
        <div class="card">
        <img src="${element.img}" alt="${element.title}" class="photo" />
        <div class="info">
          <h2 class="inho__heading">${element.title}</h2>
          <div class="info__content">
            <p class="info__content-text">
              Price: <span class="color-pink">${element.price}</span>
            </p>
          </div>
          <button class="button-close">
            <img class="img-close" src="./img/cross.svg" alt="close">
          </button>
        </div>
      </div>
        `
        );
    });
});
 
bucketWithCards.addEventListener('mouseover', (event) => {
  if (event.target.className === 'button-close' || event.target.className === 'img-close'){
    event.target.onclick = () =>{
      event.target.closest('.card').remove();
    };    
  };
});