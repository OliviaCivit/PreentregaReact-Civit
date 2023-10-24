import { useEffect, useState } from "react";
import ItemList from '../ItemList/itemlist';
import {getProducts} from '../components/asyncMock'



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])

    useEffect (() => {
        getProducts ()
        .then (Response => {
            setProducts (Response)
        })
        .catch(error => {
            console.error (error)
        })
    }, [] )

    return (
        <div>
            <h1> {greeting} </h1>
            <ItemList products = {products}/>
        </div>
    )


}
 

export default ItemListContainer;