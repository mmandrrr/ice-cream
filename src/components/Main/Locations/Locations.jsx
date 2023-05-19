import Button from '../../ServiceElements/Button';
import LocationItem from './LocationItem/LocationItem';
import LocationModal from '../../ModalWindows/LocationModal/LocationModal';
import { useState } from 'react';

const Locations = () => {

    const [modal, setModal] = useState('modal__wrapper');

    const openModal = () => {
        setModal('modal__wrapper open');
    }

    const closeModal = () => {
        setModal('modal__wrapper');
    }

    return(
        <section className="locs">
            <div className="locs__container container">
                <div className="locs__wrapper">
                    <LocationItem />
                    <LocationItem />
                    <LocationItem />
                </div>
                <div className="locs__btns">
                    <Button 
                        text='Our Locations'
                        className='btn_yellow-bg'
                        img={true}
                        openModal={openModal}
                    />
                    <Button 
                        text='Franchise'
                        className='btn_yellow-brd'
                        img={true}
                    />
                </div>
            </div>
            <LocationModal 
                modal={modal}
                closeModal={closeModal}
            />
        </section>
    )
}

export default Locations