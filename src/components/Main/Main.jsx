import Button from '../ServiceElements/Button.jsx';

import plate from '../../assets/main-screen/plate-min.png';
import arrow from '../../assets/utility/arrow-with-bar-white.svg';

const Main =( )=> {
    return(
        <main className="main">
            <section className="heading">
                <div className="container heading__container">
                    <h1 className="heading__title">
                        ice cream made with <span>passion</span>
                    </h1>
                    <div className="heading__buttons">
                        <Button 
                            text = 'Products'
                            className = 'btn_yellow-brd'
                            img = {false}
                        />
                        <Button 
                            text = 'How it`s made?'
                            className = 'btn_no-brd'
                            img = {false}
                        />
                    </div>
                    <div className="heading__gen-info">
                        <img src={plate} alt="plate with ice-cream" />
                        <p className="heading__text fz-14_reg">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime repudiandae illo ratione veritatis ab. A, sapiente accusamus.
                            <img src={arrow} alt="arrow right" />
                        </p>
                    </div>
                    <div className="heading__locations">
                        <div className="heading__cafes-count">
                            <span>16</span>
                            cafes
                        </div>
                        <div className="heading__cafes-count">
                            <span>23</span>
                            food trucks
                        </div>
                    </div>
                </div>

                <span className="heading__dots"></span>
                <span className="heading__ice-cream"></span>
            </section>
        </main>
    )
}

export default Main