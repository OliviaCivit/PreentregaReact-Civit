const Item = ({id, name, img, price}) => {

    return(
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
            </section>

            <footer className="ItemFooter">
                <button className="Option"> Ver detalles </button>
            </footer>

        </article>
    )
}

export default Item;