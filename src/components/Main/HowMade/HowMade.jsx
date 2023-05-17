import Button from '../../ServiceElements/Button';

import cow from '../../../assets/how-its-made/cow-min.png';
import cowIcon from '../../../assets/how-its-made/cow-icon.svg'
import iceIcon from '../../../assets/how-its-made/ice-cream-icon.svg'
import weightIcon from '../../../assets/how-its-made/weight-icon.svg'

const HowMade = () => {
    return(
        <section className="made">
            <div className="made__container container">
                <h3 className="made__subtitle subtitle">tradition and love</h3>
                <h2 className="made__title title">how it’s made?</h2>
                <div className="made__content">
                    <img src={cow} alt="Cow" className="made__image" />
                    <div className="made__description">
                        <div className='fz-16_reg'>
                            <article>Ice is a place where you will become not only a little happier, but also healthier. Health is the main value for us, and we follow it when creating our handmade desserts. </article>
                            <article>We use traditional recipes and 100% natural ingredients. Our products are so natural that they can be given to children from the age of three years. Sweets lovers can expect 55 types of ice cream, 15 types of coffee and 23 milkshakes. </article>
                            <article>This is enough to choose ice cream and coffee for any mood!</article>
                        </div>
                        <Button 
                            text='Read more'
                            className='btn_yellow-bg'
                            img={true}
                        />
                    </div>
                </div>
                <div className="made__stats">
                    <div className="made__stats-item">
                        <img src={cowIcon} alt="stats icon" />
                        <h4>721</h4>
                        <p className='fz-16_reg'>Aliquam ac dui vel dui vulputate consectetur. Mauris massa.</p>
                    </div>
                    <div className="made__stats-item">
                        <img src={weightIcon} alt="stats icon" />
                        <h4>16kg</h4>
                        <p className='fz-16_reg'>Aliquam ac dui vel dui vulputate consectetur. Mauris massa.</p>
                    </div>
                    <div className="made__stats-item">
                        <img src={iceIcon} alt="stats icon" />
                        <h4>84</h4>
                        <p className='fz-16_reg'>Aliquam ac dui vel dui vulputate consectetur. Mauris massa.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowMade