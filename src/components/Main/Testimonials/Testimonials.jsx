import heading from '../../../assets/testimonials/heading-img-min.png';
import client from '../../../assets/testimonials/profile-pic-min.png';

const Testimonials = () => {
    return(
        <section className="testimonials">
            <div className="testimonials__container container">
                <img src={heading} alt="Heading Picture" className="testimonials__heading" />
                <div className="testimonials__slider">
                    <div className="testimonials__wrapper">
                        <div className="testimonials__item">
                            <img src={client} alt="Client" />
                            <p className="testimonials__text">
                                1 love visiting your cafe. You prepare the most delicious ice cream in Los Angeles! In addition, you have beautiful serving, cozy atmosphere and polite staff.
                            </p>
                            <span className="testimonials__name">Emily, Los Angeles</span>
                        </div>
                        <div className="testimonials__item">
                            <img src={client} alt="Client" />
                            <p className="testimonials__text">
                                2 love visiting your cafe. You prepare the most delicious ice cream in Los Angeles! In addition, you have beautiful serving, cozy atmosphere and polite staff.
                            </p>
                            <span className="testimonials__name">Emily, Los Angeles</span>
                        </div>
                        <div className="testimonials__item">
                            <img src={client} alt="Client" />
                            <p className="testimonials__text">
                                3 love visiting your cafe. You prepare the most delicious ice cream in Los Angeles! In addition, you have beautiful serving, cozy atmosphere and polite staff.
                            </p>
                            <span className="testimonials__name">Emily, Los Angeles</span>
                        </div>
                    </div>
                    <div className="testimonials__dots">
                        <span className='active'></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>   
        </section>
    )
}

export default Testimonials