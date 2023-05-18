import Button from '../../ServiceElements/Button';
import LocationItem from './LocationItem/LocationItem';

const Locations = () => {
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
                    />
                    <Button 
                        text='Franchise'
                        className='btn_yellow-brd'
                        img={true}
                    />
                </div>
            </div>
        </section>
    )
}

export default Locations