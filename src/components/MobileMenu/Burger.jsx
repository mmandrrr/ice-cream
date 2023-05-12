

const Burger = ({changeClassName}) => {
    return(
        <div onClick={() => changeClassName('header open')} className="burger">
            <span className="burger__item"></span>
            <span className="burger__item"></span>
            <span className="burger__item"></span>
        </div>
    )
}

export default Burger