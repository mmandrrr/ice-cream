

const Products = () => {
    return(
        <section className="products">
            <div className="products__container container">
                <h3 className="products__subtitle subtitle">100% natural</h3>
                <h2 className="products__title title">Products</h2>
                <div className="products__wrapper">
                    <div className="products__item">
                        <img src="" alt="Product Image" className="products__img" />
                        <h4 className="products__item-title">ice cream</h4>
                        <p className="products__description fz-16_reg">
                            Soft ice cream with a delicate taste. Made with milk, cream, sugar and natural stabilizer
                        </p>
                        <img src="" alt="arrow" className="products__arrow" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products