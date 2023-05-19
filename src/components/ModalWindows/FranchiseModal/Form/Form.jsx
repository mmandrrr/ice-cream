import Button from "../../../ServiceElements/Button";

const Form = () => {
    return(
        <form action="submit" className="frnch__form">
            <input type="text" name="name" placeholder="Name" />
            <input type="tel" name="phone" placeholder="Phone" />
            <input type="email" name="email" placeholder="Email" />
            <textarea name="comment" cols="30" rows="10" placeholder="Comment"></textarea>
            <Button 
                text='Submit'
                className='btn_yellow-bg'
                img={false}
            />
        </form>
    )
}

export default Form