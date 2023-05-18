

const TestimonialItem = ({profilePic,text,location}) => {
    return(
        <div className="testimonials__item">
            <img src={profilePic} alt="Client" />
            <p className="testimonials__text">
                {text}
            </p>
            <span className="testimonials__name">{location}</span>
        </div>
    )
}

export default TestimonialItem