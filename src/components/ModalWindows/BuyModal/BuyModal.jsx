import Form from '../FranchiseModal/Form/Form'

import iceCream from '../../../assets/products/ice-cream-min.png';
import iceCoffee from '../../../assets/products/ice-coffee-min.png';
import milkshake from '../../../assets/products/milkshake-min.png';


const BuyModal = ({modal,closeModal}) => {

    const setActiveProduct = (e) => {
        document.querySelectorAll('.buy-modal__item.active').forEach(item => {
            item.classList.remove('active');
        })
        if(e.target.classList.contains('buy-modal__item')) {
            e.target.classList.add('active');
        }
    }

    return(
        <div onClick={closeModal} className={`${modal} buy`}>
            <div className="buy-modal modal">
                <div onClick={closeModal} className="close-btn">
                    <span className="close"></span>
                    <span className="close"></span>
                </div>
                <h2 className='modal__title'>Buy now</h2>
                <div className="buy-modal__products">
                    <div onClick={(e) => setActiveProduct(e)} className='buy-modal__item'>
                        <img src={iceCream} alt="Ice-cream" />
                        ice cream   
                    </div>
                    <div onClick={(e) => setActiveProduct(e)} className='buy-modal__item'>
                        <img src={iceCoffee} alt="Ice-coffee" />
                        ice Coffee   
                    </div>
                    <div onClick={(e) => setActiveProduct(e)} className='buy-modal__item'>
                        <img src={milkshake} alt="milkshakecream" />
                        milkshake
                    </div>
                </div>
                <Form />
            </div>
        </div>
    )
}

export default BuyModal