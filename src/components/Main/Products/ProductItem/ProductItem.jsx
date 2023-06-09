

const ProductItem = ({id,img,title,description}) => {
    return(
        <div id={id} className="products__item">
            <img src={img} alt="Product Image" className="products__img" />
            <h4 className="products__item-title">{title}</h4>
            <p className="products__description fz-16_reg">
                {description}
            </p>
            <a href="#" className='products__arrow'>
                <svg width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.9745 8.5956C41.365 8.20507 41.365 7.57191 40.9745 7.18138L34.6106 0.817421C34.22 0.426897 33.5869 0.426897 33.1963 0.817421C32.8058 1.20795 32.8058 1.84111 33.1963 2.23163L38.8532 7.88849L33.1963 13.5453C32.8058 13.9359 32.8058 14.569 33.1963 14.9596C33.5869 15.3501 34.22 15.3501 34.6106 14.9596L40.9745 8.5956ZM0.0327148 8.88849H40.2674V6.88849H0.0327148V8.88849Z" fill="#131313"/>
                </svg>
            </a>
        </div>
    )
}

export default ProductItem