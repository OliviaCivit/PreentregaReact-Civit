import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [products, setProducts] = useState (null)

    useEffect (() => {
        getProducts ('1')
        .then(Response => {
            setProducts (Response)
        })
        .catch(error => {
            console.error (error)
        })
    }, [])

        return(
            <div className="ItemDetailContainer">
                <ItemDetail {...products} />
            </div>
        )
}

export default ItemDetailContainer
