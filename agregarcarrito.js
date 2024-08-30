const product = [
    {
        id: 0,
        image: 'image/1.jpg',
        title: 'Volcado de piña',
        price: 20,
    },
    {
        id: 1, 
        image: 'image/2.jpg',
        title: 'Queque frio fresa',
        price: 20, 
    },
    {
        id: 2, 
        image: 'image/3.jpg',
        title: 'Queque ',
        price: 30, 
    },
    {
        id: 3, 
        image: 'image/4.jpg',
        title: 'Queque ',
        price: 30, 
    },

    
    {
        id: 5, 
        image: 'image/6.jpg',
        title: 'Queque ',
        price: 30, 
    },
    {
        id: 6, 
        image: 'image/7.jpg',
        title: 'Queque ',
        price: 30, 
    },
    {
        id: 7, 
        image: 'image/8.jpg',
        title: 'Queque',
        price: 30, 
    },
    {
        id: 8, 
        image: 'image/9.jpg',
        title: 'Queque',
        price: 30, 
    },

    {
        id: 9, 
        image: 'image/10.jpg',
        title: 'Queque ',
        price: 30, 
    },
    {
        id: 10, 
        image: 'image/11.jpg',
        title: 'Queque ',
        price: 30, 
    },
    {
        id: 11, 
        image: 'image/12.jpg',
        title: 'Queque ',
        price: 30, 
    },
    {
        id: 12, 
        image: 'image/13.jpg',
        title: 'Queque ',
        price: 30, 
    },
    {
        id: 13, 
        image: 'image/14.jpg',
        title: 'Queque ',
        price: 30, 
    },
    {
        id: 14, 
        image: 'image/15.jpg',
        title: 'Queque ',
        price: 30, 
    },
    {
        id: 15, 
        image: 'image/16.jpg',
        title: 'Queque ',
        price: 30, 
    },
    {
        id: 16, 
        image: 'image/17.jpg',
        title: 'Queque',
        price: 30, 
    },
    {
        id: 17, 
        image: 'image/18.jpg',
        title: 'Queque ',
        price: 30, 
    },
  


];

// Si estás buscando eliminar elementos duplicados en `product`, podrías querer usar un Set, pero esto no es necesario si los IDs son únicos.
const categories = [...new Set(product.map(item => JSON.stringify(item)))].map(item => JSON.parse(item));

let i = 0;

document.getElementById('root').innerHTML = categories.map(item => {
    const { image, title, price } = item;
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}' alt='${title}' />
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>₡ ${price}.000</h2>
                <button onclick='addtocart(${i++})'>Agregar a carrito</button>
            </div>
        </div>
    `;
}).join('');

var cart = [];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart(); // Actualiza el carrito después de la eliminación
}

function displaycart() {
    let total = 0;

    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Su carrito está limpio";
        document.getElementById("total").innerHTML = "₡0.00";
    } else {
        const cartHTML = cart.map((item, index) => {
            const { image, title, price } = item;
            total += price; // Calcula el total
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${image}' alt='${title}' />
                    </div>
                    <p style='font-size:12px;'>Título: ${title}</p>
                    <h2 style='font-size: 15px;'>₡ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>
            `;
        }).join('');
        document.getElementById('cartItem').innerHTML = cartHTML;
        document.getElementById("total").innerHTML = `₡${total}.00`;
    }

    // Actualiza el contador del carrito
    document.getElementById("count").innerHTML = cart.length;
}


