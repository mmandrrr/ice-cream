import ProductItem from './ProductItem/ProductItem';

import { productData } from './productsData';

const Products = () => {

    const productList = productData.map(({id,title,img,description},i) => {
        return(
            <ProductItem 
                id={id}
                title={title}
                img={img}
                description={description}
                key={i}
            />
        )
    })

    return(
        <section id='products' className="products">
            <div className="products__container container">
                <h3 className="products__subtitle subtitle">100% natural</h3>
                <h2 className="products__title title">Products</h2>
                <div className="products__wrapper">
                    {productList}
                </div>
            </div>
        </section>
    )
}

export default Products