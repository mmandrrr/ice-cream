import Form from '../FranchiseModal/Form/Form'

const BuyModal = ({modal,closeModal}) => {
    return(
        <div onClick={closeModal} className={modal}>
            <div className="buy-modal modal">
                <div onClick={closeModal} className="close-btn">
                    <span></span>
                    <span></span>
                </div>
                <h2 className='modal__title'>Buy now</h2>
                <Form />
            </div>
        </div>
    )
}

export default BuyModal