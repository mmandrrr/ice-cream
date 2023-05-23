
const HowMadeModal = ({modal,closeModal}) => {
    return(
        <div onClick={closeModal} className={modal}>
            <div className="made-modal modal">
                <div onClick={closeModal} className="close-btn">
                    <span className="close"></span>
                    <span className="close"></span>
                </div>
                <h2 className='modal__title'>How it’s made?</h2>
                <div className="made__video"></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                </p>
            </div>
        </div>
    )
}

export default HowMadeModal