import { useEffect, useState } from 'react';

import heading from '../../../assets/testimonials/heading-img-min.png';
import TestimonialItem from './TestimonialItem/TestimonialItem';

import { Slider } from '../../../services/slider';
import { testimonialsData } from './testimonialsData';


const Testimonials = () => {

    const [translateId, setTranslateId] = useState(0),
           slider = new Slider();
    let translate = slider.translateWrapper(translateId),
        wrapperWidth = slider.returnWrapperWidth();

    const paint = (i) => {
        slider.paintDot(i);
    }

    const changeSlide = (e) => {
        setTranslateId(e.target.id);
        paint(e.target.id);
    }

    const dots = slider.createDots().map((item,i) => {
        return(
            <Dot 
                key={item} 
                id={i}
                changeSlide={changeSlide}
            />
        )
    })

    const testimonialList = testimonialsData.map(({profilePic,text,location},i) => {
        return(
            <TestimonialItem 
                key={i}
                profilePic={profilePic}
                text={text}
                location={location}
            />
        )
    })

    useEffect(() => {
        paint(0)
    },[])

    return(
        <section className="testimonials">
            <div className="testimonials__container container">
                <img src={heading} alt="Heading Picture" className="testimonials__heading" />
                <div className="testimonials__slider">
                    <div className="testimonials__wrapper" style={{transform:`translateX(-${translate})`, width:`${wrapperWidth}`}}>
                        {testimonialList}
                    </div>
                    <div className="testimonials__dots" >
                        {dots}
                    </div>
                </div>
            </div>   
        </section>
    )
}

export default Testimonials

const Dot = ({id,changeSlide}) => {
    return(
        <span id={id} onClick={(e) => changeSlide(e)} className='testimonials__dot'></span>
    )
}