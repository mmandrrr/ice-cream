import Button from "../../ServiceElements/Button"


const LocationModal = ({modal,closeModal}) => {
    return(
        <div onClick={closeModal} className={modal}>
            <div className="locs-modal modal">
                <div onClick={closeModal} className="close-btn">
                    <span className="close"></span>
                    <span className="close"></span>
                </div>
                <h2 className='modal__title'>Our Locations</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2sua!4v1684481316884!5m2!1sru!2sua" width="448" height="260" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <a target="_blank" href="https://www.google.com/maps/place/new+york/data=!4m2!3m1!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62?sa=X&ved=2ahUKEwiu3JT18oD_AhVkDRAIHW2qAZ0Q8gF6BAghEAE">
                    <Button 
                        text='Open map'
                        className='btn_yellow-bg'
                        img={false}
                    />
                </a>
            </div>
        </div>
    )
}

export default LocationModal