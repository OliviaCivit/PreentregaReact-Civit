const products = [
    {
        id: '1',
        name: 'Trekking',
        price: 2000,
        img: 'https://media-front.elmostrador.cl/2022/11/trekking.jpg',
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