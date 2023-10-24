const products = [
    {
        id: '1',
        name: 'Trekking',
        price: 2000,
        img: 'https://media-front.elmostrador.cl/2022/11/trekking.jpg',
        stock: '5',
        description: 'Trekking'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 500)
        
    })
}

export const getProductsById = (productsId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.find(prod => prod.id === productsId))
        }, 500)
    })
}