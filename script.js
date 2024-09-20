const ProductsData = [
    {
        img: './img/card1.png',
        title: '3D Soft Curves',
        user: '🥵 frodo beginse',
        price: '0.85 ETH',
    },
    {
        img: './img/pidoras.png',
        title: 'The mystery of the black square',
        user: ' 🤬 Jenny Wilson',
        price: '0.24 ETH',
    },
    {
        img: './img/negr.png',
        title: 'Pink Cloud ☁️',
        user: ' 🤢 Floyd Miles',
        price: '0.3 ETH',
    },
    {
        img: './img/52555.png',
        title: '3D Ethereum',
        user: '🤡 Jane Cooper',
        price: '0.12 ETH',
    },
]





const wrapper = document.querySelector('.live__wrapper1')
const cards = ProductsData.map(card => {
    return `
          <div class="live__card">
                        <img src=${card.img} alt="" class="live__card-img">

                        <div class="live__card-box">
                            <h3>${card.title}</h3>

                            <div>
                                <p>${card.user}</p>
                                <p>
                                    Current Bid <br>
                                    <b>${card.price}</b>
                                </p>
                            </div>
                        </div>
                    </div>
    `
}).join('')
wrapper.innerHTML = cards








const ProductsData2 = [
   
    {
        img: './img/1.png',
        title: '3D Ethereum',
        user: '🤡 Jane Cooper',
        price: '0.12 ETH', 
    },
    {
        img: './img/2.png',
        title: '3D Ethereum',
        user: '🤡 Jane Cooper',
        price: '0.12 ETH', 
    },
    {
        img: './img/3.png',
        title: '3D Ethereum',
        user: '🤡 Jane Cooper',
        price: '0.12 ETH', 
    },
    {
        img: './img/4.png',
        title: '3D Ethereum',
        user: '🤡 Jane Cooper',
        price: '0.12 ETH', 
    },
    {
        img: './img/5.png',
        title: '3D Ethereum',
        user: '🤡 Jane Cooper',
        price: '0.12 ETH', 
    },
    {
        img: './img/6.png',
        title: '3D Ethereum',
        user: '🤡 Jane Cooper',
        price: '0.12 ETH', 
    },
    {
        img: './img/7.png',
        title: '3D Ethereum',
        user: '🤡 Jane Cooper',
        price: '0.12 ETH', 
    },
    {
        img: './img/8.png',
        title: '3D Ethereum',
        user: '🤡 Jane Cooper',
        price: '0.12 ETH', 
    },
    {
        img: './img/9.png',
        title: '3D Ethereum',
        user: '🤡 Jane Cooper',
        price: '0.12 ETH', 
    },
    {
        img: './img/10.png',
        title: '3D Ethereum',
        user: '🤡 Jane Cooper',
        price: '0.12 ETH', 
    },
    {
        img: './img/11.png',
        title: '3D Ethereum',
        user: '🤡 Jane Cooper',
        price: '0.12 ETH', 
    },
     {
        img: './img/12.png',
        title: '3D Ethereum',
        user: '🤡 Jane Cooper',
        price: '0.12 ETH', 
    },


]

const wrapper2 = document.querySelector('.live__wrapper2')
const cards2 = ProductsData2.map(card => {
    return `
          <div class="live__card">
                        <img src=${card.img} alt="" class="live__card-img">

                        <div class="live__card-box">
                            <h3>${card.title}</h3>

                            <div>
                                <p>${card.user}</p>
                                <p>
                                    Current Bid <br>
                                    <b>${card.price}</b>
                                </p>
                            </div>
                        </div>
                    </div>
    `
}).join('')
wrapper2.innerHTML = cards2



