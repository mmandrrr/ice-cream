import { useState } from 'react';

import Button from '../../ServiceElements/Button';
import LocationItem from './LocationItem/LocationItem';
import LocationModal from '../../ModalWindows/LocationModal/LocationModal';

import { openModal } from '../../../services/openModal';
import { closeModal } from '../../../services/closeModal';
import FranchiseModal from '../../ModalWindows/FranchiseModal/FranchiseModal';



const Locations = () => {

    const [modalLocs, setModalLocs] = useState('modal__wrapper');
    const [modalFrnch, setModalFrnch] = useState('modal__wrapper');

    return(
        <section id='locs' className="locs">
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
                        openModal={() => openModal(setModalLocs,'modal__wrapper open-locs')}
                    />
                    <Button 
                        text='Franchise'
                        className='btn_yellow-brd'
                        img={true}
                        openModal={() => openModal(setModalFrnch,'modal__wrapper open-frnch')}
                    />
                </div>
            </div>
            <LocationModal 
                modal={modalLocs}
                closeModal={(e) => closeModal(e,setModalLocs,'modal__wrapper','modal__wrapper','close-btn','close')}
            />
            <FranchiseModal
                modal={modalFrnch}
                closeModal={(e) => closeModal(e,setModalFrnch,'modal__wrapper','modal__wrapper','close-btn','close')}
             />
        </section>
    )
}

export default Locations