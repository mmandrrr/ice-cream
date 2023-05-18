import { testimonialsData } from "../components/Main/Testimonials/testimonialsData";

export class Slider {
    constructor() {
        this.dotsLength = testimonialsData.length;
    }

    createDots = () => {    
        const dotsArr = [];

        for(let i = 0; i < this.dotsLength; i++) {
            dotsArr.push(i);
        }

        return dotsArr;
    }

    paintDot = (i) => {
        const dots = document.querySelectorAll('.testimonials__dot');

        dots.forEach(elem => {
            elem.classList.remove('active');
        })

        dots[i].classList.add('active');
    }

    translateWrapper = (id) => {
        return `${id * (100 / this.dotsLength)}%`
    }

    returnWrapperWidth = () => {
        return `${this.dotsLength * 100}%`
    }
}