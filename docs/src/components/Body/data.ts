import '../../utils/greedy'
import { randomPrice } from '../../utils/greedy'

export const cardData = [
    {
        id: 'iphone',
        name: 'iPhone 14', 
        brand: 'Apple', 
        price: randomPrice(7000,8500),
        image: 'https://i.zst.com.br/thumbs/12/7/34/-855686960.jpg'
    },
    {
        id: 'galaxy',
        name: 'Galaxy S22 Ultra', 
        brand: 'Samsung', 
        price: randomPrice(5000,6500),
        image: 'https://samsungbr.vtexassets.com/arquivos/ids/331116-1200-auto?v=637873967324130000&width=1200&height=auto&aspect=true'
    },
    {
        id: 'headset',
        name: 'Headset Cloud II Wirelles', 
        brand: 'HyperX', 
        price: randomPrice(700,850),
        image: 'https://m.media-amazon.com/images/I/61IBJwpcb6L._AC_SY450_.jpg'
    },
    {
        id: 'mouse',
        name: 'Mouse Gamer G600', 
        brand: 'Logitech', 
        price: randomPrice(200,350),
        image: 'https://resource.logitech.com/content/dam/gaming/en/non-braid/antivenom-g600/g600-gallery-1-nb.png'
    },
    {
        id: 'teclado',
        name: 'Teclado Mecânico Surara Pro', 
        brand: 'Redragon', 
        price: randomPrice(300, 450),
        image: 'https://m.media-amazon.com/images/I/617fOo46ISL._AC_SY450_.jpg'
    },
    {
        id: 'gpu',
        name: 'Placa de Vídeo RTX 3060', 
        brand: 'Asus', 
        price: randomPrice(3000, 4500),
        image: 'https://cdn.dooca.store/107/products/n7aenxgs8o3qnus3kzh7lxtxy4jnkyiznzkk.jpg?v=1662504345'
    }
]       