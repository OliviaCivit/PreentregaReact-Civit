import Item from '../Item/item'

const itemlist = ({products}) => {
    return(
        <div className="ListGroup">
            {products.map (prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default itemlist