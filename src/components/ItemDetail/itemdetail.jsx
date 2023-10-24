import ItemCount from '../ItemCount'

const ItemDetail = ({id, name, img, price, stock, description}) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="IdHeader">
                    {id}

                </h2>
                
                <h3 className="ItemHeader">
                    {name}
                </h3>
            </header>
            
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>

            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Precio: ${description}
                </p>
            </section>

            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ('Cantidad agregada')}/>
            </footer>

        </article>
    )
}

export default ItemDetail