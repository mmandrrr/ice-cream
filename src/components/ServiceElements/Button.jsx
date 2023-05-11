import arrow from '../../assets/utility/arrow-no-bar.svg'

const Button = ({text,className,img}) => {
    return(
        <button className={`btn ${className}`}>
            {text}
            {img ? <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5.95 5L1 9" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> 
                    : null}
        </button>
    )
}

export default Button