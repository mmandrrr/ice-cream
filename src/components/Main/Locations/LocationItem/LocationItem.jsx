

const LocationItem = () => {
    return(
        <div className="locs__item">
            <h4 className="locs__title">CAFE</h4>
            <article className="locs__address">
                Chicago
                <span className='locs__address_orange'>10340 Ridgeland Ave, Chicago Ridge, IL 60415, USA</span>
            </article>
            <span className="locs__divider"></span>
            <article className="locs__schedule">
                Monday - Friday
                <span className="locs__schedule_grey">06:00 AM - 10:00 PM</span>
                Saturday - Sunday
                <span className="locs__schedule_grey">08:00 AM - 16:00 PM</span>
            </article>
            <span className="locs__divider"></span>
            <article className="locs__contacts">
                +61(0) 383 766 284 <br />
                noreply@envato.com
            </article>
        </div>
    )
}

export default LocationItem